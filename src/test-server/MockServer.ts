import express from 'express';

export const startMockServer = (params: { serverPort : number }) =>{
    const app = express();
    app.get('/infer',  (_req, res) => {
        console.log('infer request received');
        res.sendStatus(200)
    });

    app.get('/health',  (_req, res) => {
        console.log('health request received');
        res.sendStatus(200)
    });

    app.listen(params.serverPort ??  80, () => {
        console.log(`listening on port ${params.serverPort ?? 80}`);
    });

}
