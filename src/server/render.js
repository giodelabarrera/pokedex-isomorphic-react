import { renderToString } from 'react-dom/server';

export default (element, props = {}) => {

  const metas = props.metas || ''
  const stylesheets = props.stylesheets || ''
  const title = props.title || ''
  const javascripts = props.javascripts || ''
  
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json">
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
        ${metas}
        ${stylesheets}
        <title>${title}</title>
      </head>
      <body>
          <div id="root">${renderToString(element)}</div>
          <script src="/static/js/client.js"></script>
          ${javascripts}
      </body>
    </html>
    `;
}
