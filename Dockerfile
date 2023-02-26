FROM ubuntu
ENV NODE_ENV=production

WORKDIR /app

ADD index-linux .

CMD ["/app/index-linux", "--server", "--port", "8080"]

