const express = require('express');
const app = express();

const port = process.env.PORT || 3000; // Используйте переменную окружения PORT или порт 3000 по умолчанию

app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

app.listen(port, () => {
    console.log(`Веб-приложение запущено на порту ${port}`);
});