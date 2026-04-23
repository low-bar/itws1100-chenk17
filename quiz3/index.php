<?php
include('../labs/lab9/inclassexample/config.php');

$dbOk = false;
@$db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
} else {
    $dbOk = true;
}

$havePost = isset($_POST["submit"]);
$errors = '';
$name = '';
$comment = '';

if ($havePost) {
    $name    = htmlspecialchars(trim($_POST["name"]));
    $comment = htmlspecialchars(trim($_POST["comments"]));

    if ($name == '') {
        $errors .= '<li>Name may not be blank</li>';
    }
    if ($comment == '') {
        $errors .= '<li>Comment may not be blank</li>';
    }

    if ($errors != '') {
        echo '<div class="messages"><h4>Please correct the following errors:</h4><ul>';
        echo $errors;
        echo '</ul></div>';
    } else {
        if ($dbOk) {
            $nameForDb    = trim($_POST["name"]);
            $commentForDb = trim($_POST["comments"]);

            $insQuery  = "INSERT INTO wall (`name`, `comments`) VALUES (?, ?)";
            $statement = $db->prepare($insQuery);
            $statement->bind_param("ss", $nameForDb, $commentForDb);
            $statement->execute();

            echo '<div class="messages"><h4>Success: comment added.</h4></div>';
            $statement->close();

            $name    = '';
            $comment = '';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wall</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="Jquery_ui.js"></script>
</head>
<body>

<h1>Comment Wall</h1>

<h3>Add a Comment</h3>
<form id="wallForm" name="wallForm" action="index.php" method="post">
    <fieldset>
        <div>
            <label for="name">Name:</label><br>
            <input type="text" name="name" id="name" size="60"
                   value="<?php if ($havePost && $errors != '') { echo $name; } ?>" />
        </div>
        <div>
            <label for="comments">Comments:</label><br>
            <input type="text" name="comments" id="comments" size="60"
                   value="<?php if ($havePost && $errors != '') { echo $comment; } ?>" />
        </div>
        <div>
            <input type="submit" name="submit" value="Submit" />
        </div>
    </fieldset>
</form>

<h3>Wall</h3>
<div id="wallBody">
    <?php
    if ($dbOk) {
        $query  = 'SELECT * FROM wall ORDER BY id DESC';
        $result = $db->query($query);
        $numRecords = $result->num_rows;

        for ($i = 0; $i < $numRecords; $i++) {
            $record = $result->fetch_assoc();
            echo '<p>' . htmlspecialchars($record['name']) . ' : ' . htmlspecialchars($record['comments']) . '</p>';
        }

        $result->free();
        $db->close();
    }
    ?>
</div>

</body>
</html>
