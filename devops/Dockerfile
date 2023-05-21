FROM alpine:3.17

RUN apk update && apk upgrade && \
    apk add bash nginx php php-fpm

COPY etc/nginx /etc/nginx
COPY src /usr/share/nginx/html

ARG APP_VERSION
RUN echo "<html><head></head><body><h1>App version: ${APP_VERSION:-dev}</h1></body></html>" > /usr/share/nginx/html/version.html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["/bin/bash", "-c", "php-fpm81 && chmod 755 /usr/share/nginx/html/* && nginx -g 'daemon off;'"]
