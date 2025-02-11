

document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY
    let bol = document.createElement('div')
    bol.classList.add('bola')
    bol.style.left = `${x - 10}px`
    bol.style.top = `${y - 10}px`
    document.body.appendChild(bol)
    document.addEventListener('click', () =>{
        bol.remove()
    })
})

document.addEventListener('touchmove', (e) => {
    let to = e.touches[0]
    let x = to.pageX
    let y = to.pageY
    let bol = document.createElement('div')
    bol.classList.add('bola')
    bol.style.left = `${x - 10}px`
    bol.style.top = `${y - 10}px`
    document.body.appendChild(bol)
    document.addEventListener('click', () =>{
        bol.remove()
    })
})

document.addEventListener('touchmove', (e) => {
    let to = e.touches[1]
    let x = to.pageX
    let y = to.pageY
    let bol = document.createElement('div')
    bol.classList.add('bola2')
    bol.style.left = `${x - 10}px`
    bol.style.top = `${y - 10}px`
    document.body.appendChild(bol)
    document.addEventListener('click', () =>{
        bol.remove()
    })
})


