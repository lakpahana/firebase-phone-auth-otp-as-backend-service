const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const port = process.env.PORT;
const redis = require('redis');
const app = require('./app');
const redisClient = require('./config/redis.config');


async function connect() {
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    await redisClient.connect().then((result) => {
        console.log("coonected")
    }).catch((err) => {
        console.log(err)
    });
    redisClient.set("visitor",0);
}


connect();



