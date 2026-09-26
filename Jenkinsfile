// Jenkinsfile.windows
// Jenkins pipeline for Playwright project on Windows

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

        stage('▶️ Run Playwright Tests') {
            steps {
                powershell 'npm test'
            }
        }
    }

    post {

        always {
            echo "Build completed with status: ${currentBuild.currentResult}"
        }

        success {
            echo "✅ Playwright tests completed successfully."
        }

        failure {
            echo "❌ Playwright tests failed."
        }
    }
}