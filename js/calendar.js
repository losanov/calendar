window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let year = document.getElementById('year'),
        btn = document.getElementById('button');

    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

    btn.addEventListener('click', function () {
        if (year.value != '' && year.value > 0 && year.value <= 9999) {
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = "выберте месяц";
            document.body.append(div);

            btn.className = "hide-btn";

            let monthDiv = document.createElement('div');
            monthDiv.className = "month-div";
            document.body.append(monthDiv);


            let getMonths = function () {
                for (let i = 0; i < 12; i++) {

                    let monthButton = document.createElement('button');
                    monthButton.className = "button-month";
                    monthButton.innerHTML = `${months[i]}`;
                    document.body.append(monthButton);
                    //document.body.monthDiv.appendChild(monthButton);
                }
            };
            getMonths();

            let monthButton = document.querySelectorAll('button-month');
          
            document.body.addEventListener('click', function (event) {
                for (let i = 0; i < months.length; i++) {
                    if (event.target && event.target.tagName == 'BUTTON' && event.target.classList.contains('button-month')) {
                        
                        console.log(event.target.innerHTML);
                        
                        let monthNumber = function() {
                            for (let i = 0; i < months.length; i++) {
                                if (event.target.innerHTML == months[i]) {
                                    let t=i+1;
                                    console.log(i+1);
                                }
                            }
                        };
                        monthNumber();
                        
                        break;
                    }
                }
                
            });
            
            
            




        } else {
            year.value = '';
            alert('попробуй ещё');
        }
    });

  


});