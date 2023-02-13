echo "running bash script deployFile1.sh"

for arg in "$@"
do
  echo "bash paramter"
  echo "$arg"
done

  echo 'apiVersion: kustomize.config.k8s.io/v1beta1             >  ./yml-Files/kustomize.yml
  echo" kind: Kustomization"                                    >> ./yml-Files/kustomize.yml
  echo" resources:"                                             >> ./yml-Files/kustomize.yml 
  echo"  - nginx.yml"                                           >> ./yml-Files/kustomize.yml
  echo" images:"                                                >> ./yml-Files/kustomize.yml
  echo "  - name: nginxcomic"                                   >> ./yml-Files/kustomize.yml
  echo "newName: $3:$4" >> ./yml-Files/kustomize.yml

git add ./yml-Files/kustomize.yml
git commit -m 'jenkins '"
sh git push "https://$4:$5 +'HEAD:main'

