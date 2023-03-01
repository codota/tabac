FROM --platform=linux/amd64 ubuntu
ENV NODE_ENV=production

WORKDIR /app

ADD dist/tabac-linux-x64 .

CMD ["/app/tabac-linux-x64", "--port", "8080"]

