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
      name: 'hnList',
      type: 'full',
      columns: [],
      height:'51vh',
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'hnByYear',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'losses',
      type: 'full',
      columns: [],
      height:'43vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'damage',
      type: 'full',
      columns: [],
      height: '45vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'protection',
      type: 'full',
      columns: [],
      height: '56vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'development',
      type: 'full',
      columns: [],
      height: '42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'listGroupHN',
      type: 'simple-scroll',
      columns: [],
      height: '40vh',
      modal: 'editGroupHN',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'lossesDamage',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel4'
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
    $('.bttn-edit-group').on('click', (e) => {
        showModal('editGroupHN');
    });

        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#hnListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row loadsByYearTable 
    $('#hnByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#lossesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#damageTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#protectionTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row developmentTable 
    $('#developmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentData');
    });

    // Enabled / disabled year select depending on active tab
    $('.main-content .tab-content button[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
        let year = $('select.param-calc-year');
        if($(this).data('bs-target') == '#hnListTab'){
          year.prop('disabled',false);
        } else {
          year.prop('disabled',true);
        }
        year.selectpicker('destroy');
        year.selectpicker();
        year.addClass('selectpicker');
    });

    // Enabled / disabled form controls on popup "editGroupHN" by checkboxes
    for (let i = 1; i <= 6; i++) {
      setEnableElements('checkData' + i);
    }

    setEnableElements('checkEHZ');

    

});

