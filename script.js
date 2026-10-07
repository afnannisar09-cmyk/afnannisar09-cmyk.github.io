function sayHello() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields!");
    } else {
        alert("Your message has been submitted successfully! 🚀");
    }
}
console.log("Portfolio website loaded!");
const text = "AI/ML Student & Beginner Web Developer";
let i = 0;

function typeText() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeText, 80);
    }
}

typeText();