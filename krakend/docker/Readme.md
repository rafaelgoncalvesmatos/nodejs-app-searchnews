Use this command:

```
docker run -p "8080:8080" -v $PWD:/etc/krakend/ devopsfaith/krakend:2.5.0 run -c krakend.json
```

Use specific directory in your computer:

```
docker run -p "8080:8080" -v ./config/krakend:/etc/krakend/ devopsfaith/krakend:2.5.0 run -c krakend.json
```