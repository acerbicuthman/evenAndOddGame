function numberCheck() {
    const input = document.getElementById("input");
    const result = document.querySelector(".Result")

    let number = parseFloat(input.value);

    if(isNaN(number)) {
        result.innerHTML = "Enter a valid Number"
        return;
    }
    
    if (number % 2 === 0){
        result.innerHTML = number + " is an even Number"
    }
    else {
        result.innerHTML = number + " is an odd number"
    }
    return
    
}
