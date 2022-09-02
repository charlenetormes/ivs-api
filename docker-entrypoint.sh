#!/bin/sh
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/j3y4m5w0
docker build -t ivs-api .
docker tag ivs-api:latest public.ecr.aws/j3y4m5w0/ivs-api:latest
docker push public.ecr.aws/j3y4m5w0/ivs-api:latest