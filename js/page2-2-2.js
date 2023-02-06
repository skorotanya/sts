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
      name: 'tsoServ',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'srcList',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'heatPoint',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'extraData',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'zoneSrcList',
      type: 'full',
      columns: [],
      modal: 'editData',
      tab: true,
      firstTab: true
    },
    {
      name: 'zoneNetParts',
      type: 'full',
      columns: [],
      modal: 'editData',
      tab: true,
      firstTab: false
    },
    {
      name: 'zoneNPS',
      type: 'full',
      columns: [],
      modal: 'editData',
      tab: true,
      firstTab: false
    },
    {
      name: 'zoneHeatPoint',
      type: 'full',
      columns: [],
      modal: 'editData',
      tab: true,
      firstTab: false
    },
  ];
  
  initPageTables(pageTables);

  /*

    initDataTable('tsoServTable', 'full');
    adjustColumns('tsoServTable');
    loadFilterFromState('tsoServTable');

    initDataTable('srcListTable', 'full');
    loadFilterFromState('srcListTable');

    initDataTable('heatPointTable', 'full');
    loadFilterFromState('heatPointTable');

    initDataTable('extraDataTable', 'full');
    loadFilterFromState('extraDataTable');


    initDataTable('zoneSrcListTable', 'full');
    loadFilterFromState('zoneSrcListTable');

    initDataTable('zoneNetPartsTable', 'full');
    loadFilterFromState('zoneNetPartsTable');

    initDataTable('zoneNPSTable', 'full');
    loadFilterFromState('zoneNPSTable');

    initDataTable('zoneHeatPointTable', 'full');
    loadFilterFromState('zoneHeatPointTable');

    // event listeners on current page
    // adjust table columns after showing tab for edit data
    const tsoServTab = document.querySelector('button[data-bs-target="#tsoServTab"');
    tsoServTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('tsoServTable');
    });
  
    const srcListTab = document.querySelector('button[data-bs-target="#srcListTab"');
    srcListTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('srcListTable');
    });

    const heatPointTab = document.querySelector('button[data-bs-target="#heatPointTab"');
    heatPointTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('heatPointTable');
    });

    const extraDataTab = document.querySelector('button[data-bs-target="#extraDataTab"');
    extraDataTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('extraDataTable');
    });


    const zoneSrcListTab = document.querySelector('button[data-bs-target="#zoneSrcListTab"');
    zoneSrcListTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('zoneSrcListTable');
    });
  
    const zoneNetPartsTab = document.querySelector('button[data-bs-target="#zoneNetPartsTab"');
    zoneNetPartsTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('zoneNetPartsTable');
    });

    const zoneNPSTab = document.querySelector('button[data-bs-target="#zoneNPSTab"');
    zoneNPSTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('zoneNPSTable');
    });

    const zoneHeatPointTab = document.querySelector('button[data-bs-target="#zoneHeatPointTab"');
    zoneHeatPointTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('zoneHeatPointTable');
    });

    // adjust table columns after showing modal window for edit data
    const editDataModal = document.getElementById('editData');
    editDataModal.addEventListener('shown.bs.modal', event => {
      adjustColumns('zoneSrcListTable');
    });
    */


    /* Double click on row tsoServTable */
    //const tsoServTable = $('#tsoServTable').DataTable();
    $('#tsoServTable tbody').on('dblclick', 'tr', function () {
    //let data = tsoServTable.row(this ).data();
      showModal('editData');
    } );

});

