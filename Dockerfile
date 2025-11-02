FROM node:20-alpine
WORKDIR /app

# Install deps
COPY ["package.json", "./"]
RUN npm install --omit=dev --no-audit --no-fund

# Copy backend + frontend
COPY ["api", "api"]
COPY ["index.html", "style.css", "app.js", "./"]
COPY ["Images", "Images"]
COPY ["logo", "logo"]
COPY ["README.md", "./"]

ENV NODE_ENV=production
EXPOSE 3000

# Start server (no migrations)
CMD ["node", "api/src/index.js"]
