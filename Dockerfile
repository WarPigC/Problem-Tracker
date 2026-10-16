FROM python:alpine

WORKDIR /app

COPY . /app

EXPOSE 8082

CMD ["python", "-m", "http.server", "8082"]
