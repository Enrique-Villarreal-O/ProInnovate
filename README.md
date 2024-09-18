# Gestión de Contactos usando JavaScript y DOM

**Due Date:** Sep 17, 2024

## Project Description

This project involves creating a contact management application using JavaScript and DOM manipulation. The application allows users to add, edit, and delete contacts through a simple web interface.

## Requirements

### 1. Initial HTML Structure

- A form with the following elements:
  - Text input field for entering the contact's **name**.
  - Button to **add** the contact.
- An empty list where created contacts will be displayed.

### 2. Application Functionalities

#### 2.1 Add Contacts
- When a user enters a name in the text field and clicks the "Add" button, the contact should appear in the list.
- Each contact in the list should have an **Edit** button and a **Delete** button.

#### 2.2 Delete Contacts
- Clicking the "Delete" button next to a contact should remove it from the list.

#### 2.3 Edit Contacts
- Clicking the "Edit" button should make the contact name editable.
- A "Save" button (replacing "Edit") should update the contact in the list with the new name.

## Technical Requirements

### 1. DOM Manipulation
- Use JavaScript to create, modify, and delete elements in the contact list (e.g., `document.createElement()`, `appendChild()`, `removeChild()`).

### 2. Event Handling
- Use **event listeners** (`addEventListener`) to add interactivity to the "Add", "Delete", and "Edit" buttons.

### 3. Validation
- Ensure the text field is not empty before adding a contact.
- Avoid duplicates in the contact list.

## Implementation Suggestions

1. Use an unordered list (`<ul>`) or similar container to display contacts.
2. Each contact should be within a `<li>` element with "Edit" and "Delete" buttons.
3. When "Edit" is clicked, change the `<li>` content to make the name editable.
4. Use CSS classes to style contacts, e.g., highlighting the contact being edited.

## Sample HTML Structure

```html
<div id="app">
  <h1>Gestión de Contactos</h1>

  <input type="text" id="contactName" placeholder="Ingresa nombre del contacto" />
  <button id="addContact">Agregar Contacto</button>

  <ul id="contactList">
    <!-- Contacts will appear here -->
  </ul>
</div>
