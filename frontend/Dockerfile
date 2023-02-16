FROM nginx:alpine

RUN mkdir /usr/share/nginx/html/assets
RUN chown -R nginx:nginx /usr/share/nginx/html/assets
RUN chmod -R 755 /usr/share/nginx/html/assets

COPY ./index.html /usr/share/nginx/html
COPY ./assets /usr/share/nginx/html/assets

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
