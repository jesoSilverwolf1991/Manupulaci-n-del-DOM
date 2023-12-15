document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('table-body');
    const addRowButton = document.getElementById('add-row-btn');

    addRowButton.addEventListener('click', function () {
        addTableRow();
    });

    tableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-row-btn')) {
            deleteTableRow(event.target.closest('tr'));
        }
    });

    function addTableRow() {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" name="name[]" required></td>
            <td><input type="number" name="age[]" required></td>
            <td><button class="delete-row-btn">Eliminar</button></td>
        `;

        tableBody.appendChild(newRow);
    }

    function deleteTableRow(row) {
        tableBody.removeChild(row);
    }
});
