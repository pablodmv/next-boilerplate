# NextJS + Express boilerplate

Create .env file on root directory with:

port=<Port Number>

Docker

# Create docker image

sudo docker build -t time-tracking .

# Run container

sudo docker run --env-file .env -dit -p 4500:4500 time-track
