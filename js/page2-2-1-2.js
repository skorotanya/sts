$(document).ready(function () {


    // javascript functions for current page

    // change load status
    /* Available status values: 'wait', 'process', 'success', 'fault'*/
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
    };



     // init dataTables on current page

    // init main table
    initDataTable('loadTable', 'full');
    adjustColumns('loadTable');
});

