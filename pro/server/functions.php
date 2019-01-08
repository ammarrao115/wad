<?php
require_once "db_connection.php";

function fetchCategories()
{
    global $connection;

    $sqlQuery="select * from categories";
    $result=mysqli_query($connection,$sqlQuery);
    while ($row= mysqli_fetch_array($result))
    {
        echo "<li> <a class=\"nav-link\" href=\"#\"></a>  $row[name] </li>";
    }
}



function fetchBrands()
{
    global $connection;

    $sqlQuery="select * from brands";
    $result=mysqli_query($connection,$sqlQuery);
    while ($row= mysqli_fetch_array($result))
    {
        echo "<li> <a class=\"nav-link\" href=\"#\"></a>  $row[name] </li>";
    }
}

?>