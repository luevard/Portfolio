# Utilise l'image de base de Nginx
FROM nginx:alpine

# Copie le contenu de ton site web dans le répertoire par défaut de Nginx
COPY . /usr/share/nginx/html

# Expose le port 80 pour que le serveur web soit accessible
EXPOSE 80

# Commande par défaut pour lancer Nginx en mode non-démon
CMD ["nginx", "-g", "daemon off;"]