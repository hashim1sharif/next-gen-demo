# Serve static files with Nginx
FROM nginx:alpine

# Remove default site and copy your build
RUN rm -rf /usr/share/nginx/html/*
COPY . /usr/share/nginx/html

# (Optional) Smaller image by removing VCS/hidden junk if present
# RUN find /usr/share/nginx/html -name ".git" -type d -exec rm -rf {} +

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
