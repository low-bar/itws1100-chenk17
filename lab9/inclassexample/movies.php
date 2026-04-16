<?php 
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
?>
<title>PHP &amp; MySQL - ITWS</title>   

<?php include('includes/head.inc.php'); ?>

<h1>PHP &amp; MySQL</h1>
      
<?php include('includes/menubody.inc.php'); ?>

<p>Build the movie forms and output here.</p>

<?php
// Database connection setup
$dbOk = false;
@$db = new mysqli('localhost', 'phpmyadmin', '1234', 'iit');

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

<form method="post" action="movies.php">
   <label for="title">Title:</label>
   <input type="text" id="title" name="title" required><br>

   <label for="yearReleased">Year Released:</label>
   <input type="number" id="yearReleased" name="yearReleased" required><br>

   <button type="submit" name="save">Save Movie</button>
</form>

<?php include('includes/foot.inc.php'); 
  // footer info and closing tags
?>
