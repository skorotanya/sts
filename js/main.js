/*let table = new DataTable('#tso_table', {
    // options
    scrollX: true,
    scrollY: "600px",
    paging: false,
    searching: false,

});*/


/*  PRELOADER */

// hide preloader
const hidePreloader = () => {
    const pl = document.querySelector('.preloader');
    pl.classList.add('preloader__hiding');
    setTimeout(function(){
        pl.classList.add('preloader__hide');
        pl.classList.remove('preloader__hiding');
    }, 500);
}


// show preloader
const showPreloader = () => {
    const pl = document.querySelector('.preloader');
    pl.classList.remove('preloader__hide');
    pl.classList.add('preloader__showing');
    setTimeout(function(){
        pl.classList.remove('preloader__showing');
    }, 100);
}

// preloader on load page
window.onload = () => {
    hidePreloader();
};


/* POPUP (MODAL) WINDOW */

// show modal
// parameter: modalName (popup element id)
const showModal = (modalName) => {
    let modalDiv = document.querySelector('#' + modalName);
    let modal = bootstrap.Modal.getOrCreateInstance(modalDiv);
    modal.show();
}

//hide modal
// parameter: modalName (popup element id)
const hideModal = (modalName) => {
    let modalDiv = document.querySelector('#' + modalName);
    let modal = bootstrap.Modal.getOrCreateInstance(modalDiv);
    modal.hide();
}


// show popup information about user with preloader
document.querySelector('.user-name').addEventListener('click', (e) => { 
    showPreloader();
    setTimeout(function(){
        hidePreloader();
        showModal('infoUser');
    }, 500);
});


// show popup on user exit
document.querySelector('.user__exit').addEventListener('click', (e) => {
    showModal('exitUser');
});




$(document).ready(function () {



    let table1 = $('#tso_table').DataTable({
    	language: {
            url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/ru.json'
        },
        scrollY: '500px',
        scrollX: true,
        scrollCollapse: true,
        stateSave: true,
        paging: false,
        info: false,
        select: true,
        searchBuilder: {
	        depthLimit: 1
	    },
        buttons: [
            'colvis',
            {
            	extend: 'searchBuilder',
            	config: {
                    depthLimit: 1
                }
            }
        ],

        dom: 'Brt'
        
    });

    //обработка события на двойной клик по строке
    $('#tso_table tbody').on('dblclick', 'tr', function () {
        let data1 = table1.row(this).data();
        alert('You clicked on ' + data1[0] + " row");
    });


    // привязка события выгрузки данных таблицы в excel на кнопку с классом bttn-excel-export
    $('.bttn-excel-export').click(() => {
        $('#tso_table').DataTable().buttons('.buttons-excelHtml5').trigger();
    })
});
