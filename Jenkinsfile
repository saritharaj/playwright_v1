// Jenkinsfile.windows
// Jenkins pipeline for Playwright + Cucumber project on Windows

pipeline {

    agent any

    tools {
        git 'Default'
    }

    options {
        timestamps()
    }

    environment {
        NODE_ENV = 'test'
        CI = '1'
    }

    stages {

        stage('🔄 Checkout') {
            steps {
                checkout scm
            }
        }

        stage('📦 Install Dependencies') {
            steps {
                powershell 'npm ci'
            }
        }

        stage('🤖 Install Playwright Browsers') {
            steps {
                powershell 'npx playwright install'
            }
        }

        stage('▶️ Run Cucumber Tests') {
            steps {
                powershell 'npm run test:cucumber'
            }
        }
    }

    post {

        always {
            echo "Build completed with status: ${currentBuild.currentResult}"
        }

        success {
            echo "✅ Cucumber tests completed successfully."
        }

        failure {
            echo "❌ Cucumber tests failed."
        }
    }
}