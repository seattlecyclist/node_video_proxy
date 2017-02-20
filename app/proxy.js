const http = require('http');
const request = require('request');
const url = require('url');
const qs = require('querystring');
const youtubedl = require('youtube-dl');
const spawn = require('child_process').spawn;

export default function(r, response) {
  console.log("Proxy called!");
  const url_parts = url.parse(r.url, true);
  const query = url_parts.query;

  const video_id = query.id;
  var video = youtubedl('http://www.youtube.com/watch?v=' + video_id);

  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info.filename);
    console.log('size: ' + info.size);
  });

  video.pipe(response)
}