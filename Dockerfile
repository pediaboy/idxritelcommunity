FROM denoland/deno:2.3.3

WORKDIR /app

COPY . .

RUN deno cache src/api/Server.ts

EXPOSE 8080

ENV PORT=8080

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "--allow-write", "src/api/Server.ts"]
