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
      name: 'rates',
      type: 'full',
      columns: [],
      height: '59vh',
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'tpPersonalFee',
      type: 'full',
      columns: [],
      height: '61vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tpStandartFee',
      type: 'full',
      columns: [],
      height: '61vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'reserveFee',
      type: 'full',
      columns: [],
      height: '61vh',
      modal: '',
      tab: true,
      firstTab: false
    }
  ];

  initPageTables(pageTables);



    // event listeners on current page


    /* Double click on row ratesTable */
    $('#ratesTable tbody').on('dblclick', 'tr', function () {
      showModal('editRatesData');
    } );

    /* Double click on row tpPersonalFeeTable */
    $('#tpPersonalFeeTable tbody').on('dblclick', 'tr', function () {
      showModal('editPersonalData');
    } );

    /* Double click on row tpStandartFeeTable */
    $('#tpStandartFeeTable tbody').on('dblclick', 'tr', function () {
      showModal('editStandartData');
    } );

    /* Double click on row reserveFeeTable */
    $('#reserveFeeTable tbody').on('dblclick', 'tr', function () {
      showModal('editReserveData');
    } );


    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      let activeTabId = $('.tab-pane.active').attr('id');
      switch (activeTabId) {
        case 'ratesTab' : showModal('editRatesData');
                          break;
        case 'tpPersonalFeeTab' : showModal('editPersonalData');
                                  break;
        case 'tpStandartFeeTab' : showModal('editStandartData');
                                  break;
        case 'reserveFeeTab' : showModal('editReserveData');
                                break;
      }
      
    } );


});

