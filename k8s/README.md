Using command:

```
rafael@Ultranote:/mnt/c/Users/rg_ma/Repository/NodeJS/Ania Kubow/climate-change-api/k8s$ kind create cluster --config kind-config.yaml --name giropops

rafael@Ultranote:/mnt/c/Users/rg_ma/Repository/NodeJS/Ania Kubow/climate-change-api/k8s$ kubectl apply -f deployment.yaml
deployment.apps/climate-change-api created

rafael@Ultranote:/mnt/c/Users/rg_ma/Repository/NodeJS/Ania Kubow/climate-change-api/k8s$ kubectl get deployment
NAME                 READY   UP-TO-DATE   AVAILABLE   AGE
climate-change-api   1/1     1            1           2m8s

rafael@Ultranote:/mnt/c/Users/rg_ma/Repository/NodeJS/Ania Kubow/climate-change-api/k8s$ kubectl expose deployment climate-change-api --type=NodePort --name=climate-change-api

service/climate-change-api exposed

rafael@Ultranote:/mnt/c/Users/rg_ma/Repository/NodeJS/Ania Kubow/climate-change-api/k8s$ kubectl get svc

NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
climate-change-api   NodePort    10.96.142.11   <none>        8000:30994/TCP   4s 
kubernetes           ClusterIP   10.96.0.1      <none>        443/TCP          8m17s
```