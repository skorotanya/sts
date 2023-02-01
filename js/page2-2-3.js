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
    initDataTable('hpProductionTable', 'full');
    adjustColumns('hpProductionTable');
    loadFilterFromState('hpProductionTable');

    initDataTable('hpTransferTable', 'full');
    loadFilterFromState('hpTransferTable');

    // event listeners on current page

    // adjust table columns after showing tab for edit data
    const hpProductionTab = document.querySelector('button[data-bs-target="#hpProductionTab"');
    hpProductionTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('hpProductionTable');
    })
    // adjust table columns after showing tab for edit data
    const hpTransferTab = document.querySelector('button[data-bs-target="#hpTransferTab"');
    hpTransferTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('hpTransferTable');
    })

});

