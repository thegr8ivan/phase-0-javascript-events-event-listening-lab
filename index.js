function addingEventListener() {
    // Select the button element
    const myButton = document.getElementById('myButton');
    
    // Define the event handler function
    function handleButtonClick() {
        alert('Button was clicked!');
    }
    
    // Attach the event listener to the button
    myButton.addEventListener('click', handleButtonClick);
}

// Call the function to add the event listener
addingEventListener();
