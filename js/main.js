//base
for (let i=1; i<=100; i++) {
    if ((i % 3 == 0)&& (i % 5 == 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }

document.getElementById("squareContainer").innerHTML += `
        <div class="square">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${i}</p>
         </div>
    `;
}