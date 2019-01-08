<?php
/**
 * Created by PhpStorm.
 * User: Rao Ammar
 * Date: 01/01/2019
 * Time: 10:30 PM
 */

$connection=mysqli_connect("localhost","root","","pro_database");
if($connection->connect_error)
{
    die("connection failed");
}
function fetchCategories()
{
    global $connection;

    $sqlQuery="select * from categories";
    $result=mysqli_query($connection,$sqlQuery);
    while ($row= mysqli_fetch_array($result))
    {
        echo "<option> $row[name] </option>";
    }
}



function fetchBrands()
{
    global $connection;

    $sqlQuery="select * from brands";
    $result=mysqli_query($connection,$sqlQuery);
    while ($row= mysqli_fetch_array($result))
    {
        echo "<option> $row[name] </option> ";
    }
}

?>