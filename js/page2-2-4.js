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


});

