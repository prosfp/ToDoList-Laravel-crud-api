## CRUD amb API REST

## Descripció

Això és una aplicació bàsica fet amb React que permet fer un CRUD amb una API REST amb JSON Server, una eina que permet crear una API REST de test amb un fitxer JSON de manera molt senzilla amb Node.js. Pots trobar més informació sobre JSON Server a [aquest enllaç](https://www.npmjs.com/package/json-server)

Al fitxer `db.json` hi ha les dades que fa servir JSON Server per crear l'API REST.
El fitxer `index.js` sota la carpeta `api` és el responsable de gestionar les peticions a l'API REST.

### Executar JSON Server

Has de definir l'arxiu que farà servir JSON Server per crear l'API REST i el port. En aquest cas, l'arxiu és `db.json` i el port és el 3001.

```bash
npx json-server --watch db.json --port 3001
```

### Executar Vite

```bash
npm run dev
```
