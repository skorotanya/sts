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
      name: 'equipmentType1',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'equipmentType2',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType3',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType4',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType5',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType6',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType7',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType8',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType9',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'equipmentType10',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType11',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType12',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType13',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType14',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType15',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'equipmentType16',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    }
  ];
  
  initPageTables(pageTables);

    /* Double click on row otherCostsTable */
    $('#equipmentType1Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType2Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType2Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType3Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType3Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType4Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType4Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType5Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType5Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType6Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType6Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType7Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType7Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType8Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType8Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType9Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType9Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType10Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType10Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType11Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentTypesData');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType12Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentTypesData');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType13Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentTypesData');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType14Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType15Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentTypesData');
    } );

        /* Double click on row otherCostsTable */
    $('#equipmentType16Table tbody').on('dblclick', 'tr', function () {
      showModal('editEquipmentType16Data');
    } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      let activeTabId = $('.tab-pane.active').attr('id');
      switch (activeTabId) {
        case 'equipmentType1Tab' : showModal('editEquipmentType1Data');
                              break;
        case 'equipmentType2Tab' : showModal('editEquipmentType2Data');
                        break;
        case 'equipmentType3Tab' : showModal('editEquipmentType3Data');
                        break;
        case 'equipmentType4Tab' : showModal('editEquipmentType4Data');
                        break;
        case 'equipmentType5Tab' : showModal('editEquipmentType5Data');
                        break;
        case 'equipmentType6Tab' : showModal('editEquipmentType6Data');
                        break;
        case 'equipmentType7v' : showModal('editEquipmentType7Data');
                        break;
        case 'equipmentType8Tab' : showModal('editEquipmentType8Data');
                        break;
        case 'equipmentType9Tab' : showModal('editEquipmentType9Data');
                        break;
        case 'equipmentType10Tab' : showModal('editEquipmentType10Data');
                        break;
        case 'equipmentType11Tab' : $('editEquipmentTypesData modal-title').val('Редактирование данных установки обратного осмоса ВПУ');
                        showModal('editEquipmentTypesData');
                        break;
        case 'equipmentType12Tab' : $('editEquipmentTypesData modal-title').val = 'Редактирование данных установки нано фильтрации ВПУ';
                        showModal('editEquipmentTypesData');
                        break;
        case 'equipmentType13Tab' : $('editEquipmentTypesData modal-title').val = 'Редактирование данных деаэратора';
                        showModal('editEquipmentTypesData');
                        break;
        case 'equipmentType14Tab' : showModal('editEquipmentType14Data');
                        break;
        case 'equipmentType15Tab' : $('editEquipmentTypesData modal-title').val = 'Редактирование данных комплексона ВПУ';
                        showModal('editEquipmentTypesData');
                        break;
        case 'equipmentType16Tab' : showModal('editEquipmentType16Data');
                        break;
      }
      
    } );


});

