# -------- Build stage --------
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency manifests first (better layer caching)
COPY package.json package-lock.json ./

# Install dependencies WITHOUT running postinstall yet
RUN npm ci --ignore-scripts

# Copy the rest of the project (now Quasar sees a real project folder)
COPY . .

# Run Quasar prepare (if your project requires it)
RUN npx quasar prepare

# Build
RUN npm run build


# -------- Runtime stage --------
FROM node:20-alpine AS runtime
WORKDIR /app

# Serve static files
RUN npm install -g serve

# Copy built output only
# Quasar typically outputs dist/spa (unless configured differently)
COPY --from=build /app/dist/spa ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
