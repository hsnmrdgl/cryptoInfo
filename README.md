# Crypto Info

A website that provides data about cryptocurrencies with data received via API. 
With its Dockerfile, it can be run as a container on the Docker desktop application.

#### [Click for demo](https://hsnmrdgl.github.io/cryptoInfo/ "Click for demo")

📌 [API source](https://www.coingecko.com/en/api "API source")


### Dockerfile Run

▶️ First building an image for container.

``docker build -t [IMAGE NAME] .``

▶️ Then run container on image created before.

`docker container run -d --name [CONTAINER NAME] -p [PORT NUMBER] [IMAGE NAME]`
