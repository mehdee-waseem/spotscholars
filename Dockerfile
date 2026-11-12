# SpotScholars — production image.
# Builds the React site and serves dist/ with nginx.
# Production runs on Netlify; this image is for running the site anywhere with Docker.
# Note: /api/* (Netlify Functions) is not included — the frontend falls back to the
# bundled JSON in src/data automatically, so every page still works.

# ---- build ----
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Skip the Campus France download with: docker build --build-arg SYNC_CATALOGUE=false .
ARG SYNC_CATALOGUE=true
RUN if [ "$SYNC_CATALOGUE" = "true" ]; then npm run build; else npx vite build; fi

# ---- serve ----
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost/ >/dev/null || exit 1
