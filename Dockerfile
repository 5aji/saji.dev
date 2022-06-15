FROM public.ecr.aws/docker/library/node:current-alpine AS builder
WORKDIR /app
COPY . /app
CMD yarn install
CMD yarn run build-prod

FROM public.ecr.aws/nginx/nginx:stable
COPY --from=builder /app/dist/ /usr/share/nginx/html
