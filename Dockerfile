# Utilisez une image de base Node.js
FROM node:16-alpine AS build

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez tous les fichiers de l'application dans le répertoire de travail
COPY . .

# Construisez l'application Angular en mode de production
RUN npm run build -- --prod

# Utilisez un serveur web léger pour servir l'application (par exemple, Nginx)
FROM nginx:alpine

# Supprimez les fichiers par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiez les fichiers de l'application Angular dans le répertoire de Nginx
COPY --from=0 /app/dist/* /usr/share/nginx/html/

# Exposez le port 80 pour accéder à l'application
EXPOSE 80

# Commande pour démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
