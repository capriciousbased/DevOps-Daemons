echo "running bash script deployFile1.sh"

for arg in "$@"
do
  echo "bash paramter"
  echo "$arg"
done

git pull "https://$1:$2@github.com/Brights-DevOps-2022-Script/DevOps-Daemons.git HEAD:main"
git checkout main 

  echo 'apiVersion: kustomize.config.k8s.io/v1beta1             >  ./argocd/kustomize.yaml
  echo" kind: Kustomization"                                    >> ./argocd/kustomize.yaml
  echo" resources:"                                             >> ./argocd/kustomize.yaml  
  echo"  - nginx.yml"                                           >> ./argocd/kustomize.yaml
  echo" images:"                                                >> ./argocd/kustomize.yaml
  echo "  - name: nginxcomic"                                   >> ./argocd/kustomize.yaml
  echo "newName: $3:$4" >> ./kustomize.yaml

git add ./kustomize.yaml"
git commit -m 'kustom [skip ci]'"
git push https://${GIT_USERNAME}:$5 +'HEAD:main'

