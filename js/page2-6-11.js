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
      name: 'refEnergoDevelopment',
      type: 'full',
      height: '66vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false
    },
    {
      name: 'refDevelopmentProject',
      type: 'full',
      height: '36vh',
      columns: [],
      modal: 'editData',
      tab: false,
      firstTab: true,
      accordionId: 'panel2'
    },
    {
      name: 'programProjects',
      type: 'simple-scroll',
      height: '64vh',
      columns: [],
      modal: 'switchProgramProjects',
      tab: false,
      firstTab: true,
      accordionId: ''
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

     // show modal window for edit data
    $('.bttn-edit-data').on('click', (e) => {
        showModal('editData');
    });

    /* Double click on row ecoTable */
    $('#refEnergoDevelopmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    $('.clicker').click(function(){
      $(this).children(0).toggleClass('show');
      $(this).nextUntil('.clicker').slideToggle('normal');
    });

     /* Double click on row ecoTable */
    $('#refDevelopmentProjectTable tbody').on('dblclick', 'tr', function () {
      showModal('editDevelopmentProjectData');
    } );

         // show modal window for edit data
    $('.bttn-switch-prog-projects').on('click', (e) => {
        showModal('switchProgramProjects');
    });

    //Show a list of parameters depending on the type of object
    $('#selObjType').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
      // do something...
      $('div[class^="data-row param-change"]').hide();
      switch (clickedIndex) {
        case 1 :  $('.data-row.param-change-1').show();
                  break;
        case 2 :  $('.data-row.param-change-1').show();
                  break;
        case 3 :  $('.data-row.param-change-3').show();
                  $('.data-row.param-change-4').show();
                  break;
        case 4 :  $('.data-row.param-change-2').show();
                  break;
        case 5 :  $('.data-row.param-change-5').show();
                  break;
      }
    });


    $('#checkDelete').change(function(){
      let inpY = document.querySelector('#inpDeleteYear');
      let inpR = document.querySelector('#inpDeleteReason');
      inpY.value = '';
      inpR.value = '';
      inpY.disabled = !this.checked;
      inpR.disabled = !this.checked;
    } );

    $('.check-source').change(function(){
      let elId =  this.id.substr(5);
      let el = document.querySelector('#inp' + elId);
      el.value = '';
      el.disabled = !this.checked;
    });
});

