pipeline{
agent any

tools {nodejs "node"}

stages{

    stage('Build Server') {
        steps {
            dir('./') {
            script {
                withAWS(region:'ap-northeast-2', credentials:'KCND-AWS-IAM-ibizadmin') {
                def login = ecrLogin()
                echo "${login}"
                // 실제 로그인
                sh "${login}"
                sh """
                npm install
                npm run build
                npm run
                pwd
                docker build -t 602674109503.dkr.ecr.ap-northeast-2.amazonaws.com/kcnd-dev-repo-web:LATEST .
                docker push 602674109503.dkr.ecr.ap-northeast-2.amazonaws.com/kcnd-dev-repo-web:LATEST
                docker rmi 602674109503.dkr.ecr.ap-northeast-2.amazonaws.com/kcnd-dev-repo-web:LATEST
                """
                }
            }
            }
        }
    }
    


        stage('Deploy') {
        steps {
            dir('./codedeploy') {
            script {



                try {

                    createAppspecAndUpload()
                    //S3에 Appspec.yaml 업로드

                    def cmd = """
                        aws deploy create-deployment --cli-input-json file://create-deployment.json --region ap-northeast-2 | jq '.deploymentId' -r
                        """
                    def deploymentId = withAWS(region:'ap-northeast-2', credentials:'KCND-AWS-IAM-ibizadmin') {
                        return executeAwsCliByReturn(cmd)
                    }


                    cmd = "aws deploy get-deployment --deployment-id ${deploymentId} | jq '.deploymentInfo.status' -r"
                    def result = ""
                    timeout(unit: 'SECONDS', time: 900) {
                        while ("${result}" != "Succeeded") {

                            result = withAWS(region:'ap-northeast-2', credentials:'KCND-AWS-IAM-ibizadmin') {
                                return executeAwsCliByReturn(cmd)
                            }
                            print("${result}")
                            

                            if ("${result}" == "Failed") {
                                exit 1
                            }

                            // 배포중이면 취소
                            else if("${result}" == "") {
                                print("now, codedeploy is deploying. cancel deploy")
                                exit 1
                            }

                            sleep(15)

                        }
                    }

                } catch(e) {
                    print(e)
                    cleanWs()
                    currentBuild.result = 'FAILURE'
                } finally {
                    cleanWs()
                }

                
                }
            }



        }

    }

}



}


def createAppspecAndUpload() {
    sh """
cat << EOF > appspec.yaml
version: 0.0
Resources:
  - TargetService:
      Type: AWS::ECS::Service
      Properties:
        TaskDefinition: "arn:aws:ecs:ap-northeast-2:602674109503:task-definition/KCND-DEV-TASK-WEB:3"
        LoadBalancerInfo:
          ContainerName: "KCND-DEV-CON-WEB"
          ContainerPort: 3000
        PlatformVersion: "LATEST"
EOF
    """

    withAWS(region:'ap-northeast-2', credentials:'KCND-AWS-IAM-ibizadmin') {
        sh "aws s3 cp appspec.yaml s3://kcnd-dev-s3-cdp/KCND-DEV-CODEDEPLOY-WEB/appspec.yaml"   
    }

}

def  executeAwsCliByReturn(cmd){
    return sh(returnStdout: true, script: cmd).trim()
}

