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
    initDataTable('ratesTable', 'full');
    adjustColumns('ratesTable');
    loadFilterFromState('ratesTable');

    initDataTable('tpPersonalFeeTable', 'full');
    initDataTable('tpStandartFeeTable', 'full');

    initDataTable('reserveFeeTable', 'full');


    // event listeners on current page

    // adjust table columns after showing tab for edit data
    const ratesTab = document.querySelector('button[data-bs-target="#ratesTab"');
    ratesTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('ratesTable');
    })
  
    const tpPersonalFeeTab = document.querySelector('button[data-bs-target="#tpPersonalFeeTab"');
    tpPersonalFeeTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('tpPersonalFeeTable');
    })

     const tpStandartFeeTab = document.querySelector('button[data-bs-target="#tpStandartFeeTab"');
    tpStandartFeeTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('tpStandartFeeTable');
    })

    const reserveFeeTab = document.querySelector('button[data-bs-target="#reserveFeeTab"');
    reserveFeeTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('reserveFeeTable');
    })


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

