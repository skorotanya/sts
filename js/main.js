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



    let table = $('#tso_table').DataTable({
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
        language: {
            searchBuilder: {
                title: {
                    0: 'Конструктор поиска',
                    _: 'Конструктор поиска (%d)'
                },
                button: {
                    0: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>',
                    _: '<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg><span class="filter-num">(%d)</span>'
                }
            }
        },
        
        buttons: [
            {
                extend:'colvis',
                text:'<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>',
                titleAttr: 'Видимость столбцов'
            },
            {
            	extend: 'searchBuilder',
                titleAttr: 'Конструктор поиска',
            	config: {
                    depthLimit: 1
                }
            }
        ],

        dom: 'Brt'
        
    });

    table.buttons().container().appendTo('.buttons-right');

    //обработка события на двойной клик по строке
    $('#tso_table tbody').on('dblclick', 'tr', function () {
        let data1 = table.row(this).data();
        alert('You clicked on ' + data1[0] + " row");
    });
});
