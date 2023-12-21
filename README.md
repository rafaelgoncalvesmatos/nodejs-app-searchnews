Segue link de referencia:

https://www.youtube.com/watch?v=GK4Pl-GmPHk

**Docker**

Build image with command:

```
docker build -t search-v5 .
```

Check the image created:

```
docker images
REPOSITORY                                      TAG       IMAGE ID       CREATED              SIZE
search-v5                                       latest    169d9af74fe8   About a minute ago   862MB
search-v4                                       latest    91f10d3f3687   5 minutes ago        867MB
search-v3                                       latest    9738f47df15a   7 minutes ago        867MB
search-v2                                       latest    5d7e0d297885   18 minutes ago       862MB
```

To run this image use this command:

```
docker run -p 8000:8000 -d search-v5
```

List your container:

```
docker ps
CONTAINER ID   IMAGE                  COMMAND                  CREATED              STATUS              PORTS                       NAMES
5d94d2e2654a   search-v5              "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:8000->8000/tcp      zealous_blackburn
```

Check endpoint is working:

http://localhost:8000/
http://localhost:8000/v1/news

Access your container with shell:

```
docker exec -it 5d94 sh
# 
```

Or using the name:

```
docker exec -it zealous_blackburn sh
# 
```

for tag and push image to use this command:

```
docker tag search-v1:latest rafaelgoncalvesmatos/search-v1:latest
docker push rafaelgoncalvesmatos/search-v1:latest
```
