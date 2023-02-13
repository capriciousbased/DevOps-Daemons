echo "running bash script deployFile1.sh"

for arg in "$@"
do
  echo "bash parameter"
  echo "$arg"
done

  echo 'apiVersion: kustomize.config.k8s.io/v1beta1             >  ./yml-Files/kustomize.yml
  echo" kind: Kustomization"                                    >> ./yml-Files/kustomize.yml
  echo" resources:"                                             >> ./yml-Files/kustomize.yml 
  echo"  - nginx.yml"                                           >> ./yml-Files/kustomize.yml
  echo" images:"                                                >> ./yml-Files/kustomize.yml
  echo "  - name: nginxcomic"                                   >> ./yml-Files/kustomize.yml
  echo "newName: $1:$2" >> ./yml-Files/kustomize.yml
