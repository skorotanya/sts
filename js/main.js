



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

//show message window
// parameters: message - message text
//             type - message type ['info'(default), 'success', 'fault']
const showMessage = (message, type = 'info') => {
    let messageDiv = document.querySelector('#infoMessage .border-block');
    let messageType = messageDiv.classList[1];
    if (messageType != type) {
        messageDiv.classList.remove(messageType);
        messageDiv.classList.add(type);
    }
    let messageText = messageDiv.lastElementChild.innerText = message;
    showModal('infoMessage');
}


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
    fixedColumns: true,
    language: {
        //url: 'https://cdn.datatables.net/plug-ins/1.13.1/i18n/ru.json',
        searchBuilder: {
            "conditions": {
                "string": {
                    "startsWith": "начинается с",
                    "contains": "содержит",
                    "empty": "пусто",
                    "endsWith": "заканчивается на",
                    "equals": "равно",
                    "not": "не",
                    "notEmpty": "не пусто",
                    "notContains": "не содержит",
                    "notStartsWith": "не начинается на",
                    "notEndsWith": "не заканчивается на"
                },
                "date": {
                    "after": "после",
                    "before": "до",
                    "between": "между",
                    "empty": "пусто",
                    "equals": "равно",
                    "not": "не",
                    "notBetween": "не между",
                    "notEmpty": "не пусто"
                },
                "number": {
                    "empty": "пусто",
                    "equals": "равно",
                    "gt": "больше чем",
                    "gte": "больше или равно чем",
                    "lt": "меньше чем",
                    "lte": "меньше или равно чем",
                    "not": "не",
                    "notEmpty": "не пусто",
                    "between": "между",
                    "notBetween": "не между"
                },
                "array": {
                    "equals": "равно",
                    "empty": "пусто",
                    "contains": "содержит",
                    "not": "не равно",
                    "notEmpty": "не пусто",
                    "without": "не содержит"
                }
            },
            title: {
                0: 'Конструктор поиска',
                _: 'Конструктор поиска (%d)'
            },
            button: {
                0: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>',
                _: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M35.4 87.12l168.65 196.44A16.07 16.07 0 01208 294v119.32a7.93 7.93 0 005.39 7.59l80.15 26.67A7.94 7.94 0 00304 440V294a16.07 16.07 0 014-10.44L476.6 87.12A14 14 0 00466 64H46.05A14 14 0 0035.4 87.12z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg><span class="filter-num">%d</span>'
            },
            add: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>Добавить условие</title><path fill="#5f2fe7" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg>',
            condition: 'Условие',
            clearAll: 'Отменить всё',
            delete: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><title>Удалить условие</title><path fill="#e72f73" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z"/></svg>',
            data: 'Столбец',
            logicAnd: 'и',
            logicOr: 'или',
            value: 'Значение',
            valueJoiner: 'и'
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
const initDataTable = (tId, oType, height = '55vh', colsDefs) => {
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
        case 'scroll-colvis' : // simple table with scrolling and adjusting visible columns
            table = $('#'+ tId).DataTable({
                scrollY: height,
                ordering: false,
                searching: false,
                stateSave: true,
                searchBuilder: null,
                dom: 'Brt'
            });
            //console.log(table.buttons().pop());
            //console.log(table.buttons().container().children()[1]);
            table.buttons().container().children()[1].remove();
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
    let table = $('#' + tId).DataTable();
    table.columns.adjust().draw();
    //console.log("Adjust table '" + tId + "'")
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
       
        if(tbl.tab) {
            // adjust table columns after showing tab for edit data
            let tabEl = document.querySelector('button[data-bs-target="#' + tbl.name + 'Tab"');
            tabEl.addEventListener('shown.bs.tab', event => {
                adjustColumns(tblId);
            });
        };
        if(tbl.modal =='' && tbl.firstTab) {
            adjustColumns(tblId);
        };
        if(tbl.accordionId && tbl.accordionId !='') {
            // adjust table columns after showing tab for edit data
            let accEl = document.querySelector('#' + tbl.accordionId);
            accEl.addEventListener('shown.bs.collapse', event => {
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
  };

  const setEnableElements = (checkId, type='check', radioName) => {
    let selector;
    if(type=='check'){
        selector = '#'+checkId;
    } else if(type=='radio'){
        selector = `input[name='${radioName}']`;
    }

    $(selector).on('change', function () {
        let check;
        if(type=='check'){
            check = this.checked;
        } else if(type=='radio'){
            check = $('#'+checkId)[0].checked;
        }
        
        $('.' + checkId).each(function(){
          if($(this).hasClass('selectpicker')) {
            setDisabledSelect(this,!check);
           // $(this).prop('disabled', !check);
           // $(this).selectpicker('destroy');
          //  $(this).selectpicker();
           // $(this).addClass('selectpicker');
          }
          else {
            this.disabled = !check;
          }
          
        });
    });
  };
  // select -  HTMLElement <select>!!! not JQuery object
  const setDisabledSelect = (select, value) => {
    //console.log(typeof select);

    let jqSelect = $(select);
    jqSelect.prop('disabled', value);
    jqSelect.selectpicker('destroy');
    jqSelect.selectpicker();
    jqSelect.addClass('selectpicker');
  }


  // Functions for work with form's tooltips


 $.fn.showErrorTooltip = function() {
    let el = $(this);
      if(el.hasClass('data-value')){
        el.addClass('tooltip-show');
      }
   };

 $.fn.hideErrorTooltip = function() {
    let el = $(this);
      if(el.hasClass('data-value')){
        el.removeClass('tooltip-show');
        el.setErrorText(); // Возвращаем тексту значение по умолчанию
      }
   };

$.fn.setErrorText = function(errText) {
    let el = $(this);
    let tooltip = el.next('.invalid-tooltip.error');
    
    if(el.hasClass('data-value') && tooltip !== null) {
        let tooltipObj = bootstrap.Tooltip.getInstance(tooltip);
        errText = errText!==undefined?errText:tooltip.attr('data-bs-title'); // если текста нет, то берём его изначальное значение из элемента DOM
        tooltipObj.setContent({ '.tooltip-inner': errText }); // меняем текст непосредственно у объекта bootstrap
        
    }
   };

/* COMMON EVENT LISTENERS FOR ALL PAGES */

// preloader on load page
window.onload = () => {
    hidePreloader();

    // show popup information about user with preloader
    const userBtn = document.querySelector('.user-name');

    if(userBtn) {userBtn.addEventListener('click', (e) => { 
        showPreloader();
        setTimeout(function(){
            hidePreloader();
            showModal('infoUser');
        }, 500);
    });}

    // show popup on user exit
    const userExit = document.querySelector('.user__exit');
    if(userExit) {userExit.addEventListener('click', (e) => {
        showModal('exitUser');
    });}

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));


    // ajust placement colVis and searchBuilder dropdown panes
    document.querySelectorAll('.table-buttons button').forEach((el) => {el.addEventListener('click', (e) => {
        
       let pop = document.querySelector('.table-buttons .dt-button-collection');
       let buttonBox = el.getBoundingClientRect();
       let availBottom = window.innerHeight - buttonBox.top - el.offsetHeight;
        pop.style.marginTop = "0px";
        pop.style.right = window.innerWidth - buttonBox.right + "px";

        if(pop.offsetHeight < availBottom) {
            pop.style.top = buttonBox.bottom + "px";
        }
        else {
            pop.style.top = buttonBox.top - pop.offsetHeight + "px";
        }
    })
    });

 // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  // Loop over them and prevent submission
  //console.log(forms.length);
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
     if (!form.checkValidity()) {
        event.preventDefault(false);
        event.stopPropagation();
      }

      form.classList.add('is-validated');

      //console.log(event);
      if(form.classList.contains('form-row')) {
        event.submitter.closest('tr').classList.add('is-validated');
      }

    }, false);
  });


};







