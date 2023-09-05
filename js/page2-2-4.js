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
      name: 'costsCalc',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'transpCosts',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'productCosts',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'nvv',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'otherCosts',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: false
    }
  ];

  initPageTables(pageTables);



    // event listeners on current page

    /* Double click on row costsCalcTable */
    $('#costsCalcTable tbody').on('dblclick', 'tr', function () {
      showModal('editСostsData');
    } );

    /* Double click on row nvvTable */
    $('#nvvTable tbody').on('dblclick', 'tr', function () {
      showModal('editNvvData');
    } );

    /* Double click on row otherCostsTable */
    $('#otherCostsTable tbody').on('dblclick', 'tr', function () {
      showModal('editOtherCostsData');
    } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      let activeTabId = $('.tab-pane.active').attr('id');
      switch (activeTabId) {
        case 'costsCalcTab' : showModal('editСostsData');
                              break;
        case 'nvvTab' : showModal('editNvvData');
                        break;
        case 'otherCostsTab' : showModal('editOtherCostsData');
                        break;
      }
      
    } );


});

