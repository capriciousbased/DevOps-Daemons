echo "running bash script deployFile1.sh"

for arg in "$@"
do
  echo "bash parameter"
  echo "$arg"
done

  echo" apiVersion: kustomize.config.k8s.io/v1beta1"            >  ./yml-Files/kustomization.yml
  echo" kind: Kustomization"                                    >> ./yml-Files/kustomization.yml
  echo" resources:"                                             >> ./yml-Files/kustomization.yml
  echo"  - deployment.service.ingress.yml"                      >> ./yml-Files/kustomization.yml
  echo" images:"                                                >> ./yml-Files/kustomization.yml
  echo "  - name: nginxcomic"                                   >> ./yml-Files/kustomization.yml
  echo "newName: ${1}:${2}"                                     >> ./yml-Files/kustomization.yml
