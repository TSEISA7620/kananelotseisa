
alert("hello now");

const btnop1 = document.querySelector(".op-1");
const btnop2 = document.querySelector(".op-2");
const btnop3 = document.querySelector(".op-3");
const op1Text = document.getElementById("op-1-text");
const op2Text = document.getElementById("op-2-text");
const op3Text = document.getElementById("op-3-text");
btnop1.onclick = () => {
    op1Text.style.display = "block";
    op2Text.style.display = "none";
    op3Text.style.display = "none";
    btnop1.style.borderLeft = "3px solid #1f0000";
    btnop1.style.color="#1f0000";
    btnop2.style.color="#fff";
    btnop3.style.color="#fff";
    btnop2.style.borderLeft = "none";
    btnop3.style.borderLeft = "none";
}

btnop2.onclick = () => {
    op1Text.style.display = "none";
    op2Text.style.display = "block";
    op3Text.style.display = "none";
    btnop1.style.borderLeft = "none";
    btnop2.style.borderLeft = "3px solid #1f0000";
    btnop1.style.color="#fff";
    btnop2.style.color="#1f0000";
    btnop3.style.color="#fff";
    btnop3.style.borderLeft = "none";
}

btnop3.onclick = () => {
    op1Text.style.display = "none";
    op2Text.style.display = "none";
    op3Text.style.display = "block";
    btnop1.style.borderLeft = "none";
    btnop2.style.borderLeft = "none";
    btnop3.style.borderLeft = "3px solid #1f0000";
    btnop1.style.color="#fff";
    btnop2.style.color="#fff";
    btnop3.style.color="#1f0000";
}

