#!bin/bash


docker pull vox/nginx-phpfpm:latest

docker stop vox_app
docker system prune -f

docker run -d --name=vox_app --restart unless-stopped -p 80:80 vox/nginx-phpfpm:latest


exit 0
