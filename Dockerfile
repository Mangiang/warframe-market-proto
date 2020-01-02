FROM python:slim
COPY . /app
WORKDIR /app
ARG PORT
ENV PORT=$PORT
EXPOSE $PORT
RUN pip install -r requirements.txt
CMD ["python","app.py"]
