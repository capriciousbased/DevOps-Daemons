
echo "apiVersion: kustomize.config.k8s.io/v1beta1"    >  ./yml-Files/kustomize.yml
echo "kind: Kustomization"                            >> ./yml-Files/kustomize.yml
echo "resources:"                                     >> ./yml-Files/kustomize.yml
echo "  - allinone.yml"                               >> ./yml-Files/kustomize.yml
echo "images:"                                        >> ./yml-Files/kustomize.yml
echo "   - name: nginxcomic"                          >> ./yml-Files/kustomize.yml
echo "     newName: devops2022.azurecr.io/${1}"       >> ./yml-Files/kustomize.yml
echo "     newTag: ${2}"                              >> ./yml-Files/kustomize.yml