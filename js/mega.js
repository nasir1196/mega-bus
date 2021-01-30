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


// Creating Handle for first class increment 
const firstClassIncrementBtn = document.getElementById('first-class-increment');
firstClassIncrementBtn.addEventListener('click', function () {
    const ticketRate = 150;
    addChangeTicketValue(true, 'first-class-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for first class decrement 
const firstClassDecrementBtn = document.getElementById('first-class-decrement');
firstClassDecrementBtn.addEventListener('click', function () {
    const ticketRate = 150;
    addChangeTicketValue(false, 'first-class-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for economy increment 
const economyIncrementBtn = document.getElementById('economy-increment');
economyIncrementBtn.addEventListener('click', function () {
    const ticketRate = 100;
    addChangeTicketValue(true, 'economy-ticket-count', ticketRate, 'grand-total');
});


// Creating Handle for economy decrement 
const economyDecrementBtn = document.getElementById('economy-decrement');
economyDecrementBtn.addEventListener('click', function () {
    const ticketRate = 100;
    addChangeTicketValue(false, 'economy-ticket-count', ticketRate, 'grand-total');
});



        //Working File
        // // Creating Handle for first class increment 
        // const firstClassIncrementBtn = document.getElementById('first-class-increment');
        // firstClassIncrementBtn.addEventListener('click', function () {
        //     const ticketRate = 150;
        //     addChangeTicketValue(true, 'first-class-ticket-count', ticketRate, 'grand-total')
        //     const ticketCount = document.getElementById('first-class-ticket-count');
        //     const countTicket = parseInt(ticketCount.value);
        //     const countNewTicket = countTicket + 1;
        //     ticketCount.value = countNewTicket;
        //     const totalCountTicket = countNewTicket * 150;
        //     const subTotal = document.getElementById('sub-total').innerText = totalCountTicket;
        //     const tax = Math.round(subTotal * 0.1);
        //     const totalTax = document.getElementById('total-tax').innerText = tax;
        //     const grandTotal = subTotal + totalTax;
        //     document.getElementById('grand-total').innerText = grandTotal;
        // })

        // // Creating Handle for first class decrement 
        // const firstClassDecrementBtn = document.getElementById('first-class-decrement');
        // firstClassDecrementBtn.addEventListener('click', function () {
        //     const ticketRate = 150;
        //     addChangeTicketValue(false, 'first-class-ticket-count', ticketRate, 'grand-total')
        //     const ticketCount = document.getElementById('first-class-ticket-count');
        //     const countTicket = parseInt(ticketCount.value);
        //     const countNewTicket = countTicket - 1;
        //     ticketCount.value = countNewTicket;
        //     const totalCountTicket = countNewTicket * 150;
        //     const subTotal = document.getElementById('sub-total').innerText = totalCountTicket;
        //     const tax = Math.round(subTotal * 0.1);
        //     const totalTax = document.getElementById('total-tax').innerText = tax;
        //     const grandTotal = subTotal + totalTax;
        //     document.getElementById('grand-total').innerText = grandTotal;
        // })

        // // Creating Handle for economy increment 
        // const economyIncrementBtn = document.getElementById('economy-increment');
        // economyIncrementBtn.addEventListener('click', function () {
        //     const ticketRate = 100;
        //     addChangeTicketValue(true, 'economy-ticket-count', ticketRate, 'grand-total')
        //     const ticketCount = document.getElementById('economy-ticket-count');
        //     const countTicket = parseInt(ticketCount.value);
        //     const countNewTicket = countTicket + 1;
        //     ticketCount.value = countNewTicket;
        //     const totalCountTicket = countNewTicket * 100;
        //     const subTotal = document.getElementById('sub-total').innerText = totalCountTicket;
        //     const tax = Math.round(subTotal * 0.1);
        //     const totalTax = document.getElementById('total-tax').innerText = tax;
        //     const grandTotal = subTotal + totalTax;
        //     document.getElementById('grand-total').innerText = grandTotal;
        // })

        // // Creating Handle for economy decrement 
        // const economyDecrementBtn = document.getElementById('economy-decrement');
        // economyDecrementBtn.addEventListener('click', function () {
        //     const ticketRate = 100;
        //     addChangeTicketValue(false, 'economy-ticket-count', ticketRate, 'grand-total')
        //     const ticketCount = document.getElementById('economy-ticket-count');
        //     const countTicket = parseInt(ticketCount.value);
        //     const countNewTicket = countTicket - 1;
        //     ticketCount.value = countNewTicket;
        //     const totalCountTicket = countNewTicket * 100;
        //     const subTotal = document.getElementById('sub-total').innerText = totalCountTicket;
        //     const tax = Math.round(subTotal * 0.1);
        //     const totalTax = document.getElementById('total-tax').innerText = tax;
        //     const grandTotal = subTotal + totalTax;
        //     document.getElementById('grand-total').innerText = grandTotal;
        // })

// crate handler for submit area 
const bookNow=document.getElementById('book-now');
bookNow.addEventListener('click',function(){
    const buyArea=document.getElementById('buy-area');
    buyArea.style.display='none';
    const submitArea=document.getElementById('submit-area');
    submitArea.style.display='block';


    const firstClassTicketCount = getTicketValue('first-class-ticket-count');
    const economyTicketCount = getTicketValue('economy-ticket-count');
    const totalTicketValue = firstClassTicketCount * 150 + economyTicketCount * 100;

    const countSubTotal = document.getElementById('sub-total').innerText = totalTicketValue;
    const tax = Math.round(countSubTotal * 0.1);
    const totalTax = document.getElementById('total-tax').innerText = tax;

    const grandTotal = totalTicketValue + totalTax;
    const purchase=document.getElementById('grand-total').innerText = grandTotal;
    document.getElementById('purchase').innerText=purchase;
})


