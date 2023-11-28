$(document).ready(function () {

    // javascript functions for current page
 
     // init dataTables on current page

    const pageTables = [
    {
      name: 'tepSources',
      type: 'full',
      columns: [],
      height: '37vh',
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'tepST',
      type: 'full',
      columns: [],
      height: '37vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tepETO',
      type: 'full',
      columns: [],
      height: '37vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tepByYear',
      type: 'full',
      columns: [],
      height: '23vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tepYearSources',
      type: 'full',
      columns: [],
      height: '18vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tepYearST',
      type: 'full',
      columns: [],
      height: '19vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'tepYearETO',
      type: 'full',
      columns: [],
      height: '19vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'balanceFuel',
      type: 'full',
      columns: [],
      height: '30vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'balanceFuelST',
      type: 'full',
      columns: [],
      height: '30vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'balanceFuelETO',
      type: 'full',
      columns: [],
      height: '30vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'electroBalance',
      type: 'full',
      columns: [],
      height: '29vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'electroBalancePower',
      type: 'full',
      columns: [],
      height: '51vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'electroBalanceHour',
      type: 'full',
      columns: [],
      height: '51vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'comparison',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'perspectiveModes',
      type: 'full',
      columns: [],
      height: '41vh',
      modal: '',
      tab: true,
      firstTab: false
    }/*,
    {
      name: 'electroIntake',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'setIntakeData',
      tab: false,
      firstTab: true,
      accordionId: ''
    }*/

  ];

  initPageTables(pageTables);

    // event listeners on current page

    /* Double click on row summaryResoucesTable */
   // $('#waterProcessingTable tbody').on('dblclick', 'tr', function () {
   //   showModal('editData');
   // } );

    /* Double click on row costsCalcTable */
   // $('#equipmentTable tbody').on('dblclick', 'tr', function () {
   //   showModal('editData');
   // } );

    /* Double click on row costsCalcTable */
   // $('#balanceTable tbody').on('dblclick', 'tr', function () {
   //   showModal('editData');
   // } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      showModal('editData');
    } );

     /* To change summary activities dependent on selected fuel type */
     $('.selectpicker.select-fuel-type').on('change',function(){
      let selectedVal = $(this).val();
      console.log(selectedVal);
      switch (selectedVal) {
        case '1' : $('.fuel1').show();
                 $('.fuel2').hide();
                 $('.fuel3').hide();
                 break;
        case '2' :
        case '5' : $('.fuel1').hide();
                 $('.fuel2').show();
                 $('.fuel3').hide();
                 break;
        case '3' :
        case '4' :
        case '6' : $('.fuel1').hide();
                 $('.fuel2').hide();
                 $('.fuel3').show();
                 break;
      }
     });


     /* Click on button */
     $('.bttn-set-intake').on('click', (e) => {
      showModal('setIntakeData');
    } );


    // Show/hide table columns dependant on checked data entry period
    $('[name="dataEntryPeriod"]').on('change', () => {
      let colvis = $('[class*=colvis]');
      let checkVal = $('[name="dataEntryPeriod"]:checked').val();
      colvis.css('display','none'); // hide all cells
      $('.colvis-' + checkVal).attr('style',''); // display chosen cells
    })

    // Show/hide table rows dependant on checked data entry way
    $('[name="dataEntryWay"]').on('change', () => {
      let rowhide = $('[class*=rowhide]'); // all rows with 'rowhide-' class
      let nodrop = $('[class*=nodrop]'); // all cells with 'nodrop-' class
      let checkVal = $('[name="dataEntryWay"]:checked').val(); // current checked value at radio buttons of data entry way
      rowhide.removeClass('d-none'); // remove bootstrap hiding elements class = show rows
      $('.rowhide-' + checkVal).addClass('d-none'); // add hiding class to chosen rows according to checked value = hide rows
      nodrop.addClass('dropdown-toggle'); // add class to cells for dropdown action
      $('.nodrop-' + checkVal).removeClass('dropdown-toggle'); // remove dropdown arrow from chosen cells according to checked value
    })

    // Show/hide table rows by tree hierarchy
    $('.clicker > td:first-child').on('click', function(){

      let tdElem = $(this);

      if (!tdElem.hasClass('dropdown-toggle')) return;
      let action = tdElem.hasClass('show'); // true = close branch, false = open branch
      tdElem.toggleClass('show');
      let lvl = parseInt(tdElem.parent().data('lvl'));
      var selString = '';
      for(let i = lvl; i > 0; i--) {
        if(selString != '') selString += ', ';
        selString += 'tr[data-lvl="' + i + '"]';
      }
      // ex: for row with data-lvl='2' selString = 'tr[data-lvl=2], tr[data-lvl=1]''
      let branch = tdElem.parent().nextUntil(selString);
      // ex: select all rows to next row with data-lvl=2 or data-lvl=1 or table end
      branch.each(function(index, elem){
         if(action) { // close branch
          if($(elem).hasClass('clicker')) {
            $(elem).children(':first-child').removeClass('show'); // close all children branches
          }
          $(elem).fadeOut(50);
         }
         else { // open branch
          
          if($(elem).data('lvl') == lvl+1) {
            $(elem).fadeIn(); //open the only high level children branch relative to the target row
          }
         }
      });

    });

});

