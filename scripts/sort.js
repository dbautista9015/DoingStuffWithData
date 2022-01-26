export default function Sorting() {

// Basic example
$(document).ready(function () {
    $('#dtBasicExample').DataTable({
      "paging": true, // false to disable pagination (or any other option)
      "lengthMenu": [[10,20,30,40,50,-1], [10,20,30,40,50,"All"]]
    });
    $('.dataTables_length').addClass('bs-select');
  });
}