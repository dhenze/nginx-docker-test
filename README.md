Dockerized Nginx static file checker
====================================

Sample project using two linked docker containers
- __static-server__: An nginx proxy that checks if a file exists on the filesystem for the current URI and serves it, or proxies the request to an application server otherwise. E.g. `GET /some/route` -> `/static_root/some/route.html`.

- __api_server__: Very simple test application receiving the proxied requests.

Try
---

- Make sure to have docker installed and running.  
  _(Archlinux) `pacman -S docker && systemctl start docker`_

- **Fetch** both docker images. _(TODO)_  
  _`docker pull olanod/test-api-server olanod/test-static-server`_

- or **Build** the images  
  _`docker build olanod/test-api-server .`_ _(from api-server)_  
  _`docker build olanod/test-static-server .`_ _(from static-server)_

- **Run** to test the created containers  
  _`docker run --name api-server olanod/test-api-server`_  
  _`docker run -p 80 --link api-server olanod/test-static-server`_
