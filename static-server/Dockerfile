FROM nginx

MAINTAINER Daniel Olano <danielolanoc@gmail.com>

# delete default configuration
RUN rm /etc/nginx/conf.d/default.conf

# Add new configuration
COPY nginx.conf /etc/nginx/conf.d/static.conf

COPY static /srv/static
