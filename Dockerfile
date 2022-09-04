FROM bitnami/node:16 AS build
WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN MINIFY_IMAGES=true pnpm build


FROM bitnami/nginx:1.22 AS prod
WORKDIR /app

COPY --from=build /app/dist .
COPY ./nginx/alpinejs.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf