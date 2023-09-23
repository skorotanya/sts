$(document).ready(function () {

    // javascript functions for current page



     // init dataTables on current page

    const pageTables = [
    {
      name: 'waterProcessing',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: true
    },
    {
      name: 'equipment',
      type: 'full',
      columns: [],
      height: '52vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'balance',
      type: 'full',
      columns: [],
      height: '41vh',
      modal: '',
      tab: true,
      firstTab: false
    },
    {
      name: 'vpuEquipment',
      type: 'simple-scroll',
      columns: [],
      height: '22vh',
      modal: 'editEquipmentData',
      tab: false,
      firstTab: true
    }

  ];

  initPageTables(pageTables);



    // event listeners on current page

    /* Double click on row summaryResoucesTable */
    $('#waterProcessingTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#equipmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Double click on row costsCalcTable */
    $('#balanceTable tbody').on('dblclick', 'tr', function () {
      showModal('editData');
    } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      showModal('editData');
    } );

     $('#hnEquipmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentData');
      $('#checkHeatNetworkType').prop('checked', true);
      $('#checkBoilerType').prop('checked', false);
    } );

     $('#bEquipmentTable tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentData');
      $('#checkHeatNetworkType').prop('checked', false);
      $('#checkBoilerType').prop('checked', true);
    } );

     setEnableElements('checkBoiler');

     setEnableElements('checkHeatNetwork');


});

