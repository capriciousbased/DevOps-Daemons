if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <image1> <tag1> [<image2> <tag2> ...]"
  exit 1
fi
  
  echo "apiVersion: kustomize.config.k8s.io/v1beta1"            >  ./yml-Files/kustomization.yml
  echo "kind: Kustomization"                                    >> ./yml-Files/kustomization.yml
  echo "resources:"                                             >> ./yml-Files/kustomization.yml
  echo "  - allinone.yml"                                       >> ./yml-Files/kustomization.yml
  echo "images:"                                                >> ./yml-Files/kustomization.yml
  echo "  - name: nginxcomic"                                   >> ./yml-Files/kustomization.yml
  echo "    newName: devops2022.azurecr.io/${2}"                >> ./yml-Files/kustomization.yml
  echo "    newTag: ${3}"                                       >> ./yml-Files/kustomization.yml

