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
    initDataTable('costsCalcTable', 'full');
    adjustColumns('costsCalcTable');
    loadFilterFromState('costsCalcTable');

    initDataTable('transpCostsTable', 'full');

    initDataTable('productCostsTable', 'full');

    initDataTable('nvvTable', 'full');

    initDataTable('otherCostsTable', 'full');


    // event listeners on current page

    // adjust table columns after showing tab for edit data
    const costsCalcTab = document.querySelector('button[data-bs-target="#costsCalcTab"');
    costsCalcTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('costsCalcTable');
    })
  
    const transpCostsTab = document.querySelector('button[data-bs-target="#transpCostsTab"');
    transpCostsTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('transpCostsTable');
    })

    const productCostsTab = document.querySelector('button[data-bs-target="#productCostsTab"');
    productCostsTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('productCostsTable');
    })

    const nvvTab = document.querySelector('button[data-bs-target="#nvvTab"');
    nvvTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('nvvTable');
    })

    const otherCostsTab = document.querySelector('button[data-bs-target="#otherCostsTab"');
    otherCostsTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('otherCostsTable');
    })

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

