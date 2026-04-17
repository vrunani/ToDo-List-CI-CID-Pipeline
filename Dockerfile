# Just serve static files with Nginx — no build step needed
FROM nginx:alpine

# Copy your HTML/CSS/JS files directly into Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80