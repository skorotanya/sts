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


// show popup on user exit
document.querySelector('.bttn-load-data').addEventListener('click', (e) => {

    showModal('loadData');

});

const changeLoadStatus = (status) => {
    let statusDiv = document.querySelector('.load-status');
    switch (status) {
        case "wait" :
            statusDiv.classList.remove('process', 'success', 'fault');
            statusDiv.classList.add('wait');
            statusDiv.textContent = "Ожидание загрузки";
            break;
        case "process" : 
            statusDiv.classList.remove('wait', 'success', 'fault');
            statusDiv.classList.add('process');
            statusDiv.textContent = "Выполняется загрузка";
            break;
        case "success" :
            statusDiv.classList.remove('wait', 'process', 'fault');
            statusDiv.classList.add('success');
            statusDiv.textContent = "Загрузка выполнена";
            break;
        case "fault" : 
            statusDiv.classList.remove('wait', 'process', 'success');
            statusDiv.classList.add('fault');
            statusDiv.textContent = "Загрузка не удалась";
            break;
    }
}



