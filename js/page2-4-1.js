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
  ];

  */


  const pageTables = [
    {
      name: 'hnList',
      type: 'full',
      columns: [],
      height:'52vh',
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'hnByYear',
      type: 'full',
      columns: [],
      height:'41vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'losses',
      type: 'full',
      columns: [],
      height:'44vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'damage',
      type: 'full',
      columns: [],
      height: '44vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'protection',
      type: 'full',
      columns: [],
      height: '51vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'development',
      type: 'full',
      columns: [],
      height: '41vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'listGroupHN',
      type: 'simple-scroll',
      columns: [],
      height: '40vh',
      modal: 'editGroupHN',
      tab: false,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'lossesDamage',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel4'
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

/*
    // Double click on row tsoServTable 
    $('#tsoServTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row srcListTable 
    $('#srcListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row heatPointTable 
    $('#heatPointTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    // Double click on row extraDataTable 
    $('#extraDataTable tbody').on('dblclick', 'tr', function () {
      showModal('editExtraData');
    } );
*/

    // show modal window for edit data
    $('.bttn-edit-group').on('click', (e) => {
        showModal('editGroupHN');
    });

        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#hnListTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row loadsByYearTable 
    $('#hnByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#lossesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#damageTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#protectionTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row developmentTable 
    $('#developmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentData');
    });

    // Enabled / disabled year select depending on active tab
    $('.main-content .tab-content button[data-bs-toggle="tab"]').on('shown.bs.tab', function() {
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

    // Enabled / disabled form controls on popup "editGroupHN" by checkboxes
    for (let i = 1; i <= 6; i++) {
      $('#checkData' + i).on('change', function () {
        let check = this.checked;
        $('.checkData' + i).each(function(){
          if($(this).attr('type')=='text'){
            this.disabled = !check;
          }
          if($(this).hasClass('selectpicker')) {
            $(this).prop('disabled', !check);
            $(this).selectpicker('destroy');
            $(this).selectpicker();
            $(this).addClass('selectpicker');
          }
        });
      });
    }

    

});

