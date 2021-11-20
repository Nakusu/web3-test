FROM debian:buster
RUN apt update -y && apt upgrade -y && apt-get update -y && apt-get upgrade -y && apt-get install wget htop nodejs npm -y
EXPOSE 80