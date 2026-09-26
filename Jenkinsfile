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
             // Archive Playwright HTML report
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )
             // Publish Playwright HTML report in Jenkins
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            // Send Email Notification with HTML Report Attached
            emailext (
                to: 'your-email@example.com', // ⚠️ Replace with your email address
                subject: "${currentBuild.currentResult}: Job '${env.JOB_NAME}' [#${env.BUILD_NUMBER}]",
                mimeType: 'text/html',
                body: """
                    <h2>Build Status: ${currentBuild.currentResult}</h2>
                    <p><b>Job:</b> ${env.JOB_NAME}</p>
                    <p><b>Build Number:</b> #${env.BUILD_NUMBER}</p>
                    <p><b>URL:</b> <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>
                    <hr/>
                    <p>The Playwright HTML test report is attached to this email.</p>
                """,
                attachmentsPattern: 'playwright-report/index.html'
            )

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