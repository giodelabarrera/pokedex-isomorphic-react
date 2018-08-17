
export default (content, helmet) => {

  const htmlAttributes = helmet.htmlAttributes.toString() || `lang="en"`
  const bodyAttributes = helmet.bodyAttributes.toString() || ``

  return `
    <!DOCTYPE html>
    <html ${htmlAttributes}>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${bodyAttributes}>
          <div id="root">${content}</div>
          <script src="/static/js/client.js"></script>
      </body>
    </html>
    `;
}
