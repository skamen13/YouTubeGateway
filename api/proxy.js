// api/proxy.js
export default async function handler(req, res) {
    const targetUrl = 'https://www.youtube.com' + req.url;

    // Переадресуем запрос к YouTube
    const response = await fetch(targetUrl, {
        method: req.method,
        headers: req.headers,
    });

    // Получаем данные от YouTube
    const data = await response.text();

    // Устанавливаем заголовки и отправляем ответ
    res.setHeader('Content-Type', 'text/html');
    res.status(response.status).send(data);
}
