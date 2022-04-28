# Method toolkit backend
This is a Strapi application which serves as the backend for the Design Method Toolkit. The backend is serving content to the [frontend application](https://github.com/dhis2designlab/method-toolkit-frontend) of the Design Method Toolkit. There is a user interface for authors, editors and admins to create, edit and delete content of the application at the `/admin` endpoint of your project url. 

# Set up
First you will need to have a connection to a database using an `.env` file. The Design Method Toolkit is set up to both being able to connect to MongoDB databases and PostgresSQL databases. See the `.env.example` for example of how the `.env` file should be set up.

Install the dependencies of the project using yarn:
```
yarn develop
```

Starting the application:
```
yarn start
```

# Development
To create, update or delete the data models or create customization of the application you will need to run the following command.
```
yarn develop
```

For more resources on customising Strapi, check out the [Strapi documentation](https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html)

## Set up docker for development
In order to run the docker compose config for development run:
```
docker compose up
```
