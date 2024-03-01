import fastify from "fastify";

import fastifyStatic from "@fastify/static";
import {join} from "path";
import path from 'path';
import { WebSocketServer} from "ws";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const wss = new WebSocketServer({ port: 1111 });

wss.on('connection', client => {
    client.on('message', (data) => {
        const messageData = JSON.parse(data);
        const messageWithMetadata = {
            ...messageData,
            time: new Date().toLocaleTimeString()
        };
        console.log('I got something:', messageWithMetadata);
        wss.clients.forEach(c => {
            c.send(JSON.stringify(messageWithMetadata));
        });
    });
});


const server = fastify();

server.register(fastifyStatic, {
    root: join(__dirname, '../build')
});

server.listen({port: 1211})
    .then((address) => {
        console.log('Server started at ' + address);
    }).catch(err => {
    console.log('Error:', err);
});