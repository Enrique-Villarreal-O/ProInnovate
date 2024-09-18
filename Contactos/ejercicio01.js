// Seleccionar elementos del DOM
const contactNameInput = document.getElementById('contactName');
const addContactButton = document.getElementById('addContact');
const contactList = document.getElementById('contactList');
const contactCount = document.createElement('div'); // Nuevo elemento para el contador
contactCount.id = 'contactCount';
document.getElementById('app').appendChild(contactCount); // Agregar el contador al DOM

// Array para almacenar los contactos
let contacts = [];

// Cargar contactos desde localStorage
function loadContacts() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        contacts = JSON.parse(storedContacts);
        sortContacts(); // Ordenar contactos al cargar
        renderContacts();
    }
}

// Guardar contactos en localStorage
function saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Función para agregar un contacto
function addContact() {
    const name = contactNameInput.value.trim();
    if (name && !contacts.includes(name)) {
        contacts.push(name);
        sortContacts(); // Ordenar después de agregar
        saveContacts();
        renderContacts();
        contactNameInput.value = '';
    } else if (contacts.includes(name)) {
        alert('Este contacto ya existe en la lista.');
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

// Función para ordenar contactos alfabéticamente
function sortContacts() {
    contacts.sort((a, b) => a.localeCompare(b));
}

// Función para renderizar la lista de contactos
function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contact}</span>
            <button class="edit" data-index="${index}">Editar</button>
            <button class="delete" data-index="${index}">Eliminar</button>
        `;
        contactList.appendChild(li);
    });
    updateContactCount();
}

// Función para actualizar el contador de contactos
function updateContactCount() {
    contactCount.textContent = `Total de contactos: ${contacts.length}`;
}

// Función para eliminar un contacto
function deleteContact(index) {
    contacts.splice(index, 1);
    saveContacts();
    renderContacts();
}

// Función para editar un contacto
function editContact(index) {
    const li = contactList.children[index];
    const span = li.querySelector('span');
    const editButton = li.querySelector('.edit');
    
    if (editButton.textContent === 'Editar') {
        span.contentEditable = true;
        span.focus();
        editButton.textContent = 'Guardar';
    } else {
        const newName = span.textContent.trim();
        if (newName && !contacts.includes(newName)) {
            contacts[index] = newName;
            span.contentEditable = false;
            editButton.textContent = 'Editar';
            sortContacts(); // Ordenar después de editar
            saveContacts();
            renderContacts();
        } else if (contacts.includes(newName)) {
            alert('Este contacto ya existe en la lista.');
            span.textContent = contacts[index];
            span.contentEditable = false;
            editButton.textContent = 'Editar';
        } else {
            alert('Por favor, ingrese un nombre válido.');
            span.textContent = contacts[index];
            span.contentEditable = false;
            editButton.textContent = 'Editar';
        }
    }
}

// Event listener para agregar contacto
addContactButton.addEventListener('click', addContact);

// Event listener para el enter en el input
contactNameInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addContact();
    }
});

// Event delegation para editar y eliminar contactos
contactList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        const index = e.target.getAttribute('data-index');
        deleteContact(index);
    } else if (e.target.classList.contains('edit')) {
        const index = e.target.getAttribute('data-index');
        editContact(index);
    }
});

// Cargar contactos al iniciar la página
loadContacts();