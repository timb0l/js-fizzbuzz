//main
// for (let i=1; i<=100; i++) {
//     if ((i % 3 == 0)&& (i % 5 == 0)) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }


//extra

for (let i=1; i<=100; i++) {
        let bgColor = ""
        let result = i
    if ((i % 3 == 0)&& (i % 5 == 0)) {
        bgColor = "bg-warning";
        content ="FizzBuzz";
    } else if (i % 3 == 0) {
        bgColor = "bg-danger";
        content ="Fizz";
    } else if (i % 5 == 0) {
        bgColor = "bg-secondary";
        content ="Buzz";
    }
    document.getElementById('squareContainer').innerHTML += 
    `
        <div class="square ${bgColor}">
            <p class="text-center text-white fs-3 fw-3 vertical-align-square">${result}</p>
         </div>
    `;
}