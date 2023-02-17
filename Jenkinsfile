// WRITE 'force' IN COMMIT TO FORCE A BUILD FOR EVERY IMAGE
def images = [  
 // ["name": "farbenspiel", "path": "./Farbenspiel",    "needUpdate": false ],
 // ["name": "htmlcomic",   "path": "./HtmlComic",      "needUpdate": false ],
 // ["name": "reactcomic",  "path": "./mull/ReactComic","needUpdate": false ],  
 // ["name": "testcomic",   "path": "./TestComic",      "needUpdate": false ],
 // ["name": "frontend",    "path": "./frontend",       "needUpdate": false ],
 // ["name": "comikbook",   "path": "./frontendlatest", "needUpdate": false ],
    ["name": "jestandnpm",  "path": "./TestImage"     , "needUpdate": false],
]
pipeline {
  environment {
    // HARDCODED VARIABLES
    // These variables are manually set and can be changed if necessary
    repo       = 'github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git'
    branch     = 'main'
    acr        = "devops2022.azurecr.io"
    gitCred    = '2eb747c4-f19f-4601-ab83-359462e62482'
    // AUTOMATICALLY  GENERATED VARIABLES
    // These variables are automatically generated and should not be edited manually
    // Bash variables in SCREAMING_SNAKE_CASE
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG    = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()
    tag        = "test"
    //tag1       = "v-"
    //tag        = tag1.concat(BUILD_NUMBER.toString())
    isJenkins  = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    isForce    = env.GIT_MSG.contains("force")
  }
  agent any
  stages {
    stage('Check for Image Changes') {
      when{ expression {isJenkins}}
      steps {
        script {
          for (def image : images) {
            def path = image["path"]
            def changes = sh(script: "git diff HEAD^ --name-only ${path}", returnStdout: true).trim()
            def commitMsg = sh(script: "git log -1 --pretty=%B", returnStdout: true).trim()
            image["needUpdate"] = isForce
            if ( changes != "" ) {
              image["needUpdate"] = true
            }
          }
        }
      }
    }
    stage('BUILD + PUSH DOCKER IMAGE') {
      when { expression {images.any { image -> image.needUpdate }}}
      steps{
        script {
          for (def image : images) {
            try {
              def imageTag   = "${image.name}:${tag}"
              withDockerRegistry(credentialsId: 'acr_creds', url: "https://${acr}/v2/") {
                sh "docker build -t ${acr}/${imageTag} ${image.path}"
                sh "docker push ${acr}/${imageTag}"
                sh "docker rmi ${acr}/${imageTag}"
              }
            } catch (Exception e) {
              println "Error building Docker image: ${e.getMessage()}"
              currentBuild.result = 'FAILURE'
              error "Failed to build Docker image for ${image.name}"
            }
          }
        }
      }
    }
  //  stage('Check Dependencies') {
  //    agent any
  //    steps {
  //      script {
  //        def jestExists = sh(script: 'command -v jest >/dev/null 2>&1 && echo "Found" || echo "Not Found"', returnStatus: true) == 0
  //        def npmExists = sh(script: 'which npm >/dev/null 2>&1 && echo "Found" || echo "Not Found"', returnStatus: true) == 0
  //        if (jestExists) {
  //          echo "Jest is available"
  //        } else {
  //          error "Jest is not available"
  //        }
  //        if (npmExists) {
  //          echo "NPM is available"
  //        } else {
  //          error "NPM is not available"
  //        }
  //      }
  //    }
  //  }
  //  stage('Run Tests') {
  //    agent {
  //      docker {
  //        image 'my-image-name'
  //      }
  //    }
  //    when {
  //      expression {
  //        // Only run this stage if both npm and jest are available
  //        return sh(script: 'which npm >/dev/null 2>&1 && which jest >/dev/null 2>&1', returnStatus: true) == 0
  //      }
  //    }
  //    steps {
  //      sh "npm test"
  //    }
  //    post {
  //      always {
  //        echo "Test stage finished"
  //      }
  //      failure {
  //        error "Jest tests failed. Skipping subsequent stages."
  //      }
  //    }
  //  }
  //  stage('DEPLOY DEPLOYMENT FILE') {
  //    when { expression { images.any { it.needUpdate } } }
  //    steps{
  //      script {
  //        withCredentials([usernamePassword(credentialsId: "${gitCred}", passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
  //          checkout([
  //            $class: 'GitSCM',
  //            branches: [[name: '*/main']],
  //            doGenerateSubmoduleConfigurations: false,
  //            extensions: [],
  //            submoduleCfg: [],
  //            userRemoteConfigs: [[
  //              credentialsId: "${gitCred}",
  //              url: "https://${repo}"
  //            ]]
  //          ])
  //          sh "chmod +x './BashScripts/deployFile1.sh'"
  //          for (def image : images) {
  //            if (image.needUpdate) {
  //              def imageTag   = "${image.name}:${tag}"
  //              try {
  //                sh "sed -i 's|image:.*|image: devops2022.azurecr.io/${imageTag} |' ./yml-Files/allinone.yml"             
  //              } catch (Exception e) {
  //                println "Error deploying deployment file: ${e.getMessage()}"
  //                currentBuild.result = 'FAILURE'
  //                error "Failed to deploy deployment file for ${image.name}"
  //              }
  //            }
  //          }
  //          sh "git add ./yml-Files/allinone.yml"
  //          sh "git commit -m 'jenkins push'"
  //          try {
  //            sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git HEAD:main"
  //          } catch (Exception e) {
  //            println "Error pushing deployment file: ${e.getMessage()}"
  //            currentBuild.result = 'FAILURE'
  //            error "Failed to push deployment file"
  //          }
  //        }
  //      }
  //    }
  //  }
  }
}
