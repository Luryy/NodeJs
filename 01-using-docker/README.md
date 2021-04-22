<h1 align="center">Node.JS Docker :whale:</h1>

_This project have a implementation of Node.JS using docker_

----
<br/>

## Aplication
Create a simple http server using docker

## Reference
- [https://nodejs.org/en/docs/guides/nodejs-docker-webapp/](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

## Getting Started

You shoud have [docker](https://www.docker.com/) instaled.

Built docker image
```
docker build . -t node-app
```

Start your container
```
docker run -p 3000:8080 -d node-app
```

Make a request
```
curl -i localhost:3000
```

If you recive the response below, everything is ok
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Thu, 22 Apr 2021 21:51:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello World%   
```

## Autor

👤 **Lucas Yuri**

- Github: [Luryy](https://github.com/luryy)
- LinkedIn: [Lucas Yuri](https://linkedin.com/in/lucas-yuri)


## 📝 License

Copyright © 2021 [Lucas Yuri](https://github.com/luryy).
This project is [MIT](LICENSE) licensed.
