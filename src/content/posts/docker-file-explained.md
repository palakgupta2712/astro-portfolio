---
title: "Docker File Explained!"
pubDate: "2023-04-01"
description: "Docker File Explained!"
author: "Amit Prakash"
image:
  url: "https://media.licdn.com/dms/image/D5612AQGyD8xI4YEMYQ/article-cover_image-shrink_720_1280/0/1680330311576?e=1713398400&v=beta&t=TOxsKtCjzlL1dhgCkPxkYxmYXW7wGafAgbXWRFDQPDo"
  alt: "The full Astro logo."
tags: ["#PreflightParty", "#hashtag#SecurityFirst", "#hashtag#DataHarmony", "#hashtag#NoMoreWebWalls"]
---

<span style="color:orange">A Docker file is a text file that contains instructions for building a Docker image.</span>

The first line of a Dockerfile specifies the base image to use. 

For example, "FROM node:12-alpine" specifies that the image should be based on the Node.js 12 Alpine Linux image.

* The "WORKDIR" instruction sets the working directory for any subsequent instructions. 

For example, "WORKDIR /app" sets the working directory to "/app".
* The "COPY" instruction copies files from the host machine to the image. 

For example, "COPY package.json /app" copies the package.json file from the host machine to the "/app" directory in the image.

* The "RUN" instruction runs a command inside the image. 

For example, "RUN npm install" runs the "npm install" command inside the image.

* The "EXPOSE" instruction exposes a port from the container to the host machine. 

For example, "EXPOSE 3000" exposes port 3000 from the container to the host machine.

"EXPOSE" instruction can also specify the protocol to use, such as "EXPOSE 8080/tcp".

*  The "CMD" instruction specifies the default command to run when the container starts. 

For example, "CMD npm start" specifies that the "npm start" command should be run by default.

* "ENV" instruction sets environment variables in the image. 

For example, "ENV NODE_ENV=production" sets the NODE_ENV environment variable to "production" in the image.

* "ARG" instruction sets build-time variables. 

For example, "ARG VERSION=1.0.0" sets the VERSION build-time variable to "1.0.0".

* "USER" instruction sets the user ID or username to use when running the container. 

For example, "USER node" sets the user to "node".

* "VOLUME" instruction creates a mount point for a named or anonymous volume. 

For example, "VOLUME /data" creates a mount point at "/data".

* "ADD" instruction copies files from the host machine to the image and can also extract tar files. 

For example, "ADD app.tar.gz /app" extracts the app.tar.gz file and copies its contents to the "/app" directory in the image.

* "LABEL" instruction adds metadata to the image. 


For example, "LABEL version=1.0" adds a "version" label with a value of "1.0" to the image.
Example:
Let's say we want to create a Dockerfile for a Node.js web application. 
Here's an example Dockerfile:
FROM node:12-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

```
From node:12-alpine

WORKDIR /app

COPY Package.json

RUN npm install

EXPOSE 3600

CMD ["npm","start"]

```

## Let's see how a .Net core docker files looks like

```
# Specify the base image to use for the build stage.
From mcr.microsoft.com/dotnet.sdk:6.0 AS build-env

// Sets the working directory to /app
WORKDIR /app

// Copies the project files to current directory
COPY *.csproj ./

// Restores dependencies file to Current directory 
RUN dotnet restore

// Copies the remaining files to currrent directory
COPY . ./

// Build & Publishes .Net Core app in Release mode to 'ou' directory
RUN dotnet publish -c Release -o out

// Specifies the base image to use for the runtime stage.
FROM mcr.microsoft.com/dotnet/aspnet:6.0

// Set the working directory to /aap
WORKDIR /app

// Copy published output to current directory in runtime stage
COPY --from=build-env /app/out

// Expose port 8080 for the Application 
EXPOSE 8080

// Command to run on container startuo: .NET runtime with DLL name
ENTRYPOINT ["dotnet","MyApplication.dll"]
```
That's the wrap buddy 💡