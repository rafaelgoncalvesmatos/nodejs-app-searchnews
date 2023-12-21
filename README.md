Segue link de referencia:

https://www.youtube.com/watch?v=GK4Pl-GmPHk

**Docker**

Build image with command:

```
docker build -t search-v1 .
```

Check the image created:

```
docker images
```

To run this image use this command:

```
docker run -p 8000 searchnews-v1
```

for tag and push image to use this command:

```
docker tag search-v1:latest rafaelgoncalvesmatos/search-v1:latest
docker push rafaelgoncalvesmatos/search-v1:latest
```
