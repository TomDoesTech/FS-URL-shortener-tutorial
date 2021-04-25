#!/bin/bash

git pull

echo "Building server"
docker-compose -f ./server/docker-compose.yml up -d --build
