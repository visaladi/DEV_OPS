import { BlogModel } from "../models/blog.model";

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMessage = errorBody.error;
    throw Error(errorMessage);
  }
}

export async function fetchBlogs(): Promise<BlogModel[]> {
  const response = await fetchData("http://localhost:8080/api/blogs", {
    method: "GET",
  });

  return response.json();
}

export async function fetchBlogsByUsername(
  loggedInUser: string
): Promise<BlogModel[]> {
  const response = await fetchData(
    "http://localhost:8080/api/blogs/find/blogs",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loggedInUser }),
    }
  );

  return response.json();
}

export interface BlogInput {
  title: string;
  content: string;
  author: string;
  imageUrl: string;
}

export async function createBlog(blog: BlogInput): Promise<BlogModel> {
  const response = await fetchData("http://localhost:8080/api/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });

  return response.json();
}

export async function updateBlog(
  blogId: string,
  blog: BlogInput
): Promise<BlogModel> {
  const response = await fetchData(
    "http://localhost:8080/api/blogs/" + blogId,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }
  );
  return response.json();
}

export async function deleteBlog(blogId: string) {
  await fetchData("http://localhost:8080/api/blogs/" + blogId, {
    method: "DELETE",
  });
}
