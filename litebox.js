// litebox.js
// A light-weight, dependency-free light box Javascript library library.
// Author: Barrett Hafner
// License: MIT

;(function() {

  // wait for DOM content to load before you do anything
  document.addEventListener('DOMContentLoaded', function(){


    //  -------------------------------------------------------------------
    // Document Event Listener
    //
    // adds an event listener to the entire body
    // onclick traverses the DOM to looking any element on the event with data-youtube-id attribute
    // shows first one found in the lightbox
    document.addEventListener('click', function (event) {

      if (event.which === 1) { // left click
        var target = event.target;
        while (target) {
          if (target.dataset.youtubeId) {
            event.preventDefault();
            showVideo(target.dataset.youtubeId);
            return;
          } else if (target.parentElement) {
            target = target.parentElement;

          // if no parent, at body, exit while loop
          } else {
            target = false;
          }
        }
      }
    });

    //  -------------------------------------------------------------------
    // Append css from litebox.css to head

    var liteboxCSS = document.createElement("link");
    liteboxCSS.href = "litebox.css";
    liteboxCSS.type = "text/css";
    liteboxCSS.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(liteboxCSS);

    //  -------------------------------------------------------------------
    //    Append litebox html at the end of the body
    //
    //    <div id="litebox-overlay" style="display: none;">
    //      <div id="litebox-content">
    //      </div>
    //      <span id="litebox-close"></span>
    //    </div>

    var htmlTemplate = '<div id="litebox-overlay" style="display: none;"><div id="litebox-content"></div><span id="litebox-close"></span></div>';

    document.body.insertAdjacentHTML('beforeend', htmlTemplate);

    //  -------------------------------------------------------------------
    //  Get litebox html elements

    var liteboxOverlay = document.querySelector('#litebox-overlay');
    var liteboxContent = document.querySelector('#litebox-content');
    var liteboxCloseButton = document.querySelector('#litebox-close');

    //  -------------------------------------------------------------------
    //  Add event listeners

    //  Hide litebox when liteboxContent is clicked
    //  liteboxContent fills the litebox
    //  doesn't trigger when the video is clicked since the event.target is the iframe
    liteboxContent.addEventListener('click', function(event) {
      if (event.target === liteboxContent) {
        hideLitebox();
      }
    });

    //  Hide litebox when "X" close div is clicked
    //  Should be changed to a button
    liteboxCloseButton.addEventListener('click', hideLitebox);

    //  Hide litebox when "esc" key is pressed
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 27) { // esc key
        hideLitebox();
      }
    });


    //  -------------------------------------------------------------------
    //  Functions

    // showVideo
    // requires a youtube ID

    function showVideo(youtubeID) {

      // creat YouTube iframe template
      var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/{youtubeID}" frameborder="0" allowfullscreen></iframe>';

      // inject html and show litebox
      liteboxContent.innerHTML = iframe.replace('{youtubeID}', youtubeID);
      liteboxOverlay.style.display = 'block';
    }

    // hideLitebox
    // hide overlay and erase innerHTML of content
    function hideLitebox() {
      liteboxOverlay.style.display = 'none';
      liteboxContent.innerHTML = '';
    }

    function getYoutubeId(url) {
      // shamelessly stolen from lity.js
      // var youtubeRegex = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;

        // For testing.
      var urls = [
          '//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0',
          'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo',
          'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
          'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
          'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
          'http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY',
          'http://youtu.be/6dwqZw0j_jY',
          'http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be',
          'http://youtu.be/afa-5HQHiAs',
          'http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0',
          'http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel',
          'http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub',
          'http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I',
          'http://www.youtube.com/embed/nas1rJpm7wY?rel=0',
          'http://www.youtube.com/watch?v=peFZbP64dsU',
          'http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player',
          'http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player',
          'http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
          'http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
          'http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
          'http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player',
          'http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player',
          'http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player'
      ];

      var rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

      for (i = 0; i < urls.length; ++i) {
          var r = urls[i].match(rx);
          console.log(r[1]);
      }


    }
  }, false); // DOMContentLoaded event listener
}()); // end of IIFE
