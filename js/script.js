const modeMenu = document.querySelector('.chooseMode')
const modes = document.querySelectorAll('.chooseMode ul li a')
const menu = document.querySelector('.menu img')
const hContain = document.getElementById('headerContain')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const coloums = document.querySelectorAll('.contain table tr td img')
const reset = document.querySelector('.contain button')
const resultGame = document.querySelector('.resultGame')
const closeResult = document.querySelector('.result ul li button')
const gameOver = document.querySelector('.gameOver')

modes.forEach(function (mode) {
    mode.addEventListener('click', function (e) {
        e.preventDefault()
        if (e.target.textContent == 'Multiplayer') {
            modeMenu.classList.add('slideMode')
            hContain.innerHTML = e.target.textContent
            player1.innerHTML = 'Player 1'
            player2.innerHTML = 'Player 2'
        }else{
            modeMenu.classList.add('slideMode')
            hContain.innerHTML = e.target.textContent
            player1.innerHTML = 'You'
            player2.innerHTML = 'Computer'
        }
    })
})

menu.addEventListener('click', function (e) {
    modeMenu.classList.remove('slideMode')
})

coloums.forEach(function (coloum) {
    coloum.addEventListener('click', function (e) {
        if (e.target.getAttribute('id') !== 'done') {
            e.target.setAttribute('id','done')
            e.target.setAttribute('src', 'assets/img/info.png')
            e.target.classList.remove('op0')

            let botDone = 'belum'
            while (botDone == 'belum') {
                valBot = 10
                while (valBot == 0 || valBot == 10) {
                    valBot = Math.round(Math.random()*10)
                }
                for (let i = 1; i < coloums.length; i++) {
                    if (i == valBot) {
                        if (coloums[i-1].getAttribute('id') == 'done') {
                            botDone = 'belum'
                        }else{
                            coloums[i-1].setAttribute('id','done')
                            coloums[i-1].setAttribute('src','assets/img/info.png')
                            coloums[i-1].classList.remove('op0')
                            botDone = 'udah'
                        }
                    }
                }
            }
            let coloumResult = 0
            for (let j = 0; j < coloums.length; j++) {
                if (coloums[j].getAttribute('id') == 'done') {
                    coloumResult += 1
                    if (coloumResult == 8) {
                        resultGame.classList.remove('displayNone')
                        gameOver.classList.remove('displayNone')
                    }
                }
            }
            console.log(coloumResult)
        }else {

        }
    })
})

reset.addEventListener('click', function (e) {
    coloums.forEach(function (coloumReset) {
        if (coloumReset.getAttribute('id') == 'done') {
            coloumReset.setAttribute('id', '')
            
        }
        gameOver.classList.add('displayNone')
        coloumReset.classList.remove('done')
        coloumReset.classList.add('op0')
    })
})

closeResult.addEventListener('click',function (e) {
    resultGame.classList.add('displayNone')
})