echo inside 
git pull https://$1:$2@github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git HEAD:main
git checkout main

echo "apiVersion: kustomize.config.k8s.io/v1beta1"                    >  ./yml-Files/kustomization.yml
echo "kind: Kustomization"                                            >> ./yml-Files/kustomization.yml
echo "  resources:"                                                   >> ./yml-Files/kustomization.yml
echo "   - nginx.yml"                                                 >> ./yml-Files/kustomization.yml
echo "     images:"                                                   >> ./yml-Files/kustomization.yml
echo "      - name: felixstr2"                                        >> ./yml-Files/kustomization.yml
echo "        newName: devops2022.azurecr.io/nginxanis:${GIT_COMMIT}" >> ./yml-Files/kustomization.yml

git add .kustomization.yml.yaml
git commit -m 'made with extenal bash script deployFile2.sh'
git push https://$1:$2@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main
