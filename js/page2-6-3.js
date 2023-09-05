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
      name: 'refZones',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    },
    {
      name: 'TZdistricts',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: true
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row ecoTable */
    $('#refZonesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

});

