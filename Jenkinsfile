pipeline {
    agent any // Cela indique que Jenkins peut exécuter ce pipeline sur n'importe quel agent disponible

    stages {
        stage('Checkout') {
            steps {
                // Obtient le code du dépôt Git configuré dans le job Jenkins
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                // Mettez ici les commandes pour construire votre projet
                echo 'Building..'
                // Par exemple: sh 'make'
            }
        }
        
        stage('Test') {
            steps {
                // Mettez ici les commandes pour tester votre projet
                echo 'Testing..'
                // Par exemple: sh './run-tests.sh'
            }
        }
        
        stage('Deploy') {
            steps {
                // Mettez ici les commandes pour déployer votre projet
                echo 'Deploying..'
                // Par exemple: sh './deploy.sh'
            }
        }
    }
    
    post {
        always {
            // Actions à effectuer après les stages, comme le nettoyage, réussite ou échec.
            echo 'This will always run'
        }
        success {
            // Actions à effectuer uniquement si le pipeline a réussi
            echo 'This will run only if successful'
        }
        failure {
            // Actions à effectuer uniquement si le pipeline a échoué
            echo 'This will run only if failed'
        }
    }
}
