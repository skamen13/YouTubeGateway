// api/proxy.js

import { NextResponse } from 'next/server';

export default async function handler(req) {
    const targetUrl = 'https://www.youtube.com/watch?v=' + req.nextUrl.pathname; // Замените на целевой URL

    const response = await fetch(targetUrl, {
        method: req.method,
        headers: req.headers,
        body: req.method === 'POST' ? req.body : null,
    });

    const responseHeaders = {};
    response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
    });

    return new NextResponse(response.body, {
        status: response.status,
        headers: responseHeaders,
    });
}
