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
      firstTab: true
    },
    {
      name: 'loadsByYear',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'equipment',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'loadsSchema',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'automation',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'resources',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'development',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
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



});

