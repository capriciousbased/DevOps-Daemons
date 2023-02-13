echo "running bash script deployFile1.sh"

for arg in "$@"
do
  echo "bash paramter"
  echo "$arg"
done

  echo 'apiVersion: kustomize.config.k8s.io/v1beta1             >  ./argocd/kustomize.yaml
  echo" kind: Kustomization"                                    >> ./argocd/kustomize.yaml
  echo" resources:"                                             >> ./argocd/kustomize.yaml  
  echo"  - nginx.yml"                                           >> ./argocd/kustomize.yaml
  echo" images:"                                                >> ./argocd/kustomize.yaml
  echo "  - name: nginxcomic"                                   >> ./argocd/kustomize.yaml
  echo "newName: $3:$4" >> ./kustomize.yaml

git commit -m 'kustom [skip ci]'"
sh git push "https://$4:$5 +'HEAD:main'

