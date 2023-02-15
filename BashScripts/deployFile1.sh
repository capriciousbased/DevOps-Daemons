#  echo "apiVersion: kustomize.config.k8s.io/v1beta1"            >  ./yml-Files/kustomization.yml
#  echo "kind: Kustomization"                                    >> ./yml-Files/kustomization.yml
#  echo "resources:"                                             >> ./yml-Files/kustomization.yml
#  echo "  - allinone.yml"                                       >> ./yml-Files/kustomization.yml
#  echo "images:"                                                >> ./yml-Files/kustomization.yml
#  echo "  - name: nginxcomic"                                   >> ./yml-Files/kustomization.yml
#  echo "    newName: devops2022.azurecr.io/${2}"                >> ./yml-Files/kustomization.yml
#  echo "    newTag: ${3}"                                       >> ./yml-Files/kustomization.yml

#!/bin/bash

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <image1> <tag1> [<image2> <tag2> ...]"
  exit 1
fi

# create the kustomization file
cat <<EOF > ./yml-Files/kustomization.yml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - allinone.yml
images:
EOF

# add each image to the kustomization file
for ((i=1; i<=$#; i+=2)); do
  image=${!i}
  tag=${!((i+1))}
  name=$(echo $image | tr / _)
  echo "  - name: $name" >> ./yml-Files/kustomization.yml
  echo "    newName: ${repo}/${image}" >> ./yml-Files/kustomization.yml
  echo "    newTag: $tag" >> ./yml-Files/kustomization.yml
done
