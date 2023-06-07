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
      name: 'hpList',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'loadsByYear',
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
      name: 'loadsSchema',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'automation',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'resources',
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
      name: 'listSwitchHP',
      type: 'simple-scroll',
      columns: [],
      height: '40vh',
      modal: 'editSwitchHP',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'switchCustomers',
      type: 'full',
      columns: [],
      modal: 'editLoadsData',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'heatEquip',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel5-1'
    },
    {
      name: 'pumpEquip',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel5-2'
    },
    {
      name: 'resAccount',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel7'
    },
    {
      name: 'docsFotos',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel9'
    },
    {
      name: 'selectSources',
      type: 'simple-scroll',
      columns: [],
      height: '20vh',
      modal: 'tableConstructor',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'allSources',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'tableConstructor',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'selectHP',
      type: 'simple-scroll',
      columns: [],
      height: '20vh',
      modal: 'tableConstructor',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'allHP',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'tableConstructor',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'selectCustomers',
      type: 'simple-scroll',
      columns: [],
      height: '20vh',
      modal: 'tableConstructor',
      tab: false,
      firstTab: true,
      accordionId: ''
    }
  ];
  
  initPageTables(pageTables);

/*
    // Double click on row tsoServTable 
    $('#tsoServTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row srcListTable 
    $('#srcListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row heatPointTable 
    $('#heatPointTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row extraDataTable 
    $('#extraDataTable tbody').on('dblclick', 'tr', function () {
      showModal('editExtraData');
    } );
*/

    // show modal window for edit data
    $('.bttn-switch-hp').on('click', (e) => {
        showModal('editSwitchHP');
    });


        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

        // Click on row listSwitchHPTable 
    $('#listSwitchHPTable tbody').on('click', 'tr', function () {

      document.querySelector('#unomHP').innerText = this.children[0].innerText;
      document.querySelector('#nameHP').innerText = this.children[1].innerText;
    } );

    $('#checkHasBattery').change(function(){
      let inp = document.querySelector('#inpSizeBattery');
      inp.value = '';
      inp.disabled = !this.checked;
    } );

    // Double click on row HNdistribTable 
    $('#HNdistribTable tbody').on('dblclick', 'tr', function () {
      showModal('editDistribData');

      document.querySelector('#calcYear').value = this.children[0].innerText;

    } );

    // Double click on row loadsByYearTable 
    $('#loadsByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editLoadsData');
    } );

    // show modal window for edit data
    $('.bttn-group-event').on('click', (e) => {
        showModal('editGroupEventData');
    });

      // Double click on row developmentTable 
    $('#developmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentData');
    } );


});

