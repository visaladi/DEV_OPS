pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/visaladi/3803-Adikari'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t visal0956/nodeapp-cuban:%BUILD_NUMBER% .'
            }
        }
        
        stage('Start Container') {
            steps {
                bat 'docker run -d -p 3000:3000 visal0956/nodeapp-cuban:%BUILD_NUMBER%'  // Correct the image name
            }
        }
    }
    
    post {
        always {
            bat 'docker logout'  // This should be outside of container execution context
        }
    }
}
