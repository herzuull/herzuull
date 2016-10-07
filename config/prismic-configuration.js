module.exports = {

  apiEndpoint: 'https://herzuull.prismic.io/api',

  // -- Access token if the Master is not open
  accessToken: 'MC5WX2YzNnlZQUFFd3Zpd2Rp.O--_vSxZ77-9Bu-_ve-_vVLvv73vv71p77-977-977-977-977-9Xg0YJu-_vSLvv73vv71oQBpVL3Nf',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver: function(doc, ctx) {
    return '/';
  }
};
