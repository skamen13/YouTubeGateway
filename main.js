const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 1820;

// Настройка прокси
app.use('/', createProxyMiddleware({
    target: 'https://www.youtube.com',
    changeOrigin: true,
    onProxyRes(proxyRes, req, res) {
        // Удаление или модификация заголовков CSP
        delete proxyRes.headers['content-security-policy'];
        delete proxyRes.headers['x-frame-options'];
        // Другие заголовки можно изменить по необходимости
    }
}));

// Запуск сервера
app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
});
