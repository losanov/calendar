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

                        let monthNumber = function () {
                            for (let i = 0; i < months.length; i++) {
                                if (event.target.innerHTML == months[i]) {
                                    console.log(i + 1);
                                    return (i);
                                }
                            }
                        };
                        monthNumber();

                        let year = document.getElementById('year'),
                            month = monthNumber(),
                            now = new Date(year.value, month),
                            firstDay = now.getDay();

                        console.log(firstDay);

                        let lastDayOfMonth = function (year, month) {
                            let date = new Date(year.value, (month + 1), 0);
                            return date.getDate();
                        };

                        let spaceDays = [];
                        if (firstDay > 1 && firstDay < 8) {
                            for (let i = 0; i < firstDay - 1; i++) {
                                spaceDays[i] = 'x';
                            }
                        } else if (firstDay == 0) {
                            for (let i = 0; i < 6; i++) {
                                spaceDays[i] = 'x';
                            }
                        }
                        console.log(spaceDays);

                        let daysOfMonth = [];
                        for (let i = 0; i < lastDayOfMonth(year, month); i++) {
                            daysOfMonth[i] = i + 1;
                        }

                        console.log(daysOfMonth);

                        let calendarArr = [];
                        calendarArr = spaceDays.concat(daysOfMonth);
                        console.log(calendarArr);

                        //monthNumber();

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