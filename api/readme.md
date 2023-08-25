# API documentation
The backend for Koaris Technologies, LTDA.

## Database
I'm using PostgreSQL as a Production Database and SQLite as a Development Database.

### Entities
- Users
- Logins
- Organizations
- Services
- Subscriptions
- Contacts
- Lead
- Chat

## Development
```bash
# install dependencies
- git pull
- yarn install

# add variables
- cp .env.example .env
- vi .env

# create database
- yarn migration:run

# Database in PostgreSQL
- docker compose up -d # docker compose stop, docker compose down, docker rm <nome>

# start server
- yarn dev || yarn start
```

## Tests
```bash
- yarn jest

## Build

## Deploy

## License
