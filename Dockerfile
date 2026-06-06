FROM denoland/deno:2.3.3

WORKDIR /app

COPY . .

# Cache dependencies
RUN deno cache src/api/Server.ts
RUN deno cache Cron.ts

EXPOSE 8080

ENV PORT=8080

# v3: db push + background cron sync + serve
CMD deno run -A npm:drizzle-kit push --config drizzle.config.json --force && \
    deno run --allow-net --allow-read --allow-env --allow-write Cron.ts & \
    deno run --allow-net --allow-read --allow-env --allow-write src/api/Server.ts
