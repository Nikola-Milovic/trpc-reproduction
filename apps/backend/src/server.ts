import express from 'express';
import cors from "cors";
import api from "@/api"

async function main() {
    // express implementation
    const app = express();

    app.use((req, _res, next) => {
        // request logger
        console.log('⬅️ ', req.method, req.path, req.body ?? req.query);

        next();
    });

    app.use(cors())

    api(app)

    /* app.get('/', (_req, res) => res.send('hello')); */
    app.listen(3000, () => {
        console.log('listening on port 3000');
    });
}

main();
