FROM nginx:alpine
COPY nginx.config /etc/nginx/nginx.conf
COPY nginx_common.config /etc/nginx/nginx_common.conf
EXPOSE 80
COPY ./index.html /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]