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


    /* Double click on row tsoServTable */
    $('#tsoServTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row srcListTable */
    $('#srcListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row heatPointTable */
    $('#heatPointTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row extraDataTable */
    $('#extraDataTable tbody').on('dblclick', 'tr', function () {
      showModal('editExtraData');
    } );

});

