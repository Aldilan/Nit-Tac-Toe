const sidebarButton = document.querySelector('.reportPageLeft img')
const sidebar = document.querySelector('.reportPage')
const modeMenu = document.querySelector('.chooseMode')
const modes = document.querySelectorAll('.chooseMode ul li a')
const menu = document.querySelector('.menu img')
const hContain = document.getElementById('headerContain')
const player1 = document.getElementById('player1')
const player2 = document.getElementById('player2')
const coloums = document.querySelectorAll('.contain table tr td img')
const reset = document.querySelector('.contain button')
const resultGame = document.querySelector('.resultGame')
const resultWhosWinner = document.querySelector('.result ul li span')
const closeResult = document.querySelector('.result ul li button')
const scoreP = document.getElementById('score1')
const scoreC = document.getElementById('score2')
const gameOver = document.querySelector('.gameOver')

sidebarButton.addEventListener('click', function (e) {
    e.target.parentElement.classList.toggle('reportPageButtonHover')
    sidebar.classList.toggle('reportPageSlide')
})

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

function clearAll() {
    coloums.forEach(function (coloumClean) {
        coloumClean.setAttribute('src','')
        coloumClean.setAttribute('id','')
        coloumClean.classList.add('op0')
    })
    gameOver.classList.add('displayNone')
}

function countScores() {
    if (resultWhosWinner.textContent == 'Player Win') {
        newScoresP = parseInt(scoreP.textContent)
        newScoresP += 1
        scoreP.innerHTML=newScoresP
    }else if (resultWhosWinner.textContent == 'Computer Win') {
        newScoresC = parseInt(scoreC.textContent)
        newScoresC += 1
        scoreC.innerHTML=newScoresC
    }else {
    }
}

function end() {
    resultGame.classList.remove('displayNone')
    gameOver.classList.remove('displayNone')
    countScores()
}

function resultWinner() {
    if (coloums[0].getAttribute('src') === 'assets/img/o.png' && coloums[1].getAttribute('src') === 'assets/img/o.png' && coloums[2].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[3].getAttribute('src') === 'assets/img/o.png' && coloums[4].getAttribute('src') === 'assets/img/o.png' && coloums[5].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[6].getAttribute('src') === 'assets/img/o.png' && coloums[7].getAttribute('src') === 'assets/img/o.png' && coloums[8].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[0].getAttribute('src') === 'assets/img/o.png' && coloums[3].getAttribute('src') === 'assets/img/o.png' && coloums[6].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[1].getAttribute('src') === 'assets/img/o.png' && coloums[4].getAttribute('src') === 'assets/img/o.png' && coloums[7].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[2].getAttribute('src') === 'assets/img/o.png' && coloums[5].getAttribute('src') === 'assets/img/o.png' && coloums[8].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[0].getAttribute('src') === 'assets/img/o.png' && coloums[4].getAttribute('src') === 'assets/img/o.png' && coloums[8].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[2].getAttribute('src') === 'assets/img/o.png' && coloums[4].getAttribute('src') === 'assets/img/o.png' && coloums[6].getAttribute('src') === 'assets/img/o.png') {
        resultWhosWinner.innerHTML='Player Win'
        end()
    }else if (coloums[0].getAttribute('src') === 'assets/img/x.png' && coloums[1].getAttribute('src') === 'assets/img/x.png' && coloums[2].getAttribute('src') === 'assets/img/x.png') {      
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[3].getAttribute('src') === 'assets/img/x.png' && coloums[4].getAttribute('src') === 'assets/img/x.png' && coloums[5].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[6].getAttribute('src') === 'assets/img/x.png' && coloums[7].getAttribute('src') === 'assets/img/x.png' && coloums[8].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[0].getAttribute('src') === 'assets/img/x.png' && coloums[3].getAttribute('src') === 'assets/img/x.png' && coloums[6].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[1].getAttribute('src') === 'assets/img/x.png' && coloums[4].getAttribute('src') === 'assets/img/x.png' && coloums[7].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[2].getAttribute('src') === 'assets/img/x.png' && coloums[5].getAttribute('src') === 'assets/img/x.png' && coloums[8].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[0].getAttribute('src') === 'assets/img/x.png' && coloums[4].getAttribute('src') === 'assets/img/x.png' && coloums[8].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else if (coloums[2].getAttribute('src') === 'assets/img/x.png' && coloums[4].getAttribute('src') === 'assets/img/x.png' && coloums[6].getAttribute('src') === 'assets/img/x.png') {
        resultWhosWinner.innerHTML='Computer Win'
        end()
    }else{
    }
}

coloums.forEach(function (coloum) {
    coloum.addEventListener('click', function (e) {
        if (e.target.getAttribute('id') !== 'done') {
            e.target.setAttribute('id','done')
            e.target.setAttribute('src', 'assets/img/o.png')
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
                            coloums[i-1].setAttribute('src','assets/img/x.png')
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
                        resultWhosWinner.innerHTML = 'Draw'
                        end()
                    }
                }
            }
            resultWinner()
        }else {

        }
    })
})

reset.addEventListener('click', function (e) {
    clearAll()
})

closeResult.addEventListener('click',function (e) {
    resultGame.classList.add('displayNone')
})