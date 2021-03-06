import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import logger from 'koa-logger';
import jwtMiddleware from './lib/jwtMiddleware';
import dotenv from 'dotenv';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';
dotenv.config();

import api from './api';

const app = new Koa();
const router = new Router();

const { PORT, MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(e => console.error(e));

router.use('/api', api.routes());

app.use(logger());
app.use(bodyParser());
app.use(jwtMiddleware);
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.join(__dirname, '../../', './blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});