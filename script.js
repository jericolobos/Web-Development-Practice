// My solutions for Exercise #3
// I tried to write clear comments so I can understand this later when studying

// ACTIVITY 1: Change Background Color
// When the user clicks the button, background turns light blue

// First, I need to get the button element from the HTML
const colorBtn = document.getElementById('colorBtn');

// Adding an event listener to detect when the button is clicked
colorBtn.addEventListener('click', function() {
    // This code runs when the button is clicked
    // Changing the body's background color to light blue
    document.body.style.backgroundColor = 'lightblue';
    // I also want to make sure text stays readable
    document.body.style.color = 'black';
    
    // Small console message to check if it's working
    console.log('Background changed to light blue!');
});

// ACTIVITY 2: Dark Mode Toggle
// This button switches between light and dark mode

const darkModeBtn = document.getElementById('darkModeBtn');
// I need a variable to track whether dark mode is on or off
let isDarkMode = false;  // Starting with light mode

darkModeBtn.addEventListener('click', function() {
    // Checking the current state
    if (isDarkMode === false) {
        // If dark mode is off, turn it on
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = 'white';
        // Adding a class for additional CSS styling
        document.body.classList.add('dark-mode');
        // Update button text to show current mode
        darkModeBtn.textContent = 'Switch to Light Mode';
        // Update our tracking variable
        isDarkMode = true;
        console.log('Dark mode enabled');
    } else {
        // If dark mode is on, turn it off
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.body.classList.remove('dark-mode');
        darkModeBtn.textContent = 'Switch to Dark Mode';
        isDarkMode = false;
        console.log('Light mode enabled');
    }
});

// ACTIVITY 3: Add List Items
// Each click adds a new item to the list

const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
// I'll use a counter to number the items
let listItemNumber = 2;  // Starting from 2 because we have 1 default item

addItemBtn.addEventListener('click', function() {
    // Creating a new list item element
    const newItem = document.createElement('li');
    
    // Setting the text content
    newItem.textContent = 'Dynamic item ' + listItemNumber;
    
    // Adding the new item to the list
    itemList.appendChild(newItem);
    
    // Increment the counter for next time
    listItemNumber++;
    
    console.log('Added item: ' + newItem.textContent);
});

// ACTIVITY 4: Remove a Paragraph
// Removes paragraphs one at a time

const removeParaBtn = document.getElementById('removeParaBtn');
// I want to get all paragraphs with class 'removable'
const paragraphs = document.getElementsByClassName('removable');

removeParaBtn.addEventListener('click', function() {
    // Check if there are any paragraphs left
    if (paragraphs.length > 0) {
        // Remove the last paragraph in the collection
        // I'm using [paragraphs.length - 1] to get the last one
        paragraphs[paragraphs.length - 1].remove();
        console.log('Removed a paragraph. ' + paragraphs.length + ' remaining');
    } else {
        // No paragraphs left to remove
        alert('No more paragraphs to remove!');
        console.log('All paragraphs have been removed');
    }
});

// ACTIVITY 5: Character Counter
// Counts characters in real-time as the user types

const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

// Using 'input' event instead of 'click' because it triggers on every keystroke
textInput.addEventListener('input', function() {
    // Getting the current text and counting characters
    const currentText = textInput.value;
    const length = currentText.length;
    
    // Updating the display
    charCount.textContent = length;
    
    // Optional: Change color if too many characters
    if (length > 20) {
        charCount.style.color = 'red';
    } else {
        charCount.style.color = '#e67e22';  // Back to original orange color
    }
});

// ACTIVITY 6: Addition Calculator
// Takes two numbers and displays their sum

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const calculateBtn = document.getElementById('calculateBtn');
const resultSpan = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    // Getting values from inputs - they come as strings, so I need to convert them
    // Using parseFloat to handle decimal numbers
    const firstNumber = parseFloat(num1Input.value) || 0;
    const secondNumber = parseFloat(num2Input.value) || 0;
    
    // Calculate the sum
    const sum = firstNumber + secondNumber;
    
    // Display the result
    resultSpan.textContent = sum;
    
    console.log('Calculated: ' + firstNumber + ' + ' + secondNumber + ' = ' + sum);
});

// ============================================
// ACTIVITY 7: Change Image
// Toggles between two different images
// ============================================

const changeImageBtn = document.getElementById('changeImageBtn');
const myImage = document.getElementById('myImage');
// Track which image is currently showing
let imageIndex = 1;  // Start with image 1

changeImageBtn.addEventListener('click', function() {
    if (imageIndex === 1) {
        // Switch to image 2
        myImage.src = 'secondpic.jpg';
        myImage.alt = 'Random Image 2';
        imageIndex = 2;
        console.log('Switched to image 2');
    } else {
        // Switch back to image 1
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

// Function to handle deleting tasks
function setupDeleteButton(deleteButton, listItem) {
    deleteButton.addEventListener('click', function() {
        listItem.remove();  // Remove the entire list item
        console.log('Task deleted');
    });
}

// First, I need to set up delete buttons for the default tasks
const defaultDeleteButtons = document.querySelectorAll('.delete-btn');
const defaultListItems = todoList.children;

for (let i = 0; i < defaultDeleteButtons.length; i++) {
    setupDeleteButton(defaultDeleteButtons[i], defaultListItems[i]);
}

// Now handle adding new tasks
addTodoBtn.addEventListener('click', function() {
    // Get the task text and remove extra spaces
    const taskText = todoInput.value.trim();
    
    // Don't add empty tasks
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    // Create new list item
    const newListItem = document.createElement('li');
    newListItem.textContent = taskText + ' ';
    
    // Create delete button for this task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';  // Add the same class for styling
    
    // Set up the delete functionality
    setupDeleteButton(deleteBtn, newListItem);
    
    // Add delete button to the list item
    newListItem.appendChild(deleteBtn);
    
    // Add the new task to the list
    todoList.appendChild(newListItem);
    
    // Clear the input field for next task
    todoInput.value = '';
    
    console.log('Added new task: ' + taskText);
});

// Optional: Allow pressing Enter to add tasks
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodoBtn.click();  // Trigger the add button click
    }
});

// Quick note to myself:
// I need to make sure all my HTML elements have the right IDs
