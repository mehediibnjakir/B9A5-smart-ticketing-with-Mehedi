

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

// seat by 
const allSeat = document.getElementsByClassName('addSeat');
let count = 0;
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count = count + 1;

        const ticketPrice = 550;

        //call selected inner text
        setInnerText('seat-count', count);
        //call function selected seats
        selectedSeat(e)

        // call function update total cost
        updateTotalCost('total-cost', ticketPrice);
        //call grand total update cost
        grandTotalCost('grand-total', ticketPrice);


    })
}




// update grand total cost

function grandTotalCost(id, value) {
    const grandTotal = document.getElementById(id).innerText;
    const convertedTotal = parseInt(grandTotal);
    const sum2 = convertedTotal + parseInt(value);
    setInnerText(id, sum2);
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
    setInnerText(id, sum)
}




// setInner text function
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}