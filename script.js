const rangeinput = document.querySelectorAll(".range-input input"),
progress =document.querySelector(".slider .progress-"):

rangeinput.forEach(input => {
    input.addEventListener("input", () =>
        {
            // getting two ranges value and parasing them to numbre 
            let minval = parseInt(rangeinput[0].value),
            maxval = parseInt(rangeinput[1].value);

            progress.style.left = (minval / rangeinput[0].max) * 100 + "%";
        });
});