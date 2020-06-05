window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let year = document.getElementById('year'),
        btn = document.getElementsByClassName('btn'),
        months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
        daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
        calendarArr = [];

    btn[0].addEventListener('click', function () {
        if (year.value != '' && year.value > 0 ) {
            let div = document.createElement('div');
            div.className = "alert";
            div.innerHTML = "выберте месяц";
            document.body.append(div);

            btn.className = "hide-btn";

            let monthDiv = document.createElement('div');
            monthDiv.className = "monthDiv";
            document.body.append(monthDiv);


            let getMonths = function () {
                for (let i = 0; i < 12; i++) {

                    let monthButton = document.createElement('button');
                    monthButton.className = "button-month";
                    monthButton.innerHTML = `${months[i]}`;
                    document.body.append(monthButton);
                    //document.monthDiv.appendChild(monthButton);

                }
            };
            getMonths();


            document.body.addEventListener('click', function (event) {
                for (let i = 0; i < months.length; i++) {
                    if (event.target && event.target.tagName == 'BUTTON' && event.target.classList.contains('button-month')) {

                        //console.log(event.target.innerHTML);

                        let monthButton = document.querySelectorAll('.button-month');
                        for (let i = 0; i < 12; i++) {
                            monthButton[i].classList.add("hide-btn");
                        }

                        // Что-то тут не так
                        let monthNumber = function () {
                            for (let i = 0; i < months.length; i++) {
                                if (event.target.innerHTML == months[i]) {
                                    //console.log(i + 1);
                                    return (i);
                                }
                            }
                        };
                        monthNumber();

                        let year = document.getElementById('year'),
                            month = monthNumber(),
                            now = new Date(year.value, month),
                            firstDay = now.getDay();

                        let div = document.createElement('div');
                        div.className = "inform";
                        div.innerHTML = `вы выбрали ${year.value} год, месяц ${months[month]}`;
                        document.body.append(div);


                        //console.log(firstDay);

                        let lastDayOfMonth = function (year, month) {
                            let date = new Date(year.value, (month + 1), 0);
                            return date.getDate();
                        };

                        let spaceDays = [];
                        if (firstDay > 1 && firstDay < 8) {
                            for (let i = 0; i < firstDay - 1; i++) {
                                spaceDays[i] = '-';
                            }
                        } else if (firstDay == 0) {
                            for (let i = 0; i < 6; i++) {
                                spaceDays[i] = '-';
                            }
                        }
                        //console.log(spaceDays);

                        let daysOfMonth = [];
                        for (let i = 0; i < lastDayOfMonth(year, month); i++) {
                            daysOfMonth[i] = i + 1;
                        }

                        //console.log(daysOfMonth);

                        calendarArr = spaceDays.concat(daysOfMonth);
                        //console.log(calendarArr);

                        getDays();

                        // document.createElement('div');
                        // monthDiv.className = "monthDiv";
                        // document.body.append(monthDiv);

                        getCalendar();

                        break;
                    }
                }

            });

        } else {
            year.value = '';
            alert('попробуй ещё');
        }

        let monthDiv = document.createElement('div');
        monthDiv.className = "monthDiv";
        document.body.append(monthDiv);

        function getDays() {
            for (let i = 0; i < daysOfWeek.length; i++) {

                let buttonDaysOfWeek = document.createElement('button');
                buttonDaysOfWeek.className = "days-of-week";
                buttonDaysOfWeek.innerHTML = `${daysOfWeek[i]}`;
                document.body.append(buttonDaysOfWeek);
            }
        }

        // не работает как надо перенос строки
        // function getCalendar() {
        //     for (let i = 0; i < calendarArr.length; i++) {
        //         if (i% 7 == 0) {
        //             document.createElement('div');
        //             monthDiv.className = "monthDiv";
        //             document.body.append(monthDiv);

        //             let buttonCalendarDay = document.createElement('button');
        //             buttonCalendarDay.className = "calendar-days-of-week";
        //             buttonCalendarDay.innerHTML = `${calendarArr[i]}`;
        //             document.body.append(buttonCalendarDay);

        //         } else {
        //             let buttonCalendarDay = document.createElement('button');
        //             buttonCalendarDay.className = "calendar-days-of-week";
        //             buttonCalendarDay.innerHTML = `${calendarArr[i]}`;
        //             document.body.append(buttonCalendarDay);
        //         }
        //     }
        // }

        function getCalendar() {
            for (let i = 0; i < calendarArr.length; i++) {

                let buttonCalendarDay = document.createElement('button');
                buttonCalendarDay.className = "calendar-days-of-week";
                buttonCalendarDay.innerHTML = `${calendarArr[i]}`;
                document.body.append(buttonCalendarDay);
            }
        }
    });

});