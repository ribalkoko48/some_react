import React from 'react';

const url = 'http://localhost:3000'
const HTML = ({ content, state, helmet }) => {

    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
<html lang="en" {...htmlAttrs}>
    <head dangerouslySetInnerHTML={{
    __html: `${helmet.title.toString()}
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${helmet.meta.toString()}
    <link rel="shortcut icon" href="${url}/public/images/favicon.ico">
    <link href="${url}/public/styles/styles.min.css" rel="stylesheet" type="text/css" />
    `}}></head>
    <body {...bodyAttrs}>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        <script src={`${url}/client_bundle.js`}></script>
    </body>
</html>
    )

}

export default HTML;

