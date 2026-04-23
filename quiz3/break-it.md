Vulnerability 1 — SQL Injection (4 pts) 
$insQuery = "INSERT INTO wall (`name`, `comments`) VALUES ('" . $_POST['name'] . "', '" . $_POST['comments'] . "')";

', ''); DROP TABLE wall; --

This would make the insert command end early and run the drop table command which will delete my table.

            
$insQuery  = "INSERT INTO wall (`name`, `comments`) VALUES (?, ?)";
$statement = $db->prepare($insQuery);
$statement->bind_param("ss", $nameForDb, $commentForDb);

this code is safe because prepare tells the database the command it will run is $insQuery so it wouldn't deviate from it and bind_param tells the database that the 2 varaible replacing the ? into the prepared statement are strings essentially meaning the malicious input is cover with another "" so the command doesn't get changed.

Vulnerability 2 — Your Choice (4 pts) 

Authentication bypass: Remove or weaken your .htaccess protection on the quiz3 folder. Show what’s exposed. Explain why this matters for pages with database credentials. 

by removing the .htaccess protecion on the quiz3 folder people can gain access to the php code. they can look for the config.php which stores the database login creds and with it they can login the server database drop or import any thing they want.