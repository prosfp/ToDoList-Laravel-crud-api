# CRUD amb REST API de Laravel i Frontend amb ReactJS

## Descripció

CRUD senzill amb llista de tasques i formulari per afegir-ne de noves. Les dades es guarden a una base de dades PostgreSQL i s'accedeix a elles mitjançant una API REST feta amb Laravel. El frontend està fet amb ReactJS.

## Instal·lació

Per dur a terme aques projecte s'ha fet servir el següent recurs:

- [PHP CRUD Rest API with Docker](https://dev.to/francescoxx/php-crud-rest-api-with-docker-2c3f)

### Backend

#### :bulb: Requisits

- PHP instal·lat (v. 8+)
- Composer instal·lat
- Docker instal·lat
- Opcional: [Postman](https://www.postman.com/) per fer les peticions a la API
- Laravel cli.
- Algun client de PostgreSQL (VSCode té diverses extensions per a això).

#### :rocket: Instruccions

T'aconsello que facis servir Docker per a la instal·lació del backend. Així, només has de clonar el repositori i executar la comanda `docker-compose up -d` per a que es creïn els contenidors necessaris.

Un cop tinguis configurada la base de dades, hauras de migrar les taules des del contenidor de Laravel. Per a això, executa la comanda `docker exec -it laravel-app php artisan migrate`.

Si tot ha anat bé, ja pots accedir a la API a través de la ruta `http://localhost:8080/api/tasks`. Prova-ho amb Postman o amb el client de PostgreSQL.

Fes servir la referència d'abans per entendre cadascun dels passos que s'han seguit per a la creació del backend.

### Frontend

#### :bulb: Requisits

- NodeJS instal·lat
- NPM instal·lat

#### :rocket: Instruccions

Per a la instal·lació del frontend, has de clonar el repositori i executar la comanda `npm install` per a instal·lar les dependències.

Un cop fet això, ja pots executar la comanda `npm run dev` per a iniciar el servidor de desenvolupament. `Vite` s'encarregarà de compilar el codi i de refrescar el navegador cada cop que es detecti un canvi. També et facilitarà la ruta per a accedir a l'aplicació.. 
