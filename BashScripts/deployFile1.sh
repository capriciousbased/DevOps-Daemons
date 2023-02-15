echo "running bash script deployFile1.sh"

# loop through each argument and echo it
for arg in "$@"
do
  echo "bash parameter: $arg"
done

# create the kustomization file
echo "apiVersion: kustomize.config.k8s.io/v1beta1" > ./yml-Files/kustomize.yml
echo "kind: Kustomization" >> ./yml-Files/kustomize.yml
echo "resources:" >> ./yml-Files/kustomize.yml
echo "  - nginx.yml" >> ./yml-Files/kustomize.yml
echo "images:" >> ./yml-Files/kustomize.yml
echo "  - name: ${1}" >> ./yml-Files/kustomize.yml
echo "   - newName: $2/$1" >> ./yml-Files/kustomize.yml
echo "     newTag: ${3}" >> ./yml-Files/kustomize.yml