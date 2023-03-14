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
      name: 'eco',
      type: 'full',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

    /* Double click on row ecoTable */
    $('#ecoTable tbody').on('dblclick', 'tr', function () {
      showModal('editEcoData');
    } );


});

