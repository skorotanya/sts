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
      name: 'refCompanies',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row ecoTable */
    $('#refCompaniesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('.bttn-add-phone').on('click', (e) => {
        const parent = e.target.parentNode;
        parent.insertAdjacentHTML('beforebegin','<div class="data-item"><label class="data-label smx-fix"></label><input type="phone" class="data-value md-stretch"></input></div>');
    });

     $('.bttn-add-email').on('click', (e) => {
        const parent = e.target.parentNode;
        parent.insertAdjacentHTML('beforebegin','<div class="data-item"><label class="data-label smx-fix"></label><input type="email" class="data-value md-stretch"></input></div>');
    });
});

