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
      name: 'hpProduction',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'hpTransfer',
      type: 'full',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'balanceProductionTZ',
      type: 'simple-scroll',
      height: "1090px",
      columns: [],
      modal: 'editProductionData',
      tab: false,
      firstTab: true
    },
    {
      name: 'balanceTransferTZ',
      type: 'simple-scroll',
      height: "300px",
      columns: [],
      modal: 'editTransferData',
      tab: false,
      firstTab: true
    }
  ];

  initPageTables(pageTables);


      /* Double click on row hpProductionTable */
    $('#hpProductionTable tbody').on('dblclick', 'tr', function () {
      showModal('editProductionData');
    } );

     /* Double click on row hpTransferTable */
    $('#hpTransferTable tbody').on('dblclick', 'tr', function () {
      showModal('editTransferData');
    } );

      /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      let activeTabId = $('.tab-pane.active').attr('id');
      if (activeTabId == 'hpProductionTab') {showModal('editProductionData');}
      else if (activeTabId == 'hpTransferTab') {showModal('editTransferData');}
      
    } );

    /* Double click on row hpProductionTable */
    $('#outputProductionTable tbody').on('dblclick', 'tr', function () {
      showModal('editOutputProductionData');
    } );

     /* Double click on row hpProductionTable */
    $('#transferTZTable tbody').on('dblclick', 'tr', function () {
      showModal('editTransferTZData');
    } );

});

