function random() {
    let numbers = [];
    let min = Number(document.getElementById("min").value);
    let max = Number(document.getElementById("max").value);
    if (min > max) {
        alert("ERREUR! Value de min Dois Etre plus petite que value de max");
        document.getElementById("res").innerHTML = 0;
    }  else {
        for (let index = min; index <= max; index++) {
            const element = numbers.push(index);
        }
        let length = numbers.length;
        let winner = numbers[Math.floor(Math.random() * length)]
        document.getElementById('res').innerHTML = winner;
    }
    
}

// function random() {
//     let min = Number(document.getElementById("min").value);
//     let max = Number(document.getElementById("max").value);
//     let winner = Math.floor(Math.random() * (max - min) + 1) + min;
//     document.getElementById('res').innerHTML = winner;
// }