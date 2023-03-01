import express from 'express';
import serverAutoConf from "../serverAutoConf";

export const startMockServer = (params: { serverPort : number }) =>{
    const app = express();
    app.set('json spaces', 2)
    app.post('/infer',  (_req, res) => {
        console.log('infer request received');
        res.sendStatus(403)
    });

    app.get('/health',  (_req, res) => {
        console.log('health request received');
        res.sendStatus(200)
    });

    app.get('/',  async (_req, res) => {
        console.log('root request received');
        const results = await serverAutoConf();
        res.status(200).json(results);
    });

    app.listen(params.serverPort ??  80, () => {
        console.log(`listening on port ${params.serverPort ?? 80}`);
    });

}
