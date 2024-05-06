<?php
if(isset($_GET['id'])) {
    $conn = mysqli_connect("localhost", "root", "", "transaksi");

    if (!$conn) {
        die("Koneksi gagal: " . mysqli_connect_error());
    }

    $id = mysqli_real_escape_string($conn, $_GET['id']);

    $sql = "DELETE FROM transaksi WHERE id = '$id'";

    if (mysqli_query($conn, $sql)) {
        echo "Transaksi dengan ID $id berhasil dihapus.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo "Parameter ID tidak diberikan.";
}
?>
