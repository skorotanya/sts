$(document).ready(function () {

    // javascript functions for current page


     // init dataTables on current page

  const pageTables = [
    {
      name: 'sourceList',
      type: 'full',
      columns: [],
      height:'48vh',
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'sourceByYear',
      type: 'full',
      columns: [],
      height:'37vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'power',
      type: 'full',
      columns: [],
      height:'37vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'docsFotos',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel8'
    }
  ];
  
  initPageTables(pageTables);


        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#sourceListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row loadsByYearTable 
    $('#sourceByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#powerTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Enabled / disabled year select depending on active tab
/*    $('.main-content .tab-content button[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
        let year = $('select.param-calc-year');
        if($(this).data('bs-target') == '#hnListTab'){
          year.prop('disabled',false);
        } else {
          year.prop('disabled',true);
        }
        year.selectpicker('destroy');
        year.selectpicker();
        year.addClass('selectpicker');
    });
*/

    setEnableElements('checkEHZ');
    
});

