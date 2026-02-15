// Grab the button and the title from the HTML
const button = document.getElementById('action-btn');
const title = document.getElementById('main-title');

// Add a click event to the button
button.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Change the text based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        title.innerText = "Dark Mode Activated!";
    } else {
        title.innerText = "Welcome to My Website";
    }
});
