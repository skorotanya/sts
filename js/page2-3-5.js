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
    },
    {
      name: 'electroIntake',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'setIntakeData',
      tab: false,
      firstTab: true,
      accordionId: ''
    }

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


     /* Click on Add button */
     $('.bttn-set-intake').on('click', (e) => {
      showModal('setIntakeData');
    } );


  //   $('#hnEquipmentTable tbody').on('dblclick', 'tr', function () {
  //    showModal('editEquipmentData');
  //    $('#checkHeatNetworkType').prop('checked', true);
   //   $('#checkBoilerType').prop('checked', false);
   // } );

   //  $('#bEquipmentTable tbody').on('dblclick', 'tr', function () {
   //   showModal('editEquipmentData');
  //    $('#checkHeatNetworkType').prop('checked', false);
  //    $('#checkBoilerType').prop('checked', true);
  //  } );

  //   setEnableElements('checkBoiler');

  //   setEnableElements('checkHeatNetwork');


});

