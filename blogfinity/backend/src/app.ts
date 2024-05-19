import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import createHttpError, { isHttpError } from "http-errors";
import BlogRoute from "./routes/blog.route";
import UserRoute from "./routes/user.route";
import env from "./util/validateEnv";

const app = express();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require("cors");

//middleware for cors
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//middleware for logging
app.use(morgan("dev"));

//for sending json to the express server
app.use(express.json());

//middleware to handle sessions (including this in here is important)
app.use(
  session({
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // lifetime of a cookie
    },
    rolling: true, // automatically refresh cookie while user using the website
    store: MongoStore.create({
      mongoUrl: env.MONGO_CONNECTION_STRING,
    }),
  })
);

//passing all the blog related routes to the blog route and user route handler
app.use("/api/users", UserRoute);
app.use("/api/blogs", BlogRoute);

//middleware for handling invalid routes
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

//middleware for handling errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occured";
  let statusCode = 500;

  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }

  res.status(statusCode).json({ error: errorMessage });

  /*
  if (error instanceof Error) {
    errorMessage = error.message;
    res.status(statusCode).json({ error: errorMessage });
  }
  */
});

export default app;
