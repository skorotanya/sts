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
      name: 'psList',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'psSupply',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipment',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'protection',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'psFailure',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'development',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'psEquipment',
      type: 'simple-scroll',
      columns: [],
      height: '40vh',
      modal: 'editEquipmentData',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'powerSupply',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel4'
    },
    {
      name: 'lossesDamage',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel6'
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
    }
  ];
  
  initPageTables(pageTables);


     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#psListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row loadsByYearTable 
    $('#psSupplyTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('#equipmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentData');
    } );

    $('#protectionTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('#psFailureTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row developmentTable 
    $('#developmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentData');
    } );

    // show modal window for edit data
    $('.bttn-group-event').on('click', (e) => {
        showModal('editGroupEventData');
    });

    $('#equipmentByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentData');
    } );


    setEnableElements('checkPPS','radio','radioPSType2');

    setEnableElements('checkTM');

    setEnableElements('checkValve1');

    setEnableElements('checkValve2');

    setEnableElements('checkValve3');


});

