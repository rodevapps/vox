#!/bin/bash

docker container stop php-nginx-run -t 1
docker container rm -f php-nginx-run
docker build -t php-nginx . --no-cache
docker run --name php-nginx-run -d -p 80:80 php-nginx

exit 0
