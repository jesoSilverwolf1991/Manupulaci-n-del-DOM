document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dynamic-form');
    const dynamicFieldsContainer = document.getElementById('dynamic-fields');
    const addFieldButton = document.getElementById('add-field-btn');

    addFieldButton.addEventListener('click', function () {
        addDynamicField();
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitForm();
    });

    function addDynamicField() {
        const newField = document.createElement('div');
        newField.classList.add('form-row');

        const label = document.createElement('label');
        label.textContent = 'Campo Dinámico:';
        const input = document.createElement('input');
        input.type = 'text';
        input.name = 'dynamicField[]'; 
        newField.appendChild(label);
        newField.appendChild(input);

        dynamicFieldsContainer.appendChild(newField);
    }

    function submitForm() {
       
        console.log('Form submitted!');
    }
});

  