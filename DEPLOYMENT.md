# Deployment
## 1.0 Add env to backend
    1.1 Install dotenv
    1.2 Add custom-environment-variables.ts
    
## 2.0 Configuration
    2.1 Add env_file to docker-compose
    2.2 Configure Caddyfile
    2.3 Create build script

## 3.0 Deployment
    3.1 Push code to GitHub
    3.2 Create DigitalOcean droplet
    3.3 Configure domain
    3.4 Install git on droplet `apt-get update && apt-get install git`
    3.5 Pull repository    
    3.6 Build and deploy

## 4.0 Deploy UI
    4.1 Deploy UI on Vercel