window.addEventListener('DOMContentLoaded', () => {
' use strict';


let year = 2020,
    month = 6,
    now = new Date(year, month),
    firstDay = now.getDay();

console.log(firstDay);

 function lastDayOfMonth (year, month) {
    let date = new Date(year, (month + 1), 0);
    return date.getDate();
}

let spaceDays = [];
if (firstDay > 1 && firstDay <8) {
    for (let i = 0; i < firstDay - 1; i++) {
        spaceDays[i] = 'x';
    }
} else if (firstDay == 0) {
    for (let i = 0; i < 6; i++) {
        spaceDays[i] = 'x';
    }
}
console.log(spaceDays);

let  daysOfMonth = [];
for (let i = 0; i < lastDayOfMonth(year, month) ; i++) {
    daysOfMonth[i]= i + 1;
}

console.log(daysOfMonth);

let calendarArr = [];
calendarArr = spaceDays.concat(daysOfMonth);
console.log(calendarArr);



// let table = document.createElement('table'),
//     tr = table.appendChild(document.createElement('tbody')).appendChild(document.createElement('tr'));
// for (let i = 1; i < lastDayOfMonth(year, month); i++) {
//     tr.appendChild(document.createElement('td'));
//}




    
  
    let div = document.createElement('div');
    div.className = "days";
    div.innerHTML = " ' ПН '   ' ВТ '   ' СР '   ' ЧТ '   ' ПТ '   ' СБ '   ' ВС '  ";
    document.body.append(div);

    let div2 = document.createElement('div2');
    div2.className = "calendar";
    div2.innerHTML = calendarArr;
    document.body.append(div2);

  
    // ставит не более 7-ми в ряд 
    // function sevenRow() {
    //     let m = [];
    //     while (daysOfMonth.length > 1) {
    //         m.push(daysOfMonth.slice(0, 7));
    //         daysOfMonth = daysOfMonth.slice(7);
    //     }
    //     m.push(daysOfMonth);

    //     console.log(m.join('\n'));  
    // }
   // console.log(sevenRow());
    

});