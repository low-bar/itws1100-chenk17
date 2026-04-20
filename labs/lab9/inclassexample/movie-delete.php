<?php
  /* Delete an movie */
  
  include('config.php');
  
  @$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
  
  if ($db->connect_error) {
    $connectErrors = array(
      'errors' => true,
      'errno' => mysqli_connect_errno(),
      'error' => mysqli_connect_error()
    );
    echo json_encode($connectErrors);
  } else {
    if (isset($_POST["id"])) {
      // get our id and cast as an integer
      $movieId = (int) $_POST["id"];
      
      // Setup a prepared statement. 
      $query = "delete from movies where movieid = ?";
      $statement = $db->prepare($query);
      // bind our variable to the question mark
      $statement->bind_param("i",$movieId);
      // make it so:
      $statement->execute();
      
      // return a json object that indicates success
      $success = array('errors'=>false,'message'=>'Delete successful');
      echo json_encode($success);
      
      // close the prepared statement obj and the db connection
      $statement->close();
      $db->close();
    }
  }
?>
