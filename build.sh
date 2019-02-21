#!/bin/sh
docker stop nodejsapp
docker rm nodejsapp
docker build -t nodejsapp .
docker run --name nodejsapp -d -p 80:3000 nodejsapp

sleep 1
curl http://localhost:3000