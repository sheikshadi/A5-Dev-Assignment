document.getElementById('btn1-completed').addEventListener('click', function(event) {
    event.preventDefault();
    const increment = document.getElementById('increment').innerText;
     const parseIncrement = parseInt(increment);
     parseIncrement --;
    //  console.log(parseIncrement)
})

document.getElementById('btn2-completed').style.display = 'disabled';