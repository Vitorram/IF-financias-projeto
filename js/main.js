function openModal(){
    const modal = document.querySelector ('.modal')
    modal.style.display = 'flex'
   
}
function closeModal (event){
    const modal = document.querySelector ('.modal')

    const cadastroUnico = document.getElementById ("cadastroUnico")

    if (event ===undefined)
        return modal.style.display = 'none'

    if (event.target.className==='modal')
        return modal.style.display = 'none'
   
       
}
function addTiker(event){
    
    //previni o comportamento padrao
    event.preventDefault()
    //pega o valor do bagulho (urlLOGO)
    const cardList = document.querySelector('#cardList')
    const urlLogo = event.target.urlLogo.value
    const empresa = event.target.nameCompany.value
    const simbolo = event.target.simbolo.value
    const quantidade = event.target.qantidade.value
    const tiket = event.target.tickt.value

    constList.innerHTML += `<div id="cardList">
    <div class="cardTickt">
        <header>
            <img src="${urlLogo}" alt="Logo">
            <h4 style="font-size: 30px;">${empresa}</h4>
            <span style="margin: 0 0 0 70px; font-size: 20px;">${simbolo}</span>
        </header>
        <main>
            <p style="color: black; margin: 10px 0 0 20px;">Valor: <span style="color: rgb(6, 170, 6);">${tiket}</span> <span style="color: green;">▲<span style="color: red;">▼</span></p>
        </main>
        <footer style="display: flex;">
            <p style="color: black; margin: 20px 0 0 20px;font-size: 20px;" >Quantidade: <span style="color: #F19E39;"> ${quantidade} </span></p>
            <p  style="color: black;margin: 20px 0 0 20px; font-size: 20px;">Posiçao: <span style="color: #F19E39;" > R$ 23.400.23 </span></p>
        </footer>
    </div>`

    closeModal()
    event.target.reset()
}