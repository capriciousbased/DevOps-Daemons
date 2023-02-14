FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY assets /usr/share/nginx/html/assets
EXPOSE 80

CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
