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
function addChangeTicketValue(increment, classOfTicket, ticketPrice, grandTotalPrice) {
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


// Creating Handle for first class Ticket increment 
const firstClassIncrementBtn = document.getElementById('first-class-increment');
firstClassIncrementBtn.addEventListener('click', function () {
    const ticketRate = 150;
    addChangeTicketValue(true, 'first-class-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for first Ticket class decrement 
const firstClassDecrementBtn = document.getElementById('first-class-decrement');
firstClassDecrementBtn.addEventListener('click', function () {
    const ticketRate = 150;
    addChangeTicketValue(false, 'first-class-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for economy Ticket increment 
const economyIncrementBtn = document.getElementById('economy-increment');
economyIncrementBtn.addEventListener('click', function () {
    const ticketRate = 100;
    addChangeTicketValue(true, 'economy-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for economy Ticket decrement 
const economyDecrementBtn = document.getElementById('economy-decrement');
economyDecrementBtn.addEventListener('click', function () {
    const ticketRate = 100;
    addChangeTicketValue(false, 'economy-ticket-count', ticketRate, 'grand-total');
});


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