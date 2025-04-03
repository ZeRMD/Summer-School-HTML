# Use the official Nginx image
FROM nginx:alpine

# Copy your website files to the default Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]