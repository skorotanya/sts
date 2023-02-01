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
    initDataTable('tsoServTable', 'full');
    adjustColumns('tsoServTable');
    loadFilterFromState('tsoServTable');

    initDataTable('srcListTable', 'full');
    loadFilterFromState('srcListTable');

    initDataTable('heatPointTable', 'full');
    loadFilterFromState('heatPointTable');

    initDataTable('extraDataTable', 'full');
    loadFilterFromState('extraDataTable');


    // event listeners on current page

    // adjust table columns after showing tab for edit data
    const tsoServTab = document.querySelector('button[data-bs-target="#tsoServTab"');
    tsoServTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('tsoServTable');
    })
  
    const srcListTab = document.querySelector('button[data-bs-target="#srcListTab"');
    srcListTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('srcListTable');
    })

    const heatPointTab = document.querySelector('button[data-bs-target="#heatPointTab"');
    heatPointTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('heatPointTable');
    })

    const extraDataTab = document.querySelector('button[data-bs-target="#extraDataTab"');
    extraDataTab.addEventListener('shown.bs.tab', event => {
      adjustColumns('extraDataTable');
    })


});

