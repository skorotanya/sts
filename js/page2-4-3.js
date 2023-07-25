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
  ];

  */


  const pageTables = [
    {
      name: 'cellsList',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'compensators',
      type: 'full',
      columns: [],
      height: '54vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'rebars',
      type: 'full',
      columns: [],
      height: '44vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'development',
      type: 'full',
      columns: [],
      height: '50vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'listGroupCells',
      type: 'simple-scroll',
      columns: [],
      height: '40vh',
      modal: 'editGroupData',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'docsFotos',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel8'
    }/*,
    {
      name: 'resAccount',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel7'
    }*/
  ];
  
  initPageTables(pageTables);

    // show modal window for edit data
    $('.bttn-edit-group').on('click', (e) => {
        showModal('editGroupData');
    });


        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#cellsListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );


    $('#compensatorsTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('#rebarsTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row developmentTable 
    $('#developmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentData');
    } );

     // Enabled / disabled form controls on popup "editGroupHN" by checkboxes
    for (let i = 1; i <= 4; i++) {
      setEnableElements('checkData' + i);
    }

    // show modal window for edit data
    $('.bttn-group-event').on('click', (e) => {
        showModal('editGroupEventData');
    });

    setEnableElements('checkForvard');
    setEnableElements('checkReturn');

});

