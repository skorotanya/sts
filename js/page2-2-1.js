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
    initDataTable('tsoTable', 'full');
    adjustColumns('tsoTable');
    loadFilterFromState('tsoTable');

    initDataTable('yearParamTable', 'simple-scroll');
    initDataTable('responseTable', 'simple-scroll');


    // event listeners on current page

    // adjust table columns after showing modal window for edit data
    const editDataModal = document.getElementById('editData');
    editDataModal.addEventListener('shown.bs.modal', event => {
      adjustColumns('yearParamTable');
      adjustColumns('responseTable');
    })

    // show modal window for edit data
    document.querySelector('.bttn-edit-data').addEventListener('click', (e) => {
        showModal('editData');
    });

});

