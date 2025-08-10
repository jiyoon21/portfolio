let checkForm = () => {
    let sethour = document.getElementById("sethour").value;
    let setmin = document.getElementById("setmin").value;
    
    let numHour = parseInt(sethour);//hour user have typed in
    let numMin = parseInt(setmin);//minute user have typed in

    // display results at boxes with id res1-6
    let res1 = document.getElementById("res1");
    let res2 = document.getElementById("res2");
    let res3 = document.getElementById("res3");
    let res4 = document.getElementById("res4");
    let res5 = document.getElementById("res5");
    let res6 = document.getElementById("res6");

    // Hour is multiplied by 60 to get total minutes 
    let getMin = (numHour * 60)+numMin;//hour+minute

    //This adds minutes of different 90 min sleep cycles + 15 minutes to time set 
    let cycle1 = getMin - 105;//90+15
    let cycle2 = getMin - 195;//180+15
    let cycle3 = getMin - 285;//270+15
    let cycle4 = getMin - 375;//360+15
    let cycle5 = getMin - 465;//450+15
    let cycle6 = getMin - 555;//540+15

    //to get integer numbers of hours 
    let snum1 = cycle1 / 60;
    let snum2 = cycle2 / 60;
    let snum3 = cycle3 / 60;
    let snum4 = cycle4 / 60;
    let snum5 = cycle5 / 60;
    let snum6 = cycle6 / 60;

    //get decimal numbers of hours  
    let hour1 = Math.floor(cycle1 / 60);
    let hour2 = Math.floor(cycle2 / 60);
    let hour3 = Math.floor(cycle3 / 60);
    let hour4 = Math.floor(cycle4 / 60);
    let hour5 = Math.floor(cycle5 / 60);
    let hour6 = Math.floor(cycle6 / 60);
   
    //// get minutes 
    let min1 = Math.round((hour1 - snum1) * 60);
    let min2 = Math.round((hour2 - snum2) * 60);
    let min3 = Math.round((hour3 - snum3) * 60);
    let min4 = Math.round((hour4 - snum4) * 60);
    let min5 = Math.round((hour5 - snum5) * 60);
    let min6 = Math.round((hour6 - snum6) * 60);

    ////This adjust numbers smaller than 0 fit to 24 hour system
    let rhour1;
    if (hour1 < 0) {
        rhour1 = Math.floor(hour1 + 24);
    } else if (hour1 == 0) {
        rhour1 = Math.floor(hour1 + 12);
    } else {
        rhour1 = hour1;
    }
    let rhour2;
    if (hour2 < 0) {
        rhour2 = Math.floor(hour2 + 24);
    } else if (hour2 == 0) {
        rhour2 = Math.floor(hour2 + 12);
    } else {
        rhour2 = hour2;
    }
    let rhour3;
    if (hour3 < 0) {
        rhour3 = Math.floor(hour3 + 24);
    } else if (hour3 == 0) {
        rhour3 = Math.floor(hour3 + 12);
    } else {
        rhour3 = hour3;
    }
    let rhour4;
    if (hour4 < 0) {
        rhour4 = Math.floor(hour4 + 24);
    } else if (hour4 == 0) {
        rhour4 = Math.floor(hour4 + 12);
    } else {
        rhour4 = hour4;
    }
    let rhour5;
    if (hour5 < 0) {
        rhour5 = Math.floor(hour5 + 24);
    } else if(hour5 == 0) {
        rhour5 = Math.floor(hour5 + 12);
    } else {
        rhour5 = hour5;
    }
    let rhour6;
    if (hour6 < 0) {
        rhour6 = Math.floor(hour6 + 24);
    } else if (hour6 == 0) {
        Math.floor(hour6 = 0)
    } else {
        rhour6 = hour6;
    }

    //turn - numbers into + numbers
    let rmin1 = min1 * -1;
    let rmin2 = min2 * -1;
    let rmin3 = min3 * -1;
    let rmin4 = min4 * -1;
    let rmin5 = min5 * -1;
    let rmin6 = min6 * -1;

    let text1 = rhour1 + " : " + rmin1;
    let text2 = rhour2 + " : " + rmin2;
    let text3 = rhour3 + " : " + rmin3;
    let text4 = rhour4 + " : " + rmin4;
    let text5 = rhour5 + " : " + rmin5;
    let text6 = rhour6 + " : " + rmin6;



    res1.innerHTML = text1;
    res2.innerHTML = text2;
    res3.innerHTML = text3;
    res4.innerHTML = text4;
    res5.innerHTML = text5;
    res6.innerHTML = text6;


}
