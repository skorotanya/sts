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
      name: 'tso',
      type: 'full',
      columns: [],
      height: '65vh',
      modal: '',
      tab: false,
      firstTab: false
    },
    /*{
      name: 'yearParam',
      type: 'simple-scroll',
      height: '170px',
      columns: [],
      modal: 'editData',
      tab: false,
      firstTab: true
    },*/
    {
      name: 'response',
      type: 'simple-scroll',
      height: '210px',
      columns: [],
      modal: 'editData',
      tab: false,
      firstTab: true
    }
  ];

  initPageTables(pageTables);

    // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row tsoServTable */
    $('#tsoTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

        // show message modal window
    $('.bttn-excel-export').on('click', (e) => {
       // showMessage('В рабочей версии здесь будет запускаться экспорт в excel.');
       // showMessage('Файл excel выгружен.', 'success');
       showMessage('Данные для экспорта ещё не выбраны.', 'fault');
    });

});

