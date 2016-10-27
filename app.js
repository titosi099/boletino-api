import express from 'express';
import bodyParser from 'body-parser';
import routeUsers from './routes/users';
import routeStudents from './routes/students';
import config from './config/config';
import db from './config/db';

const app = express();
app.config = config;
app.db = db(app);

app.set('port', 3000);
app.use(bodyParser.json());

routeUsers(app);
routeStudents(app);

export default app;
