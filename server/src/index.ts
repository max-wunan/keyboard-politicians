import express from 'express';
import "reflect-metadata";
import { DataSource } from 'typeorm';

// const AppDataSource = new DataSource({});

const main = async () => {

    const app = express();
    app.listen(6666, () => {
        console.log('STarted as a keyboard politician today at localhost:6666...');
    })
}

main()
    .catch((err) => {
        console.error(err);
    })