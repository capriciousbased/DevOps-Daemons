FROM nginx:alpine

COPY ./index.html /usr/share/nginx/html
COPY ./assets /usr/share/nginx/html/assets

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN chown -R nginx:nginx /usr/share/nginx/html/assets
RUN chmod -R 755 /usr/share/nginx/html/assets

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
