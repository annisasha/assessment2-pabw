<?php
$conn = mysqli_connect("localhost", "root", "", "transaksi");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

$sql = "SELECT * FROM transaksi";
$result = mysqli_query($conn, $sql);

$rows = array();
while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
}

echo json_encode($rows);

mysqli_close($conn);
?>
