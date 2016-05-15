## Angular directive that loads the youtube iframe on demand

Embedding the entire youtube iframe on pageload increases the overall loading time of your page significantly.
To get around this problem, this directive simulates a youtube player by using the cover image of the video with a play icon on top of it.
Clicking the play icon will load the youtube iframe.



![example](https://raw.githubusercontent.com/jestersimpps/angular-lightweight-youtube-embed/master/example/example.png)


Install using npm:

```
npm i angular-lightweight-youtube-embed
```

Install using bower:

```
bower install lwytembed 
```

Use in your angular project by injecting the dependency like so:

```
var yourapp = angular.module('yourapp', ['lwytEmbed']);
```

If you are using the video url, you can use it like this:

```
<lwyt-embed
  youtubeurl="https://www.youtube.com/watch?v=jJG8p9udwMA"
  playerWidth="100%"
  playerHeight="250px">
</lwyt-embed>
```

If you are using the videoid:

```
<lwyt-embed
  youtubeurl="https://www.youtube.com/watch?v={{post.videoid}}"
  playerWidth="100%"
  playerHeight="250px">
</lwyt-embed>
```

* youtubeurl : set this to the url of the video you want to load
* playerWidth : desired player width, takes css
* playerHeight : desired player height, takes css
