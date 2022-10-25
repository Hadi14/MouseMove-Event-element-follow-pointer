const btn = document.querySelector('button');
const lbl = document.querySelector('.lbl');
const timer = document.querySelector('.timer');
const div2 = document.querySelector('.div2');
const txta = document.querySelector('#txta');


// let min = prompt("Enter Minute:");
// let sec = prompt("Enter sec:");
// alert(Number(min));

// btn.addEventListener('click', () => {
//     div2.classList.toggle("hide");
// })

// btn.addEventListener('contextmenu', () => {
//     return false;
//     // console.log("R click");
// })

// const img = document.getElementById('imgs');
// document.body.addEventListener('mousemove', (event) => {
//     // console.log(event);
//     lbl.innerHTML = event.pageX + "px & " + event.pageY + "px";
//     // lbl.innerHTML += "ok";
//     img.left = event.pageY;
//     img.top = event.pageX;
// })
document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let circle = document.getElementById('imgs');
    let left = e.offsetX;
    let top = e.offsetY;
    circle.style.left = left + 'px';
    circle.style.top = top + 'px';
});
// setInterval(() => {
//     min = Number(min);
//     sec = Number(sec);

//     if (sec < 0) {
//         min--;
//         sec = 59;
//     }

//     if (min < 10)
//         min = "0" + min;
//     if (sec < 10)
//         sec = "0" + sec;

//     timer.innerHTML = min + ":" + sec;
//     sec--;
// }, 1000)
txta.addEventListener('select', (event) => {
    console.log(event)
    var start = txta.selectionStart;

    // Obtain the index of the last selected character
    var finish = txta.selectionEnd;

    // Obtain the selected text
    var sel = txta.value.substring(start, finish);
    console.log("🚀 ~ file: password.js ~ line 54 ~ txta.addEventListener ~ sel", sel)
})
