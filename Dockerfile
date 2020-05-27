FROM nginx:alpine
COPY /dist/border-wars-frontend /usr/share/nginx/html

COPY /nginx.conf /etc/nginx/conf.d/default.conf
