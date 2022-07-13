/* Storing icons in variables */
let userIcon = document.querySelector('#user');
let creditIcon = document.querySelector("#credit");
let paymentIcon = document.querySelector("#paymentIcon");
let billingIcon = document.querySelector("#billingIcon");


/* Putting icon variables in an array */
let iconArray = [userIcon, creditIcon, paymentIcon, billingIcon];

/* Storing hidden divs in variables */
let personal = document.querySelector(".personalInfo");
let credit = document.querySelector(".creditAndInfo");
let payment = document.querySelector(".paymentPlan");
let billing = document.querySelector(".billingDiv");

/* Putting divs variables in array */
let divArray = [personal, credit, payment, billing];

/* Put the explanations in variables */
let expPersonal = document.querySelector('#explanationPersonal');
let expCredit = document.querySelector('#explanationCredit');
let expPayment = document.querySelector('#explanationPaymentPlan');
let expBilling = document.querySelector('#explanationBilling');

/* Put explanation variables in array*/
let explArray = [expPersonal, expCredit, expPayment, expBilling];

/* Declaring  variables that changes div displaying with the click on icons,
   and color of chosen icon */
let div = personal;
let icon = userIcon;
let exp = expPersonal;

/* Put Event listeners on icon variables */
userIcon.addEventListener('click', userFun);
creditIcon.addEventListener('click', creditFun);
paymentIcon.addEventListener('click', paymentFun);
billingIcon.addEventListener('click', billingFun);

/* Functions called with Event Listeners */
function userFun() {
    div = personal; // line 17 : 
    icon = userIcon; // line 2 :
    exp = expPersonal; // line 21 :
    showInfo(div, icon, exp);
};

function creditFun() {
    div = credit; // line 18 : 
    icon = creditIcon; // line 3 :
    exp = expCredit; // line 22 :
    showInfo(div, icon, exp);
};

function paymentFun() {
    div = payment; // line 19 : 
    icon = paymentIcon; // line 4 :
    exp = expPayment; // line 22 :
    showInfo(div, icon, exp);
};

function billingFun() {
    div = billing; // line 20 : 
    icon = billingIcon; // line 5 :
    exp = expBilling; // line 24 :
    showInfo(div, icon, exp);
}




/* Function that shows one div and hides others */
function showInfo(div, ico, exp) {

    /* Function that takes every array and every variable */
    function chosenInfo(array, show) {
        // filter array from chosen info
        let newArray = array.filter(x => x !== show);
        // show chosen info 
        show.style.display = "block";
        document.querySelector('.cancel').style.display = "none";
        for (let x of newArray) {
            // icons dont't disappear they change color
            if (array == iconArray && show == ico) {
              show.style.color = "#0db2f2";
            // other icon restarted to gray color
            for (let y of newArray) {
                y.style.color = "#808080";
            }
            }else {
            // everything else should disappear
            x.style.display = "none";
            };
            
        };
    };
// function with 
chosenInfo(iconArray, ico);
chosenInfo(divArray, div);
chosenInfo(explArray, exp);

};

/*---------------------------------When clicked on Cancel Subscription in Paymant plan */

// putting cancel div in a variable
let cancelVar = document.querySelector('.cancel');

// put Event Listener on button 
document.querySelector('.articleButtons').addEventListener('click', cancelFun);

// making function to display cancel div and hide others
function cancelFun() {
    if(cancelVar.style.display === "none") {
    payment.style.display = "none";
    cancelVar.style.display = "block";
    } else {
        payment.style.display = "block";
        cancelVar.style.display = "none";
    }
}

/* ----------------------------The cancle and confirm button in Cancel div */

document.querySelector('#cancelSub').addEventListener('click', cancelFun); // line : 113
document.querySelector('#confirmSub').addEventListener('click', anotherPage);

function anotherPage() {
    document.querySelector('#anotherPage').style.display = "block";
    document.querySelector('header').style.display = "none";
    document.querySelector('main').style.display = "none"
}




