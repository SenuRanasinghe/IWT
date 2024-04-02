const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    allInput = form.getElementsByTagName('input');


const container = document.querySelector(".container");
const successPrompt = document.querySelector(".popup-content")

const countdownElement = document.getElementById('countdown');
let countdown = 5;


function updateCountdown() {
    countdownElement.textContent = countdown;

    if (countdown === 0) {
        window.location.href = '../HOME/homepage.html'; // Replace with your homepage URL
    } else {
        countdown--;
        setTimeout(updateCountdown, 1000); // Update every 1 second (1000 milliseconds)
    }
}


function checkEmpty() {
    for (let i = 0; i < allInput.length; i++) {
        if (allInput[i].value === '') {
            return true;
        }
    }
    return false;
}

nextBtn.addEventListener("click", (event)=> {
    let text = "Do you want to proceed ?";

        if (!checkEmpty()){
            if (confirm(text) === true) {
                container.style.opacity = "0";
                container.style.zIndex = "0";
                successPrompt.style.display = "block"
                updateCountdown();
            }else{
                event.preventDefault();
            }
        }
})




