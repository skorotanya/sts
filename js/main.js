

/*  PRELOADER */

// hide preloader
const hidePreloader = () => {
    const pl = document.querySelector('.preloader');
    pl.classList.add('preloader__hiding');
    setTimeout(function(){
        pl.classList.add('preloader__hide');
        pl.classList.remove('preloader__hiding');
    }, 500);
};


// show preloader
const showPreloader = () => {
    const pl = document.querySelector('.preloader');
    pl.classList.remove('preloader__hide');
    pl.classList.add('preloader__showing');
    setTimeout(function(){
        pl.classList.remove('preloader__showing');
    }, 100);
};



/* POPUP (MODAL) WINDOW */

// show modal
// parameter: modalName (popup element id)
const showModal = (modalName) => {
    let modalDiv = document.querySelector('#' + modalName);
    let modal = bootstrap.Modal.getOrCreateInstance(modalDiv);
    modal.show();
};

//hide modal
// parameter: modalName (popup element id)
const hideModal = (modalName) => {
    let modalDiv = document.querySelector('#' + modalName);
    let modal = bootstrap.Modal.getOrCreateInstance(modalDiv);
    modal.hide();
};


/* TABS */
/*
const triggerTabList = document.querySelectorAll('button[data-bs-toggle="tab"]');
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl);

  triggerEl.addEventListener('click', event => {
    event.preventDefault();
    showTab(tabTrigger);

  })
});


const showTab = (tabObj) => {
    console.log(tabObj)
    tabObj.show();
}*/


/* DATATABLES  */

 // default options for dataTable tables

$.extend( $.fn.dataTable.defaults, {
    scrollX: true,
    scrollCollapse: true,
    paging: false,
    info: false,
    language: {
        //url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/ru.json',
        searchBuilder: {
            title: {
                0: 'Конструктор поиска',
                _: 'Конструктор поиска (%d)'
            },
            button: {
                0: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>',
                _: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg><span class="filter-num">%d</span>'
            }
        }
    },
    
    buttons: [
        {
            extend:'colvis',
            text:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>',
            titleAttr: 'Видимость столбцов',
            className: 'bttn-square',
            columnText: function (dt, idx, title) {
                return dt.column(idx).header().innerText;
            }
        },
        {
            extend: 'searchBuilder',
            titleAttr: 'Конструктор поиска',
            className: 'bttn-filter',
            config: {
                depthLimit: 1
            }
        }
    ]
} );

// init table as DataTable by table id and named options set
// Available values of oType: 'simple-scroll', 'full', ...
const initDataTable = (tId, oType, height = '550px', colsDefs) => {
    let table;

    switch (oType) {
        case 'simple-scroll' : // simple table with scrolling
            table = $('#'+ tId).DataTable({
                scrollY: height,
                ordering: false,
                searching: false
            });
            break;
        case 'full' :
            table = $('#'+ tId).DataTable({
                scrollY: height,
                stateSave: true,
                select: true,
                orderCellsTop: true,
                fixedColumns: true,
                dom: 'Brt',
                initComplete: function () {
                    // Apply the search
                    this.api()
                        .columns()
                        .every(function () {
                            var that = this;
         
                            $('#' + tId +'_wrapper .filter-col-' + this.index()).on('keyup change clear', function () {
                                if (that.search() !== this.value) {
                                    that.search(this.value).draw();
                                }
                            });
                        });
                }
                
            });

            table.buttons().container().appendTo('.'+tId + '-buttons');
            break;
    }
};

const loadFilterFromState = (tId) => {
    let table = $('#'+tId).DataTable();
    let state = table.state.loaded();
    if(state) {
        table.columns().every( function (colIdx) {
            let colSearch = state.columns[colIdx].search;
            if (colSearch.search) {
                let filter = colSearch.search.replace(/[\^\$]/g,'');
                $('#' + tId +'_wrapper .filter-col-'+colIdx).val(filter);
            }
        });   
 
        table.draw();
    }
};

// adjust dataTable columns width by table id
//need call after table bacome visibile, example pass on tab or show modal window
const adjustColumns = (tId) => {
    let table = $('#'+tId).DataTable();
    table.columns.adjust().draw();
};

// execution all functions and addind eventListeners to page tables, defining in the 'pageTables' object
/*
    const pageTables = [
    {
      name: '<table id without "Table">', for example for table 'tsoTable' name equals 'tso',
      type: 'full' or 'simple-scroll'
      columns: [],
      modal: '<modal window id>',
      tab: true or false
      firstTab: true or false
    },...]
*/
const initPageTables = (pageTables) => {
    pageTables.forEach(tbl => { 
        let tblId = tbl.name + 'Table';
        initDataTable(tblId, tbl.type, tbl.height);
        if(tbl.type=='full') {
            loadFilterFromState(tblId);
        };
        if(tbl.modal =='' && tbl.firstTab) {
            adjustColumns(tblId);
        };
        if(tbl.tab) {
            // adjust table columns after showing tab for edit data
            let tabEl = document.querySelector('button[data-bs-target="#' + tbl.name + 'Tab"');
            tabEl.addEventListener('shown.bs.tab', event => {
                adjustColumns(tblId);
            });
        };
        if(tbl.modal !='' && tbl.firstTab) {
            // adjust table columns after showing modal window for edit data
            let mdlEl = document.getElementById(tbl.modal);
            mdlEl.addEventListener('shown.bs.modal', event => {
                adjustColumns(tblId);
            });
      };
    })
  }



/* COMMON EVENT LISTENERS FOR ALL PAGES */

// preloader on load page
window.onload = () => {
    hidePreloader();
};


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

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

