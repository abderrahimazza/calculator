let calcInput = document.querySelector("input"),
    result = document.querySelector(".result"),
    equal = document.querySelector(".equal"),
    btnRemove = document.querySelector(".remove"),
    allBtns = document.querySelectorAll(".btn"),
    btnClear = document.querySelector(".clear");

window.onload = function () {
    calcInput.focus();
}

allBtns.forEach(btn => {
    btn.onclick = function () {
        calcInput.value += this.textContent;
    }
});

calcInput.onkeypress = function () {
    calcInput.value = eval(calcInput.value);
}

equal.addEventListener("click", function () {
    calcInput.value = eval(calcInput.value);
})

btnClear.onclick = function () {
    calcInput.value = "";
}

btnRemove.onclick = function () {
    calcInput.value = calcInput.value.slice(0,-1);
}