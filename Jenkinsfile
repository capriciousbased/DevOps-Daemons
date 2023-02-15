pipeline {
  environment {
    // HARDCODED VARIABLES
    // These variables are manually set and can be changed if necessary
    repo       = 'github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git'
    branch     = 'main'
    acr        = "devops2022.azurecr.io"
    image      = "comicbook"
    gitCred    = '2eb747c4-f19f-4601-ab83-359462e62482'
    dockerPath = "./TestComic"
    // AUTOMATICALLY  GENERATED VARIABLES
    // These variables are automatically generated and should not be edited manually
    // Bash variables in SCREAMING_SNAKE_CASE
    GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
    GIT_AUTHOR = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%an"').trim()
    GIT_MSG    = sh(returnStdout: true, script: 'git log -1 --pretty=format:"%s"').trim()
    tag        = "${GIT_COMMIT}"
    imageTag   = "${image}:${tag}"
    // conditions
    isJenkins           = env.GIT_AUTHOR.equalsIgnoreCase('Jenkins')
  }
  agent any
  stages {
    stage('print Infos') {
      steps {
        script {
          if (GIT_MSG.contains("update") && (GIT_MSG.contains("minor") || GIT_MSG.contains("major") || GIT_MSG.contains("patch"))) {
            isNonBuildRelease = true;
          }
          println "Git Author        : ${GIT_AUTHOR}"
          println "Git Commit        : ${GIT_COMMIT}"
          println "Git Message       : ${GIT_MSG}"
          println "is jenkins        : ${isJenkins}"
          println "Image tag         : ${imageTag}"
          println "ACR login Server  : ${acr}"
          println "Repo              : ${repo}"
          println "build number      : ${buildNO}"
          println "is non Build      : ${isNonBuildRelease}"
        }
      }
    }
    stage('BUILD + PUSH DOCKER IMAGE') {
      when{ expression {isJenkins}}
      steps {
        withDockerRegistry(credentialsId: 'acr_creds', url: "https://${acr}/v2/") {
          sh "docker build -t ${acr}/${imageTag} ${dockerPath}"
          sh "docker push ${acr}/${imageTag}"
          sh "docker rmi ${acr}/${imageTag}"
        }
      }
    }
    stage('DEPLOY DEPLOYMENT FILE') {
      when{ expression {isJenkins}}
      steps {
        withCredentials([usernamePassword(credentialsId: "${gitCred}", passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
          checkout(
          [$class: 'GitSCM',
           branches: [[name: '*/main']],
           doGenerateSubmoduleConfigurations: false,
           extensions: [],
           submoduleCfg: [],
           userRemoteConfigs: [[
              credentialsId: "${gitCred}",
              url: "https://${repo}"
           ]]
          ]
        )
          sh "chmod +x './BashScripts/deployFile1.sh'"
          sh "./BashScripts/deployFile1.sh ${image} ${tag} ${repo}"
          sh "git add ./yml-Files/kustomization.yml"
          sh "git commit -m 'jenkins push'"
          sh "git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git HEAD:main"
        }
      }
    }
  }
}
