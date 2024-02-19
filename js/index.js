// scrole down the page when click the buy ticket button 
function buyTicket(){
    const section = document.getElementById('buyTicket');
    if (section){
        section.scrollIntoView({behavior: 'smooth'});
    }
}


