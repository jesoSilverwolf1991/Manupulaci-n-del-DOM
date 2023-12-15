document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar-container');
    const selectedDateElement = document.getElementById('selected-date');
    const bookBtn = document.getElementById('book-btn');
    const bookingsList = document.getElementById('bookings-list');

    let selectedDate = null;
    let bookings = [];

   
    for (let i = 1; i <= 31; i++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        dateElement.textContent = i;
        dateElement.addEventListener('click', () => selectDate(i));
        calendarContainer.appendChild(dateElement);
    }

   
    function selectDate(date) {
        selectedDate = date;
        selectedDateElement.textContent = `Fecha seleccionada: ${date}`;
    }

   
    function book() {
        if (selectedDate !== null) {
            const booking = {
                date: selectedDate,
                time: new Date().toLocaleTimeString()
            };

            bookings.push(booking);
            updateBookingsList();
            clearSelection();
        } else {
            alert('Selecciona una fecha antes de reservar.');
        }
    }

    
    function updateBookingsList() {
        bookingsList.innerHTML = '';
        bookings.forEach(booking => {
            const bookingItem = document.createElement('li');
            bookingItem.classList.add('booking');
            bookingItem.textContent = `Fecha: ${booking.date}, Hora: ${booking.time}`;
            bookingsList.appendChild(bookingItem);
        });
    }

   
    function clearSelection() {
        selectedDate = null;
        selectedDateElement.textContent = 'Fecha seleccionada: Ninguna';
    }

    
    bookBtn.addEventListener('click', book);
});
