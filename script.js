document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the form from submitting normally
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// currently any information gathered here does not go anywhere 
// You could send this information to a .txt file but that requires PHP server code 
// A template of that code is found can be found online if you are curious 
// Note that PHP is another language 
