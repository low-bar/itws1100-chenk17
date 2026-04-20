<?php 
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
  include('config.php'); // config
?>
<title>PHP &amp; MySQL - ITWS</title>   

<?php include('includes/head.inc.php'); ?>

<h1>PHP &amp; MySQL</h1>
      
<?php include('includes/menubody.inc.php'); ?>

<p>Build the movie forms and output here.</p>

<?php
// Database connection setup
$dbOk = false;
@$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($db->connect_error) {
   echo '<div class="messages">Could not connect to the database. Error: ';
   echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
} else {
   $dbOk = true;
}

// Process the form submission
$havePost = isset($_POST["save"]);
$errors = '';
if ($havePost) {
   $title = htmlspecialchars(trim($_POST["title"]));
   $year = htmlspecialchars(trim($_POST["year"]));

   if ($dbOk) {
      $query = "INSERT INTO movies (title, year) VALUES (?, ?)";
      $stmt = $db->prepare($query);
      $stmt->bind_param('ss', $title, $year);
      $stmt->execute();
      if ($stmt->affected_rows > 0) {
         echo '<div class="messages">Movie added successfully!</div>';
      } else {
         echo '<div class="messages">Error adding movie. Please try again.</div>';
      }
      $stmt->close();
   }
}
?>
<h3>Add Movie </h3>
<form method="post" action="movies.php">
   <label for="title">Title:</label>
   <input type="text" id="title" name="title" required><br>

   <label for="year">Year Released:</label>
   <input type="number" id="year" name="year" required><br>

   <button type="submit" name="save">Save Movie</button>
</form>

<h3>Movie</h3>

<table id="movieTable">
   <?php
   if ($dbOk) {

      $query = 'select * from movies order by year';
      $result = $db->query($query);
      $numRecords = $result->num_rows;

      echo '<tr><th>Title:</th><th>Year:</th><th></th></tr>';
      for ($i = 0; $i < $numRecords; $i++) {
         $record = $result->fetch_assoc();
         if ($i % 2 == 0) {
            echo "\n" . '<tr id="movie-' . $record['movieid'] . '"><td>';
         } else {
            echo "\n" . '<tr class="odd" id="movie-' . $record['movieid'] . '"><td>';
         }
         echo htmlspecialchars($record['title']);
         echo '</td><td>';
         echo htmlspecialchars($record['year']);
         echo '</td><td>';
         echo '<img src="resources/delete.png" class="deleteMovie" width="16" height="16" alt="delete movie"/>';
         echo '</td></tr>';
         // Uncomment the following three lines to see the underlying
         // associative array for each record.
         //echo '<tr><td colspan="3" style="white-space: pre;">';
         //print_r($record);
         //echo '</td></tr>';
      }

      $result->free();

      // Finally, let's close the database
      $db->close();
   }

   ?>
</table>

<?php include('includes/foot.inc.php'); 
  // footer info and closing tags
?>
