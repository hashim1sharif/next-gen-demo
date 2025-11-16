## Cloud-Native Webapplicatie Deployment op AWS ECS Fargate

Dit project laat zien hoe je een complete cloud-native webapplicatie kunt deployen met behulp van Docker, AWS ECS Fargate, Application Load Balancer, ECR, Route 53 en een geautomatiseerde CI/CD-pipeline via GitHub Actions.

De infrastructuur is ontworpen om schaalbaar, veilig en hoog beschikbaar te zijn, volgens moderne DevOps- en AWS-architectuurprincipes.


## Functionaliteiten

Volledig Gecontaineriseerde Applicatie

Node.js / Express webserver

Docker-image geoptimaliseerd voor productie

Health-check endpoint: /api/healthz

![alt image](https://github.com/hashim1sharif/next-gen-demo/blob/103b91d846444fb47b0aba7d77a299c13ac34453/images/Screenshot%202025-11-16%20155255.png)


## AWS Infrastructuur

ECS Fargate (serverless containers)

ECR voor opslag van Docker-images

Application Load Balancer (ALB) in publieke subnets

Fargate-taken in private subnets

Route 53 domeinrouting

HTTPS-beveiliging via AWS Certificate Manager

Multi-AZ VPC voor hoge beschikbaarheid

Security groups voor netwerksegmentatie



## Geautomatiseerde CI/CD Pipeline

![alt image](https://github.com/hashim1sharif/next-gen-demo/blob/103b91d846444fb47b0aba7d77a299c13ac34453/images/Screenshot%202025-11-16%20154351.png)

De GitHub Actions workflow voert automatisch:

CI-checks (Node.js installeren, dependencies, build)

Build van de Docker-image

Push naar Amazon ECR

Nieuwe deployment op ECS Fargate

Zero-downtime rolling deployments


## Architectuurdiagram

![alt image](https://github.com/hashim1sharif/next-gen-demo/blob/1fba3678ab78c1ca1bedd06b63c924999fa96ba9/images/DevOps-Page-2.drawio.png)


De architectuur bestaat uit:

Gebruiker → Route 53 → Application Load Balancer

ALB → ECS Fargate taken (private subnets)

Multi-AZ VPC met public + private subnets

ECR → opslag van Docker-images

ECS Task Definition + Service → container orchestration


## Cloud Platform

Amazon Web Services (AWS)

## AWS Services

ECS Fargate

ECR (Elastic Container Registry)

Route 53

Application Load Balancer

VPC (public/private subnets, Internet Gateway, NAT Gateway)

AWS Certificate Manager


## Deployflow

Je pusht code naar main

GitHub Actions start automatisch een build

De nieuwe Docker-image wordt in ECR geplaatst

ECS Fargate voert een rolling deployment uit

De nieuwe versie komt live zonder downtime

## Live Applicatie

https://www.hashim-next-gen.com/

✔ Gehost op AWS ECS Fargate
✔ HTTPS geconfigureerd
✔ Load-balanced
✔ Geautomatiseerde deployments



## Samenvatting

Deze setup is een compleet voorbeeld van een moderne cloud-native deployment pipeline, gebouwd met:

Docker

AWS ECS Fargate

Load Balancing

Route 53 Domain Routing

ECR

GitHub Actions CI/CD

Multi-AZ VPC infrastructuur

Dit project toont praktische DevOps, Cloud Engineering en Deployment Automation vaardigheden.