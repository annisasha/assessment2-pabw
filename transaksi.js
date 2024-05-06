$(document).ready(function(){
  $.ajax({
      url: 'transaksi.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          $.each(data, function(index, transaksi){
              var row = '<tr>' +
                          '<td>' + transaksi.tanggal_transaksi + '</td>' +
                          '<td>' + transaksi.jenis_kendaraan + '</td>' +
                          '<td>' + transaksi.biaya + '</td>' +
                          '<td>' + transaksi.layanan + '</td>' +
                          '<td><button class="deleteButton" data-id="' + transaksi.id + '">Delete</button></td>' +
                        '</tr>';
              $('#tabelTransaksi tbody').append(row);
          });
      },
      error: function(xhr, status, error) {
          console.error(xhr.responseText);
      }
  });

  // Nomor 4
  $(document).on('click', '.deleteButton', function(){
      var id = $(this).data('id');
      $.ajax({
          url: 'hapus_transaksi.php?id=' + id,
          type: 'GET',
          success: function(response) {
              console.log(response);
              $(this).closest('tr').remove();
          },
          error: function(xhr, status, error) {
              console.error(xhr.responseText);
          }
      });
  });
});
