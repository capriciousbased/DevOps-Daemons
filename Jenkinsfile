// WRITE 'force' IN COMMIT TO FORCE A BUILD FOR EVERY IMAGE
def images = [  
 // ["name": "farbenspiel", "path": "./Farbenspiel",  "needUpdate": false ],
 // ["name": "htmlcomic",   "path": "./HtmlComic",    "needUpdate": false ],
 // ["name": "reactcomic",  "path": "./mull/ReactComic",   "needUpdate":  ],  
 // ["name": "testcomic",   "path": "./TestComic",    "needUpdate": false ],
  ["name": "frontend",    "path": "./frontend",    "needUpdate": false ]
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
    tag1       = "v-"
    tag        = tag1.concat(BUILD_NUMBER.toString())
    isJenkins  = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
    isForce    = env.GIT_COMMIT.contains('force')
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
            println isForce
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
    stage('DEPLOY DEPLOYMENT FILE') {
      when { expression { images.any { it.needUpdate } } }
      steps{
        script {
          withCredentials([usernamePassword(credentialsId: "${gitCred}", passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
            checkout([
              $class: 'GitSCM',
              branches: [[name: '*/main']],
              doGenerateSubmoduleConfigurations: false,
              extensions: [],
              submoduleCfg: [],
              userRemoteConfigs: [[
                credentialsId: "${gitCred}",
                url: "https://${repo}"
              ]]
            ])
            sh "chmod +x './BashScripts/deployFile1.sh'"
            for (def image : images) {
              if (image.needUpdate) {
                def imageTag   = "${image.name}:${tag}"
                try {
                  sh "sed -i 's|image:.*|image: devops2022.azurecr.io/${imageTag} |' ./yml-Files/allinone.yml"             
                } catch (Exception e) {
                  println "Error deploying deployment file: ${e.getMessage()}"
                  currentBuild.result = 'FAILURE'
                  error "Failed to deploy deployment file for ${image.name}"
                }
              }
            }
            sh "git add ./yml-Files/allinone.yml"
            sh "git commit -m 'jenkins push'"
            try {
              sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git HEAD:main"
            } catch (Exception e) {
              println "Error pushing deployment file: ${e.getMessage()}"
              currentBuild.result = 'FAILURE'
              error "Failed to push deployment file"
            }
          }
        }
      }
    }
  }
}
