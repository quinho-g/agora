


setInterval (() => {
let bolha = document.createElement('div')
let im = document.createElement('img')
im.setAttribute('src', 'lob.png')
im.style.width = '80%'
im.style.height = '80%'
bolha.classList.add('bola')
bolha.classList.add('b1')
bolha.appendChild(im)
document.body.appendChild(bolha)
bolha.addEventListener('animationend', () => {
    bolha.remove()})
}, 2340)

setInterval (() => {
    let bolha = document.createElement('div')
    let im = document.createElement('img')
    im.setAttribute('src', 'lob.png')
    im.style.width = '80%'
    im.style.height = '80%'
    bolha.classList.add('bola')
    bolha.classList.add('b2')
    bolha.appendChild(im)
    document.body.appendChild(bolha)
    bolha.addEventListener('animationend', () => {
        bolha.remove()})
    }, 2850)

    setInterval (() => {
        let bolha = document.createElement('div')
        let im = document.createElement('img')
        im.setAttribute('src', 'lob.png')
        im.style.width = '80%'
        im.style.height = '80%'
        bolha.classList.add('bola')
        bolha.classList.add('b3')
        bolha.appendChild(im)
        document.body.appendChild(bolha)
        bolha.addEventListener('animationend', () => {
            bolha.remove()})
        }, 3240)

document.body.addEventListener('click', (e)=> {
    const x = e.pageX
    const y = e.pageY
    const boll = document.createElement('div')
    boll.classList.add('opa')
    boll.style.objectFit = 'hidden'
    boll.style.left = `${x - 8}px`
    boll.style.top = `${y - 8}px`
    document.body.appendChild(boll)
    boll.addEventListener('animationend', ()=> {
        boll.remove()
    })
})
