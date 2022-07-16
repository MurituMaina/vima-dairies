// // var firstName = " VIncent"
// // console.log(firstName);

// Function overtime price for period
// let selling_price = 45;
//document.getElementById("price").innerHTML = selling_price;
// let time = 12;
//document.getElementById("days").innerHTML = time;


// function incomeOverTime() {
//     var time = document.getElementById("days").innerHTML;
//     var selling_price = document.getElementById("price").innerHTML;
//     if (time > 0) {
//         let total = selling_price * time;
//         return total;
//         document.getElementById("income").innerHTML = total;

//     } else {
//         document.getElementById("income").innerHTML = ("Input all variables!!");
//     }
// }
// incomeOverTime();

// selling_price = document.getElementsById("selling_price");
// time = document.getElementsById("time");
// let incomeOverTime = (selling_price, time) => selling_price * time;
// incomeOverTime() = document.getElementById("income").innerHTML;

// const destroy = "Am working!@";

// // console.log(destroy);
// document.getElementById("new").innerHTML = destroy;
// // document.getElementById("new").innerHTML = 10 + 7;

// document.getElementById("new").innerHTML = destroy;
// const price = parseInt(prompt('Enter Milk produced '));
// document.getElementById("new").innerHTML = destroy;
// const time = parseInt(prompt('Enter the  number of Days sold was sold'));
// const milkProduction = price * time;
// document.getElementById("new").innerHTML = milkProduction;


// function totalProduction()


// // declare milk price with const if no change is expected.
let sheds = ["shed A", "Shed B", "Shed C", "Shed D"]
let production = 0;

function totalProduction(production) {
    // sp-is shed production daily
    for (sp = 0; sp <= sheds.length; sp++) {
        if (sp == sheds[0]) {
            var shedA = parseInt(document.getElementById("shedA").value);

            return "Your Production of Shed A" + shedA + " litres per day.";
        } else if (sp == sheds[1]) {
            var shedB = parseInt(document.getElementById("shedB").value);
            return "Your Production of Shed B" + shedB + " litres per day.";
        } else if (sp == sheds[2]) {
            var shedC = parseInt(document.getElementById("shedC").value);
            return "Your Production of Shed C" + shedC + " litres per day.";

        } else if (sp == sheds[3]) {
            var shedD = parseInt(document.getElementById("shedD").value);
            return "Your Production of Shed D" + shedD + " litres per day.";
        }
    }
    production = shedA + shedB + shedC + shedD;
    console.log(production);
    return production;
    // document.getElementById("milkPerShed").innerHTML = production;
}

// document.getElementById("milkPerShed") = totalProduction();