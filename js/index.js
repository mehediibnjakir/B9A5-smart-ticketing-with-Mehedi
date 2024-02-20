// scrole down the page when click the buy ticket button 
function buyTicket() {
    const section = document.getElementById('buyTicket');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// seat booked by addEventlistener
const allSeat = document.querySelectorAll('.addSeat');
let count = 0;

let countLess = 40;
for (let seat of allSeat) {

    seat.addEventListener('click', function (e) {
        count++;

        countLess--;

        //find the ticket price with id
        const tPrice = document.getElementById('ticket-Price').innerText;
        const ticketPrice = parseInt(tPrice);

        //total cost 
        const gTotal = document.getElementById('grand-total').innerText;
        const finalGrandTotal = parseInt(gTotal);

        // condition of 4 tickets
        if (count > 4) {
            alert('Select 4 or less than 4 seats!');
            return;
        }

        //call selected inner text
        setInnerText('seat-count', count);
        setInnerText('seat-less', countLess);

        //call function selected seats
        toggleSeatSelection();
        selectedSeat(e)
        addSeatBg(e)

        // call function update total cost
        updateTotalCost('total-cost', ticketPrice);
        //call grand total update cost
        grandTotalCost('grand-total', ticketPrice);

        //next button call
        checkTicketAndPhone(count, 'btnNext');




    })

}


// toggle section function
let index = [];

function toggleSeatSelection() {
    const element = document.querySelectorAll('.addSeat')[index];
    if (element) {
        if (element.classList.contains('selected')) {
            // If already selected, deselect it
            element.classList.remove('selected');
        } else {
            // If not selected, select it
            element.classList.add('selected');
        }
    } else {
        console.error('Element not found at index ' + index);
    }

}

//add background color and disable button 
function addSeatBg(e) {
    const element = e.target;
    element.classList.add('disabled:bg-green-600');
    element.classList.add('disabled:text-white');
    element.disabled = true;

}
//discount coupon apply


function applyCoupon(id, value) {
    const couponInput = document.getElementById(id).value;
    const grandTotal = 2200;
    const ticketCount = value;

    if (couponInput === 'NEW15' && ticketCount >= 4) {
        // Apply 15% discount for NEW15 coupon code
        const discount = grandTotal * 0.15;
        const newGt = grandTotal - discount;
        setInnerText('grand-total', newGt);
    } else if (couponInput === 'COUPLE20' && ticketCount >= 4) {
        // Apply 20% discount for COUPLE20 coupon code
        const discount = grandTotal * 0.20;
        const newGt = grandTotal - discount;
        setInnerText('grand-total', newGt);
    } else {
        // No coupon applied
        return grandTotal;
    }
}


//
const mNumber = document.getElementById('mobileNumber').value;
document.addEventListener('keyup', function (e) {

    //next button call
    checkTicketAndPhone(mNumber, 'btnNext');


})
//

function nextClick() {
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    section2.removeAttribute("hidden");
    section1.addAttribute("hidden");
}


