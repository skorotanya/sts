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
      name: 'refDevelopment',
      type: 'full',
      height: '62vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    },
    {
      name: 'refDevelopmentObject',
      type: 'full',
      height: '36vh',
      columns: [],
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel2'
    },
    {
      name: 'programObjects',
      type: 'simple-scroll',
      height: '64vh',
      columns: [],
      modal: 'switchProgramObjects',
      tab: false,
      firstTab: true,
      accordionId: ''
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row ecoTable */
    $('#refDevelopmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('.clicker td.dropdown-toggle').on('click', function(){
      $(this).toggleClass('show');
      $(this).parent().nextUntil('.clicker').fadeToggle(150);
    });

     /* Double click on row ecoTable */
    $('#refDevelopmentObjectTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentObjectData');
    } );

         // show modal window for edit data
    $('.bttn-switch-prog-objects').on('click', (e) => {
        showModal('switchProgramObjects');
    });

});

