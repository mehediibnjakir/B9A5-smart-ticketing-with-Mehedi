

//Select a random seat 
// let allSeat = [''];

// function selectSeat(seatId) {
//     const seatIndex = allSeat.indexOf(seatId);
//     if (seatIndex === -1) {
//         // If seat is not already selected, add it to the array
//         allSeat.push(seatId);
//         document.getElementById(seatId).classList.add('selected');
//     } else {
//         // If seat is already selected, remove it from the array
//         allSeat.splice(seatIndex, 1);
//         document.getElementById(seatId).classList.remove('selected');
//     }
// }






//check cupon code 

function checkCupon(){

}



// update grand total cost

function grandTotalCost(id, value) {
    const grandTotal = document.getElementById(id).innerText;
    const convertedTotal = parseInt(grandTotal);
    const sum2 = convertedTotal + parseInt(value);
    setInnerText(id, sum2);
}




function applyCoupon(id, value) {
    const couponInput = document.getElementById(id).value;
    const grandTotal = 2200;

    const ticketCount = value;

    if (couponInput === 'NEW15' && ticketCount >= 4) {
        // Apply 15% discount for NEW15 coupon code
        const discount = grandTotal * 0.15;
        return grandTotal - discount;
    } else if (couponInput === 'COUPLE20' && ticketCount >= 4) {
        // Apply 20% discount for COUPLE20 coupon code
        const discount = grandTotal * 0.20;
        return grandTotal - discount;
    } else {
        // No coupon applied
        return grandTotal;
    }
}

//function for selected seat 

function selectedSeat(e) {
    const seatNumber = e.target.innerText;
    const seatFear = 550;
    const seatClass = 'Economy';

    const selectedConatiner = document.getElementById('selected-ticket-container')

    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = seatNumber;
    const p1 = document.createElement('p');
    p1.innerText = seatClass;
    const p2 = document.createElement('p');
    p2.innerText = seatFear;

    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);

    selectedConatiner.appendChild(div)
}

// function for total cost

function updateTotalCost(id,value) {
    const totalCost = document.getElementById(id).innerText;
    const convertedTotal = parseInt(totalCost);
    const sum = convertedTotal + value;
    setInnerText(id, sum);
}


// setInner text function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}



//hide some section;
// function next(){
//     const mainSec = document.getElementById('mainSec');
// mainSec.classList.add('hidden');

//     const mainSec = document.getElementById('subMainSec');
// mainSec.classList.remove('hidden');

// }

// function hideElementById(elementId){
//     const elemt = 
// }




