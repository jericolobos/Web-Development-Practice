// My solutions for Exercise #3
// I tried to write clear comments so I can understand this later when studying

// ACTIVITY 1: Change Background Color
// When the user clicks the button, background turns a premium light blue

const colorBtn = document.getElementById('colorBtn');

colorBtn.addEventListener('click', function() {
    // Upgraded: Instead of hardcoded inline styles, we update the CSS variables
    // This keeps the premium look intact and ensures transitions remain smooth
    document.body.style.setProperty('--bg-main', '#e0f2fe'); // Soft premium blue
    document.body.style.setProperty('--text-main', '#0f172a');
    
    console.log('Background changed to premium light blue!');
});

// ACTIVITY 2: Dark Mode Toggle
// This button switches between light and dark mode

const darkModeBtn = document.getElementById('darkModeBtn');
let isDarkMode = false;  // Starting with light mode

darkModeBtn.addEventListener('click', function() {
    if (isDarkMode === false) {
        // Upgraded: We removed the inline styles because the premium CSS 
        // body.dark-mode class already handles all the color changes perfectly!
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = 'Switch to Light Mode';
        isDarkMode = true;
        console.log('Dark mode enabled');
    } else {
        document.body.classList.remove('dark-mode');
        
        // Reset the Activity 1 background color if it was active
        document.body.style.removeProperty('--bg-main');
        document.body.style.removeProperty('--text-main');
        
        darkModeBtn.textContent = 'Switch to Dark Mode';
        isDarkMode = false;
        console.log('Light mode enabled');
    }
});

// ACTIVITY 3: Add List Items
// Each click adds a new item to the list

const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
let listItemNumber = 2;  // Starting from 2 because we have 1 default item

addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Dynamic item ' + listItemNumber;
    itemList.appendChild(newItem);
    listItemNumber++;
    console.log('Added item: ' + newItem.textContent);
});

// ACTIVITY 4: Remove a Paragraph
// Removes paragraphs one at a time

const removeParaBtn = document.getElementById('removeParaBtn');
const paragraphs = document.getElementsByClassName('removable');

removeParaBtn.addEventListener('click', function() {
    if (paragraphs.length > 0) {
        paragraphs[paragraphs.length - 1].remove();
        console.log('Removed a paragraph. ' + paragraphs.length + ' remaining');
    } else {
        alert('No more paragraphs to remove!');
        console.log('All paragraphs have been removed');
    }
});

// ACTIVITY 5: Character Counter
// Counts characters in real-time as the user types

const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', function() {
    const currentText = textInput.value;
    const length = currentText.length;
    
    charCount.textContent = length;
    
    // Upgraded: Uses the premium CSS variables for colors instead of basic red/orange
    if (length > 20) {
        charCount.style.color = 'var(--danger)'; 
        charCount.style.backgroundColor = '#ffe4e6'; // Soft red background warning
    } else {
        charCount.style.color = 'var(--primary)'; 
        charCount.style.backgroundColor = 'var(--primary-light)'; 
    }
});

// ACTIVITY 6: Addition Calculator
// Takes two numbers and displays their sum

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const resultSpan = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    const firstNumber = parseFloat(num1Input.value) || 0;
    const secondNumber = parseFloat(num2Input.value) || 0;
    
    const sum = firstNumber + secondNumber;
    
    resultSpan.textContent = sum;
    console.log('Calculated: ' + firstNumber + ' + ' + secondNumber + ' = ' + sum);
});

// ============================================
// ACTIVITY 7: Change Image
// Toggles between two different images
// ============================================

const changeImageBtn = document.getElementById('changeImageBtn');
const myImage = document.getElementById('myImage');
let imageIndex = 1;  // Start with image 1

changeImageBtn.addEventListener('click', function() {
    if (imageIndex === 1) {
        myImage.src = 'secondpic.jpg';
        myImage.alt = 'Random Image 2';
        imageIndex = 2;
        console.log('Switched to image 2');
    } else {
        myImage.src = 'firstpic.jpg';
        myImage.alt = 'Random Image 1';
        imageIndex = 1;
        console.log('Switched to image 1');
    }
});

// ACTIVITY 8: Mini To-Do List
// Add tasks with delete buttons

const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

function setupDeleteButton(deleteButton, listItem) {
    deleteButton.addEventListener('click', function() {
        listItem.remove();  
        console.log('Task deleted');
    });
}

const defaultDeleteButtons = document.querySelectorAll('.delete-btn');
const defaultListItems = todoList.children;

for (let i = 0; i < defaultDeleteButtons.length; i++) {
    setupDeleteButton(defaultDeleteButtons[i], defaultListItems[i]);
}

addTodoBtn.addEventListener('click', function() {
    const taskText = todoInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const newListItem = document.createElement('li');
    newListItem.textContent = taskText + ' ';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';  
    
    setupDeleteButton(deleteBtn, newListItem);
    newListItem.appendChild(deleteBtn);
    todoList.appendChild(newListItem);
    
    todoInput.value = '';
    console.log('Added new task: ' + taskText);
});

todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoBtn.click();  
    }
});