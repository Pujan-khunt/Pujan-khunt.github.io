// General
const main = document.querySelector('#main');
const tickets = JSON.parse(localStorage.getItem('ticketsDB')) || [];
let ticketColor = 'bg-blue-500'; // default global color for ticket
init();


// Initializations
function init() {
    tickets.forEach(function(ticketData) {
        createTicket(ticketData.ticketColor, ticketData.ticketId, ticketData.ticketTask);
    })
}


// Modal Pop-up
const modal = document.querySelector('#modal');
const addBtn = document.querySelector('#add-ticket-btn');
const plus = addBtn.children[0];
let modalFlag = false;

addBtn.addEventListener('click', toggleModal);

function toggleModal() {
    modalFlag = !modalFlag;
    
    if(modalFlag) {
        modal.classList.add('grid');
        modal.classList.remove('hidden');
        plus.classList.add('text-black');
        plus.classList.remove('text-neutral-500');
        addBtn.classList.add('bg-green-600');
    } else {
        modal.classList.remove('grid');
        modal.classList.add('hidden');
        plus.classList.remove('text-black');
        plus.classList.add('text-neutral-500');
        addBtn.classList.remove('bg-green-600');
    }
}


// Ticket Removal Flag Changer
const delBtn = document.querySelector('#remove-ticket-btn');
const trash = delBtn.children[0];
let deleteFlag = false;

delBtn.addEventListener('click', function() {
    deleteFlag = !deleteFlag;
    
    if(deleteFlag) {
        alert('Delete Mode Activated');
        delBtn.classList.add('bg-red-600');
        trash.classList.add('text-black');
        
    } else {
        delBtn.classList.remove('bg-red-600');
        trash.classList.remove('text-black');
    }
})



// Modal Closer (not saving ticket)
const closeModalBtn = document.querySelector('#close-modal');

closeModalBtn.addEventListener('click', toggleModal);



// Get Data From Modal on Shift + Enter
const taskarea = document.querySelector('textarea');

modal.addEventListener('keydown', function(e) {
    if(!(e.shiftKey && e.key === 'Enter')) return;
    
    const priorityColor = ticketColor;
    const id = shortid(); 
    const task = taskarea.value;
    taskarea.value = '';
    
    createTicket(priorityColor, id, task);
    
    tickets.push({
        ticketColor: priorityColor,
        ticketId: id,
        ticketTask: task
    }) 
    
    updateLocalStorage();
    
    // Close the already open modal to view the newly created ticket.
    toggleModal();
})



// Creating Ticket and Putting it on the DOM.
function createTicket(color, id, task) {
    const ticket = document.createElement('div');
    ticket.setAttribute('id', 'ticket-cont');
    ticket.setAttribute('class', 'flex justify-center mt-12');
    ticket.innerHTML = `
    <div id="ticket" class="w-64 h-72 relative">
    <div id="priority-color" class="w-full h-12 ${color}"></div>
    <div id="id" class="w-full flex justify-center h-8 bg-yellow-300">${id}</div>
    <div id="task" class="w-full h-52 bg-orange-600 overflow-y-auto">${task}</div>
    <i id="editable" class="fa-regular fa-pen-to-square absolute right-2 bottom-1 text-3xl"></i>
    </div>
    `
    
    main.appendChild(ticket);
    
    // Utilities
    handleRemoval(ticket, id);
    handleEditable(ticket, id);
    handlePriorityColor(ticket, id);
}



// Ticket Index Finder in Array
function getTicketIdx(id) {
    return tickets.findIndex(function(ticket) {
        return ticket.ticketId === id;
    })
}



// Actual Ticket Remover from the DOM.
function handleRemoval(ticket, id) {
    ticket.addEventListener('click', function() {
        if(!deleteFlag) return;
        
        // Removing ticket from DOM.
        ticket.remove();
        
        // Removing ticket from Array
        tickets.splice(getTicketIdx(id), 1);

        updateLocalStorage();
    })
}



// Change settings for task to be editable
function handleEditable(ticket, id) {
    const taskCont = ticket.querySelector('#task');
    const editable = ticket.querySelector('#editable');
    let editableFlag = false;
    
    editable.addEventListener('click', function() {
        editableFlag = !editableFlag;

        if(editableFlag) {
            taskCont.contentEditable = true;
            editable.classList.add('text-red-700');
        } else {
            taskCont.contentEditable = false;
            editable.classList.remove('text-red-700');
        }

        // update task in database
        const arrIdx = getTicketIdx(id);
        tickets[arrIdx].ticketTask = taskCont.innerText;
        
        updateLocalStorage();
    })

}



// Change Priority Color After Ticket Has Been Created.
const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-black'];

function handlePriorityColor(ticket, id) {
    const priorityColorCont = ticket.querySelector('#priority-color');
    
    priorityColorCont.addEventListener('click', function() {
        // Current Color and Index
        const currColor = priorityColorCont.classList[2];
        const currIdx = colors.findIndex(function(color) {
            return color === currColor;
        })
        
        // New Color and New Index
        const newIdx = (currIdx + 1) % colors.length;
        const newColor = colors[newIdx];

        // make changes in the array
        const arrIdx = getTicketIdx(id);
        tickets[arrIdx].ticketColor = newColor;
        
        priorityColorCont.classList.remove(currColor);
        priorityColorCont.classList.add(newColor);

        updateLocalStorage();
    })    

}



// Filter Tickets According To Color
const filterColors = document.querySelectorAll('.filter-color');

filterColors.forEach(function(color) {
    // Click on any filter color to see tickets having only that color.
    color.addEventListener('click', function() {
        const allTickets = document.querySelectorAll('#ticket-cont');   
        const selectedColor = color.classList[3];
        
        allTickets.forEach(function(ticket) {
            const currTicketColor = ticket.children[0].children[0].classList[2];
            
            if(currTicketColor === selectedColor) {
                ticket.classList.remove('hidden');
            } else {
                ticket.classList.add('hidden');
            }
        })
    })
    
    
    // Double Click To See All Tickets
    color.addEventListener('dblclick', function() {
        const allTickets = document.querySelectorAll('#ticket-cont');
        allTickets.forEach(function(ticket) {
            ticket.classList.remove('hidden');
        })
    })
})



// Select Ticket Color While Creating It From Modal.
const modalColors = document.querySelectorAll('.modal-color');

modalColors.forEach(function(color) {
    color.addEventListener('click', function() {
        // update the global ticketcolor to selected color
        ticketColor = color.classList[3];
        
        // remove border for all modal colors
        modalColors.forEach(function(clr){ 
            clr.classList.remove('border-4');
            clr.classList.remove('border-white');
        })
        
        // adding border color for the selected color
        color.classList.add('border-4');
        color.classList.add('border-white');
    })
})



function updateLocalStorage() {
    localStorage.setItem('ticketsDB', JSON.stringify(tickets));
}
