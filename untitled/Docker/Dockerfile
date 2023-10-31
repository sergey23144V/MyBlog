FROM 18-alpine3.17 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install package-name@9.7.2
COPY . .
RUN npm run build -- --max-old-space-size=4096


# этап production (production-stage)
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf