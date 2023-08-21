# Canonical Take Home Assessment

This project is a solution for the Canonical take home assessment.

# Usage

##

## Run with docker

```
docker build -t blog-app-img .
docker run -p 3000:80 blog-app-img
```

This will build a docker image for the app called `blog-app-img`, and then run a docker container of the app with port 3000 of the host machine mapped to port 80 of the container.
