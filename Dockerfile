FROM python:3.7.6-alpine3.10
COPY . /app
WORKDIR /app
ARG PORT
ENV PORT=$PORT
EXPOSE $PORT
RUN pip install -r requirements.txt
CMD ["python","app.py"]
