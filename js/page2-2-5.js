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

    initDataTable('tpFeeTable', 'full');

    initDataTable('reserveFeeTable', 'full');


    // event listeners on current page

    // adjust table columns after showing tab for edit data
    const ratesTab = document.querySelector('button[data-bs-target="#ratesTab"');
    ratesTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('ratesTable');
    })
  
    const tpFeeTab = document.querySelector('button[data-bs-target="#tpFeeTab"');
    tpFeeTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('tpFeeTable');
    })

    const reserveFeeTab = document.querySelector('button[data-bs-target="#reserveFeeTab"');
    reserveFeeTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('reserveFeeTable');
    })


});

