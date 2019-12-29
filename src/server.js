import {app} from './app';

const port = process.env.FC_SERVER_PORT || 9000;

app.all('*', (req, res) => res.send({
    date: Date.now(),
    path: req.path
}));

app.listen(port, '0.0.0.0',() => console.log("Function Compute custom runtime inited."));

app.timeout = 0; // never timeout
app.keepAliveTimeout = 0; // keepalive, never timeout