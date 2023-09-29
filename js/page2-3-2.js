$(document).ready(function () {

    // javascript functions for current page


     // init dataTables on current page

  const pageTables = [
    {
      name: 'equipmentSummary',
      type: 'full',
      columns: [],
      height:'40vh',
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'equipmentType1',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType2',
      type: 'full',
      columns: [],
      height:'40vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType3',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType4',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType5',
      type: 'full',
      columns: [],
      height:'46vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType6',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType7',
      type: 'full',
      columns: [],
      height:'44vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType8',
      type: 'full',
      columns: [],
      height:'42vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentByYear',
      type: 'full',
      columns: [],
      height:'48vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'power',
      type: 'full',
      columns: [],
      height:'40vh',
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipment1',
      type: 'scroll-colvis',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel1'
    },
    {
      name: 'equipment2',
      type: 'scroll-colvis',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel2'
    },
    {
      name: 'equipment3',
      type: 'scroll-colvis',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel3'
    },
    {
      name: 'equipment4',
      type: 'simple-scroll',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel4'
    },
    {
      name: 'equipment5',
      type: 'simple-scroll',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel5'
    },
    {
      name: 'equipment6',
      type: 'simple-scroll',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel6'
    },
    {
      name: 'equipment7',
      type: 'simple-scroll',
      columns: [],
      height:'38vh',
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel7'
    }/*,
    {
      name: 'docsFotos',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel8'
    }*/
  ];
  
  initPageTables(pageTables);


        // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    $('#equipmentSummaryTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType1Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType2Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType3Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType4Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType5Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType6Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType7Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#equipmentType8Table tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    // Double click on row loadsByYearTable 
    $('#equipmentByYearTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('#powerTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    });

    $('.dropdown-tab').on('click', function() {
      let dropThis = $(this);
      let dropTitle = dropThis.closest('.nav-item').children('.dropdown-title');
      dropTitle.text(dropThis.text());
      let tblId = dropThis.attr('data-bs-target')
            .slice(0,-3)
            .slice(1) 
            + 'Table';
      adjustColumns(tblId);
      //console.log(dropThis.parent().index());
      let ind = dropThis.parent().index();
      let tabLinks = dropThis.closest('.nav-tabs').find('.nav-item.d-none .nav-link');
      //console.log(tabLinks.length);
      tabLinks.each(function(index, elem){
        $(this).removeClass('active');

        if(index == ind) {
          //console.log(index);
          $(this).addClass('active');
        }
      });
    });

    $('.nav-tabs .nav-item.d-none .nav-link').on('click', function(){
      let tabThis = $(this);
      let dropLinks = tabThis.closest('.nav-tabs').find('.dropdown-tab');
      //console.log(dropLinks.length);
      let dropTitle = tabThis.closest('.nav-tabs').find('.dropdown-title');
      dropTitle.text(tabThis.text());
      let ind = tabThis.parent().index();
      dropLinks.each(function(index, elem){
          $(this).removeClass('active');

          if(index == ind) {
            //console.log(index);
            $(this).addClass('active');
          }
      });
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

