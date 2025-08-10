let temp = document.getElementById("temp");
let reliance = document.getElementById("reliance");
let turbine = document.getElementById("turbine");
let btn = document.getElementById("btn");


var counting = -1;

var plusNum;
let tempResult = ["Scorching","Bolling", "Hot", "Warm","Balmy","Mild"];
let relianceArray = [100, 80, 60, 40, 20, 0];
    btn.onclick = function () {
        counting++;

        if (counting < 6) {
            let string = counting.toString();
            console.log(counting);
            turbine.innerHTML = string;
            temp.innerHTML = tempResult[counting];
            reliance.innerHTML = relianceArray[counting];
        } else if(counting >= 6) {
btn.innerHTML = "Task Completed";
            btn.addEventListener('click', function(event) {
    window.location.href='ending.html';
  });
        }else {
            let string = counting.toString();

            turbine.innerHTML = "5";
            temp.innerHTML = "Good";
            reliance.innerHTML = "0";

        }

    }
