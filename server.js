import 'babel-polyfill';
import 'isomorphic-unfetch';
import express from 'express';
import bodyParser from 'body-parser';
import { StaticRouter } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { Helmet } from 'react-helmet';

import AppComponent from './src/app';
import HTML from './src/helpers/renderer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("build/public"));

app.get(['*/:param', '*'], (req, res) => {

    const URL_Param = req.params.param ? req.params.param : null;

      const context = {
        URL_Param
      };

      // The client-side App will instead use <BrowserRouter>
      const App = (
          <StaticRouter location={req.url} context={context}>
            <AppComponent />
          </StaticRouter>
      );

        const content = ReactDOM.renderToString(App);
        const helmet = Helmet.renderStatic();

        const initialState = {}
        const html = <HTML content={content} state={initialState} helmet={helmet} />;

        res.status(200);
        res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        res.end();
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
