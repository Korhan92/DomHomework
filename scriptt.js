let count = document.getElementById("count");
let increase = document.getElementById("plus");
let reduce = document.getElementById("minus");
let square = document.getElementById("square");
let squareRoot = document.getElementById("sqrt");
let inputNumb = document.getElementById("number");
let defaultNum = 0;
count.innerHTML = defaultNum;
inputNumb.addEventListener("input", function (e) {
    const inputValue = Number(e.target.value);
    count.innerHTML = inputValue;
    defaultNum = inputValue;
})
const minus = () => {
    defaultNum--
    count.innerHTML = defaultNum;
}
const plus = () => {
    defaultNum++
    count.innerHTML = defaultNum;
}
const squareNum = () => {
    defaultNum = defaultNum**2
    count.innerHTML = defaultNum;
}
const rootOfNumber = () => {
    defaultNum = Math.sqrt(defaultNum)
    count.innerHTML = defaultNum;
}
increase.addEventListener("click", plus);
reduce.addEventListener("click", minus)
square.addEventListener("click", squareNum)
squareRoot.addEventListener("click", rootOfNumber)

