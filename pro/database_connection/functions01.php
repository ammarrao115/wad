<?php
/**
 * Created by PhpStorm.
 * User: Rao Ammar
 * Date: 01/01/2019
 * Time: 11:15 PM
 */

    require "database_connection/pro_db_connection.php";

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