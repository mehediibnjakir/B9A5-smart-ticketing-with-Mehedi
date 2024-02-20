// scrole down the page when click the buy ticket button 
function buyTicket() {
    const section = document.getElementById('buyTicket');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// seat by 
const allSeat = document.querySelectorAll('.addSeat');
let count = 0;
for (let seat of allSeat) {

    seat.addEventListener('click', function (e) {
        count = count + 1;

        //find the ticket price with id
        const tPrice = document.getElementById('ticket-Price').innerText;
        const ticketPrice = parseInt(tPrice);

        //total cost 
        const gTotal = document.getElementById('grand-total').innerText;
        const finalGrandTotal = parseInt(gTotal);



        //call selected inner text
        setInnerText('seat-count', count);

        if (count >= 5) {
            alert('Select 4 or less than 4 seats!');

            return;
        }



        toggleSeatSelection();
        //call function selected seats
        selectedSeat(e)

        addSeatBg(e)

        if (e.target.tagName === 'BUTTON') {
            // Toggle the selected state of the button
            e.target.classList.toggle('selected');
        }

        /*  if (e.target.tagName === 'BUTTON') { 
            e.target.disabled = true; 
         } */

        // call function update total cost
        updateTotalCost('total-cost', ticketPrice);
        //call grand total update cost
        grandTotalCost('grand-total', ticketPrice);

        // call coupon;

        applyButton(count)

    })



}

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

//function for apply button
function applyButton(count){
    if (count === 4){
        const btnApply =document.addEventListener('btn-apply');
        btnApply.disabled = false;
    }
}