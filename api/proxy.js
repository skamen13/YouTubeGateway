// api/proxy.js

import { IncomingMessage, request } from 'http';

export default function handler(req, res) {
    const targetUrl = 'https://www.youtube.com' + req.url; // Прокси для YouTube

    const options = {
        method: req.method,
        headers: req.headers,
    };

    const proxyReq = request(targetUrl, options, (proxyRes) => {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        proxyRes.pipe(res, {
            end: true,
        });
    });

    req.pipe(proxyReq, {
        end: true,
    });
}
