
<?php
header('location: index_2.html #contact' );
// Process Form Submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $nom = $_POST['nom'];
    $adresse = $_POST['adresse'];
    $contact= $_POST['contact'];
    $email = $_POST['email'];
   
    
    // Store data in the database
    $servername = "localhost"; // Replace with your server name
    $username = "root"; // Replace with your database username
    $password = ""; // Replace with your database password
    $dbname = "offroad-3"; // Replace with your database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connexion non valide " . $conn->connect_error);
    }

    // SQL to insert data into table
    $sql = "INSERT INTO agences (nom,adresse,contact,email) VALUES ('$nom','$adresse', '$contact','$email')"; 

    if ($conn->query($sql) === TRUE) {
        echo "Email envoyé avec succès !";
    } else {
        echo "Erreur" . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>