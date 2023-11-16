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
      //console.log(colvis.length);
      colvis.css('display','none');
      $('.colvis-' + checkVal).attr('style','');
    })

    // Show/hide table rows dependant on checked data entry way
    $('[name="dataEntryWay"]').on('change', () => {
      let rowvis = $('[class*=rowvis]');
      let nodrop = $('[class*=nodrop]');
      let checkVal = $('[name="dataEntryWay"]:checked').val();
      console.log(rowvis.length);
      rowvis.removeClass('d-none');
      $('.rowvis-' + checkVal).addClass('d-none');
      nodrop.addClass('dropdown-toggle');
      $('.nodrop-' + checkVal).removeClass('dropdown-toggle');
    })

    // Show/hide table rows by tree hierarchy
    $('.clicker .dropdown-toggle').on('click', function(){
      let tdElem = $(this);
      let action = tdElem.hasClass('show'); // true = close branch, false = open branch
      //console.log('Action = ' + (action?'Close':'Open'));
      tdElem.toggleClass('show');
      let lvl = parseInt(tdElem.parent().data('lvl'));
      //console.log('level = ' + lvl);
      var selString = '';
      for(let i = lvl; i > 0; i--) {
        if(selString != '') selString += ', ';
        selString += 'tr[data-lvl="' + i + '"]';
        //console.log(i);
        //console.log(selString);
      }
      let branch = tdElem.parent().nextUntil(selString); //.slideToggle('normal');
      //console.log('Branch elements count = ' + branch.length);

      branch.each(function(index, elem){
         if(action) { // close branch
          if($(elem).hasClass('clicker')) {
            $(elem).children(':first-child').removeClass('show');
          }
          $(elem).fadeOut(50);
         }
         else { // open branch
          //console.log( index + 'row level = ' + $(elem).data('lvl'));
          if($(elem).data('lvl') == lvl+1) {
            $(elem).fadeIn();
          }
         }
      });

    });


});

