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
      name: 'objectType1',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'objectType2',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType3',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType4',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType5',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType6',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType7',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType8',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType9',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: true,
      accordionId: ''
    },
    {
      name: 'objectType10',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType11',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType12',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType13',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType14',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType15',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType16',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType17',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType18',
      type: 'full',
      height: '73vh',
      columns: [],
      modal: '',
      tab: true,
      firstTab: false,
      accordionId: ''
    },
    {
      name: 'objectType19',
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
    $('#objectType1Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных водогрейной котельной');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType2Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных паровой котельной');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType3Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных БМК (водогрейной)');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType4Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных БМК (паровой)');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType5Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных парового котлоагрегата');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType6Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных водогрейного котлоагрегата');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType7Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных паровой турбины');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType8Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных газовой турбины');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType9Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType1Data .modal-title').text('Редактирование данных поршневого агрегата');
      showModal('editObjectType1Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType10Table tbody').on('dblclick', 'tr', function () {
      showModal('editObjectType10Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType11Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType11Data .modal-title').text('Редактирование данных камеры');
      showModal('editObjectType11Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType12Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType11Data .modal-title').text('Редактирование данных шарового крана с электроприводом');
      showModal('editObjectType11Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType13Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType11Data .modal-title').text('Редактирование данных шарового крана с редуктором');
      showModal('editObjectType11Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType14Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных насосной станции');
      showModal('editObjectType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType15Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных насоса центробежного');
      showModal('editObjectType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType16Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных теплообменника кожухотрубного');
      showModal('editObjectType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType17Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных теплообменника пластинчатого');
      showModal('editObjectType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType18Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных ЦТП');
      showModal('editObjectType14Data');
    } );

        /* Double click on row otherCostsTable */
    $('#objectType19Table tbody').on('dblclick', 'tr', function () {
      $('#editObjectType14Data .modal-title').text('Редактирование данных ИТП');
      showModal('editObjectType14Data');
    } );

    /* Click on Add button */
     $('.bttn-edit-data').on('click', (e) => {
      let activeTabId = $('.tab-pane.active').attr('id');
      switch (activeTabId) {
        case 'objectType1Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных водогрейной котельной');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType2Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных паровой котельной');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType3Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных БМК (водогрейной)');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType4Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных БМК (паровой)');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType5Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных парового котлоагрегата');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType6Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных водогрейного котлоагрегата');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType7Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных паровой турбины');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType8Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных газовой турбины');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType9Tab' : $('#editObjectType1Data .modal-title').text('Редактирование данных поршневого агрегата');
                                showModal('editObjectType1Data');
                                break;
        case 'objectType10Tab' : showModal('editObjectType10Data');
                                 break;
        case 'objectType11Tab' : $('#editObjectType11Data .modal-title').text('Редактирование данных камеры');
                                 showModal('editObjectType11Data');
                                 break;
        case 'objectType12Tab' : $('#editObjectType11Data .modal-title').text('Редактирование данных шарового крана с электроприводом');
                                 showModal('editObjectType11Data');
                                 break;
        case 'objectType13Tab' : $('#editObjectType11Data .modal-title').text('Редактирование данных шарового крана с редуктором');
                                 showModal('editObjectType11Data');
                                 break;
        case 'objectType14Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных насосной станции');
                                 showModal('editObjectType14Data');
                                 break;
        case 'objectType15Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных насоса центробежного');
                                 showModal('editObjectType14Data');
                                 break;
        case 'objectType16Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных теплообменника кожухотрубного');
                                 showModal('editObjectType14Data');
                                 break;
        case 'objectType17Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных теплообменника пластинчатого');
                                 showModal('editObjectType14Data');
                                 break;
        case 'objectType18Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных ЦТП');
                                 showModal('editObjectType14Data');
                                 break;
        case 'objectType19Tab' : $('#editObjectType14Data .modal-title').text('Редактирование данных ИТП');
                                 showModal('editObjectType14Data');
                                 break;
      }
      
    } );


});

