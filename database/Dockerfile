FROM mongo:latest

RUN apt-get update -y
RUN apt-get install mongodb -y
RUN mkdir -p ./data/db
RUN service mongodb start -y

EXPOSE 27017