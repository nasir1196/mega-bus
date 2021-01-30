//set the ticket initial value
function getTicketValue(ticket) {
    const ticketValue = document.getElementById(ticket);
    const countTicketValue = parseInt(ticketValue.value);
    return countTicketValue;
}


// Calculate total ticket
function totalTicketCalculate() {
    const firstClassTicketCount = getTicketValue('first-class-ticket-count');
    const economyTicketCount = getTicketValue('economy-ticket-count');
    const totalTicketValue = firstClassTicketCount * 150 + economyTicketCount * 100;

    const countSubTotal = document.getElementById('sub-total').innerText = totalTicketValue;
    const tax = Math.round(countSubTotal * 0.1);
    const totalTax = document.getElementById('total-tax').innerText = tax;

    const grandTotal = totalTicketValue + totalTax;
    document.getElementById('grand-total').innerText = grandTotal;
}


// Total Ticket value
function addChangeTicketValue(increment, classOfTicket) {
    const ticketCount = document.getElementById(classOfTicket);
    const countTicket = parseInt(ticketCount.value);
    let countNewTicket = countTicket;
    if (increment == true) {
        countNewTicket = countTicket + 1;
    }
    if (increment == false && countTicket > 0) {
        countNewTicket = countTicket - 1;
    }
    ticketCount.value = countNewTicket;
    totalTicketCalculate();
}


// crate handler function for submit area 
function submitTicket() {
    const firstClassTicketCount = getTicketValue('first-class-ticket-count');
    const economyTicketCount = getTicketValue('economy-ticket-count');
    const totalTicketValue = firstClassTicketCount * 150 + economyTicketCount * 100;

    const countSubTotal = document.getElementById('sub-total').innerText = totalTicketValue;
    const tax = Math.round(countSubTotal * 0.1);
    const totalTax = document.getElementById('total-tax').innerText = tax;

    const grandTotal = totalTicketValue + totalTax;
    const purchase = document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('purchase').innerText = purchase;
}

//Handler Function Design
function getSubmit() {
    const buyArea = document.getElementById('buy-area');
    buyArea.style.display = 'none';
    const submitArea = document.getElementById('submit-area');
    submitArea.style.display = 'block';
}

//Create Submit Handler for Submit Area
const bookNow = document.getElementById('book-now');
bookNow.addEventListener('click', function () {
    getSubmit();
    submitTicket();
});

//Closing Here!