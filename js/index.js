// scrole down the page when click the buy ticket button 
function buyTicket(){
    const section = document.getElementById('buyTicket');
    if (section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}



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