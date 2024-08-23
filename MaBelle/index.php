<?php

$host = "Localhost";
$database ="mabelle";
$kullanici = "root";
$sifre = "";

$baglanti1 = mysqli_connect($host, $kullanici, $sifre);
$baglanti2 = mysqli_select_db($baglanti1, $database);

if(!$baglanti1){
    echo json_encode(["message" => "Bağlantı sağlanamadı."]);
    exit();
}


$products = mysqli_query($baglanti1 ,"select * from products");
            // while($row = mysqli_fetch_array($products)){
            //     $ProductId = $row ['ProductId'];
            //     $ProductName = $row['ProductName'];

            //     echo "<h1>$ProductId </h1>";
            //     echo "<h2>$ProductName </h2>";
            // }

            
// // print_r($products)            
// if (mysqli_num_rows($products) > 0) {
//     while ($row = mysqli_fetch_assoc($products)) {
//         // Her satırı print_r ile yazdırın
//         print_r($row);
//         echo "<br><br>"; // Her ürün arasında boşluk bırakmak için
//     }
// } else {
//     echo "Veritabanında ürün bulunamadı.";
// }

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

$urunler = array();

if (mysqli_num_rows($products) > 0) {
    while ($row = mysqli_fetch_assoc($products)) {
        $urunler[] = $row; // Veritabanından gelen her satırı diziye ekleyin
    }
} else {
    echo json_encode(["message" => "Veritabanında ürün bulunamadı."]);
    exit();
}

// JSON formatında verileri döndürme
echo json_encode($urunler);
?>