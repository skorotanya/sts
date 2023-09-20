$(document).ready(function () {

    // javascript functions for current page



     // init dataTables on current page

    const pageTables = [
    {
      name: 'summaryResouces',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'waterResources',
      type: 'full',
      columns: [],
      height: '55vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'electroResources',
      type: 'full',
      columns: [],
      height: '55vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'gasResources',
      type: 'full',
      columns: [],
      height: '55vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'mazutResouces',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'dieselResources',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'coilResources',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'biogasResources',
      type: 'full',
      columns: [],
      height: '55vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'waterInputs',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel1'
    },
    {
      name: 'electroInputs',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel2'
    },
    {
      name: 'gasOutputs',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel3-2'
    },
    {
      name: 'gasPoints',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel3-3'
    },
    {
      name: 'mazutTanks',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel4-2'
    },
    {
      name: 'dieselTanks',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel5-2'
    },
    {
      name: 'coilStorageTanks',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel6-2'
    },
    {
      name: 'biogasInputs',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editData',
      tab: false,
      firstTab: false,
      accordionId: 'panel7-2'
    }

  ];

  initPageTables(pageTables);



    // event listeners on current page

    /* Double click on row summaryResoucesTable */
    $('#summaryResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#waterResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#electroResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#gasResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#mazutResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#dieselResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#coilResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#biogasResoucesTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      showModal('editData');
    } );

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

  //console.log(window.devicePixelRatio);


});

