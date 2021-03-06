<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>YouTube Browser</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <link rel="stylesheet" href="main.css">
    <script src='litebox.js'></script>

  </head>
  <body>
    <section class='container'>

      <div class="row">
        <h2>Search YouTube:</h2>
        <form action="" id='search-form'>
          <input type="text" id='query'>
          <input type='submit'>
        </form>
      </div>
      <div class='row' id="search-results">
        <!--    HTML gets injected here    -->
      </div>
      <div class="row pagination">
        <button class="btn btn-primary nav-button" id="prev-button" data-show="false" data-token="">Prev</button>
        <button class="btn btn-primary nav-button" id="next-button" data-show="false" data-token="">Next</button>
      </div>
    </section>


    <script type="text/javascript">
      var APIkey = "<?php echo getenv('youtubeKey'); ?>";
    </script>
    <script src="app.js"></script>
  </body>
</html>
