# ============================
# Stage 1 - Build Frontend (Vite)
# ============================
FROM node:18 AS frontend
WORKDIR /app

# Install npm dependencies
COPY package*.json ./
RUN npm install

# Copy everything and build
COPY . .
RUN npm run build


# ============================
# Stage 2 - Backend (Laravel + PHP + Composer)
# ============================
FROM php:8.2-fpm AS backend

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl unzip libpq-dev libonig-dev libzip-dev zip nginx \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql mbstring zip opcache

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy Laravel application files
COPY . .

# Copy built frontend (Vite builds to /public/build)
COPY --from=frontend /app/public/build ./public/build

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Laravel optimization
RUN php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache

# ============================
# Setup Nginx
# ============================
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Run both php-fpm and nginx
CMD service nginx start && php-fpm
