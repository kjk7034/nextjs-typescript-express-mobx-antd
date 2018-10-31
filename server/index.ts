
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';

import * as next from 'next';
import * as mobxReact from 'mobx-react'
import { parse as parseUrl } from 'url';

import routesWithSlug from './routes/routesWithSlug';
import routesWithSession from './routes/routesWithSession';

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();
const port = process.env.PORT || 3000;
const ROOT_URL = dev
  ? `http://localhost:${port}`
  : "Production_URL";


mobxReact.useStaticRendering(true)

nextApp.prepare().then(() => {
  const server = express();
  console.log('Time:', Date.now());
  server.use(helmet());
  server.use(compression());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  
  // cookie 
  server.use(cookieParser());
  
  // routes
  routesWithSlug(server, nextApp)
  routesWithSession(server, nextApp)

  server.get('/*', (req, res) => {
    handler(req, res, parseUrl(req.url, true));
  });
  server.listen(port);
  console.log(`server listening on port ${ROOT_URL}`);
})

