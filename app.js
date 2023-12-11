(function () {
    const buttons = document.querySelectorAll('.btn')
    let count = 0
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('firstbtn')) {
                count--;
            }
            else if (button.classList.contains('secondbtn')) {
                count++;
            }
            else if (button.classList.contains('thirdbtn')) {
                count=0;
            }


            const counter = document.querySelector('#count')
            counter.textContent = count

            if (count < 0) {
                counter.style.color = 'red'
            }

            else if (count > 0) {
                counter.style.color = 'green'
            }

            else {
                counter.style.color = 'rgb(19, 191, 239)'
            }
        })
    })
})   ()


setInterval(() => {
    let d = new Date();
    //console.log(d)
    document.getElementById("time").innerHTML = "Current Date :: " + d;
}, 1000)