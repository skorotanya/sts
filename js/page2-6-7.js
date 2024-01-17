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
      name: 'totalConsumption',
      type: 'simple-scroll',
      height: '22vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false,
      accordionId: 'panel1'
    },
    {
      name: 'consumption1',
      type: 'simple-scroll',
      height: '22vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false,
      accordionId: 'panel1'
    },
    {
      name: 'consumption2',
      type: 'simple-scroll',
      height: '22vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false,
      accordionId: 'panel1'
    },
    {
      name: 'oksParams',
      type: 'simple-scroll',
      height: '22vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false,
      accordionId: 'panel2'
    },
    {
      name: 'loadRatio',
      type: 'simple-scroll',
      height: '22vh',
      columns: [],
      modal: '',
      tab: false,
      firstTab: false,
      accordionId: 'panel4'
    }
  ];

  initPageTables(pageTables);
 

    // event listeners on current page

});

