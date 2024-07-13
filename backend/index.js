const express = require('express');
const bodyParser = require('body-parser');
const Parse = require('parse/node');

// Informações essenciais
const APP_ID = "lC0VDk2rQxpxMmG42L1gVAlIqKqJYJ6ABVZU4rlL"
const JAVASCRIPT_KEY = "tt8X4a3wbgdBQuae0uMKki7u6F2uTfQLKmBNnTbz"
const SERVER_URL = "https://parseapi.back4app.com"

const app = express();
const port = process.env.Port || 3000;

// Configurar o middleware
app.use(bodyParser.json());

// Inicializar o Parse
Parse.initialize(APP_ID, JAVASCRIPT_KEY);
Parse.serverURL = SERVER_URL;

// Endpoint para registrar dados
app.post('/registrar', async (req, res) => {
    const { email, descricao_consumo } = req.body;

    const User = Parse.Object.extend("Users");
    const user = new User();

    user.set("email", email);
    user.set("previsao", descricao_consumo);

    try {
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/', async (req, res) => {
    const User = Parse.Object.extend("Users");
    const query = new Parse.Query(User);

    try {
        const results = await query.find();
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
