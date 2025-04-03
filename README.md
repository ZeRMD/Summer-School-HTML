## Introduction 

RICS Summer School landing page docker server.

## How to run server

### 1. Build Docker Image

```bibtex
docker build -t summerschool .
```

### 2. Run Container

```bibtex
docker run -d --restart unless-stopped -p 8080:80 --name RicsSummerSchool summerschool
```