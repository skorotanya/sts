$(document).ready(function () {

    // javascript functions for current page



     // init dataTables on current page

  /*  const tsoCols = [
    { "width": "5%" },
    { "width": "10%" },
    { "width": "15%" },
    { "width": "10%" },
   { "width": "10%" },
   { "width": "10%" },
   { "width": "10%" },
   { "width": "10%" },
   { "width": "10%" },
   { "width": "10%" }
  ];*/

    const pageTables = [
    {
      name: 'refTermalGraph',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row ecoTable */
    $('#refTermalGraphTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

});

