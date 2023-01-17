/*let table = new DataTable('#tso_table', {
    // options
    scrollX: true,
    scrollY: "600px",
    paging: false,
    searching: false,

});*/


$(document).ready(function () {
    let table1 = $('#tso_table').DataTable({
    	language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/ru.json'
        },
        scrollY: '500px',
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        select: true,
        buttons: [
            'colvis','searchBuilder'
        ],
        dom: 'Brt'
        
    });

    $('#tso2_table').DataTable({
    	language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/ru.json'
        },
        scrollY: '500px',
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        info: false,
        buttons: [
            'colvis','searchBuilder'
        ],
        dom: 'Brt'
        

    });

    $('#tso_table tbody').on('dblclick', 'tr', function () {
        let data1 = table1.row(this).data();
        alert('You clicked on ' + data1[0] + " row");
    });
});
