// scrole down the page when click the buy ticket button 
function buyTicket() {
    const section = document.getElementById('buyTicket');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


// seat by 
const allSeat = document.getElementsByClassName('addSeat');
let count = 0;
for (const seat of allSeat) {
    
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

        //call function selected seats
        selectedSeat(e)

        

        // call function update total cost
        updateTotalCost('total-cost', ticketPrice);
        //call grand total update cost
        grandTotalCost('grand-total', ticketPrice);

        // call coupon;



    })



}


