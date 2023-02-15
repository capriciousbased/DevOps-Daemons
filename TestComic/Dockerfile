FROM nginx:alpine
COPY nginx.config /etc/nginx/nginx.conf
COPY nginx_common.config /etc/nginx/nginx_common.conf

COPY ./assets/index.html /usr/share/nginx/html/index.html 
COPY ./assets /usr/share/nginx/html/assets
EXPOSE 80

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
