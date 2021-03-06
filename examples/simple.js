/*!
 * node-feedparser
 * Copyright(c) 2013 Dan MacTough <danmactough@gmail.com>
 * MIT Licensed
 */

var FeedParser = require(__dirname+'/..')
  , fs = require('fs')
  , feed = '../test/feeds/rss2sample.xml';

fs.createReadStream(feed)
  .pipe(new FeedParser())
  .on('error', function (error) {
    console.error(error);
  })
  .on('meta', function (meta) {
    console.log('===== %s =====', meta.title);
  })
  .on('article', function(article){
    console.log('Got article: %s', article.title || article.description);
  });