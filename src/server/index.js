
import express from 'express'
import render from './render'
import React from 'react'
import { StaticRouter as Router, matchPath } from 'react-router';
import App from '../shared/App'

const app = express()
app.use(express.static('./build'));

app.get('*', (req, res) => {

  res.status(200).send(render(
    (
      <Router context={{}} location={req.url}>
        <App />
      </Router>
    )
  ));


  // return res.send(logo);

  // const branch = matchRoutes(routes, req.url);
  // const promises = [];

  // branch.forEach(({ route, match }) => {
  //     if (route.loadData) {
  //         promises.push(route.loadData(match));
  //     }
  // });

  // Promise.all(promises).then(data => {
  //     // data will be an array[] of datas returned by each promises.
  //     // // console.log(data)

  //     const context = data.reduce((context, data) => Object.assign(context, data), {});

  //     const router = <StaticRouter location={req.url} context={context}><App /></StaticRouter>;

  //     const app = renderToString(router);

  //     const html = renderToString(<HTML html={app} />);

  //     return res.send(`<!DOCTYPE html>${html}`);
  // });

  // const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  // if (!match) {
  //     res.status(404).send(render(<NoMatch />));
  //     return;
  // }
  // fetch('https://api.github.com/gists')
  //     .then(r => r.json())
  //     .then(gists => {
  //         res.status(200).send(render(
  //             (
  //                 <Router context={{}} location={req.url}>
  //                     <App gists={gists} />
  //                 </Router>
  //             ), gists
  //         ));
  //     }).catch(err => {
  //         console.error(err);
  //         res.status(500).send(render(<Error />));
  //     });
});

app.listen(8080, () => console.log('Demo app listening on port 8080'));