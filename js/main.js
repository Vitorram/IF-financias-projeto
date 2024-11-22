function openModal(id){
    const modal = document.querySelector (id)
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
function addTicker(event){
    //previne o comportamento padrão de recarregar a página ou enviar para algum endereço (action)
    // ▼
    event.preventDefault()

    const cardList = document.querySelector('#card-list')

    // event.target (form)
    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    cardList.innerHTML += `
                    <div class="card-ticker" id="${ticker}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
                        <header>
                            <img src="${urlLogo}" alt="Logo">
                            <h4>${nameCompany}</h4>
                            <span>${ticker}</span>
                        </header>
                        <main>
                            <p>Valor: <span style="color: #1ebd1e">${closedValue} <span>▲</span></span></p>
                        </main>
                        <footer>
                            <p>Quantidade: <span>${quantity}</span></p>
                            <p>Posição: <span>R$ ${+quantity * +closedValue}</span></p>
                        </footer>
                        <div class="options">
                            <button style="width:80px;" onclick = "editCard (event)">Editar</button>
                            <button style="width:80px;" onclick="removeCard(event)">Excluir</button>
                        </div>
                    </div>
                `
    closeModal()
    event.target.reset()
}

function showCardOptions(event){
    const cardOptions = event.target.querySelector('.options')
    cardOptions.style.display = 'flex'
}

function hideCardOptions(event){
    const cardOptions = event.target.querySelector('.options')
    cardOptions.style.display = 'none'
}
function removeCard (event){

    //busca os acendentes do elemento (closest)
const cardTiker = event.target.closest('.card-ticker')
//.remove elimina o elemento do html
cardTiker.remove()
}

function editCard (event){
    const cardTiker = event.target.closest('.card-ticker')
    const imglogo = cardTiker.querySelector('header img')
    const urlLogo = imglogo.getAttribute('src')
    document.querySelector('#eUrlLogo').value = urlLogo

    const nameCompany = cardTiker.querySelector('header h4').innerText
    document.querySelector('#eNameCompany').value = nameCompany

    ///...
    
    openModal ('#modaleditTicker')

}

function updateTicker(event){
    event.preventDefault()
    
    const cardList = document.querySelector('#card-list')


    const urlLogo = event.target.urlLogo.value
    const nameCompany = event.target.nameCompany.value
    const ticker = event.target.ticker.value
    const quantity = event.target.quantity.value
    const closedValue = event.target.closedValue.value

    const tikerData = {
        urlLogo,
        nameCompany,
        ticker,
        quantity,
        closedValue
        

    }
    addUpdateTiker(tikerData)
}

function addUpdateTiker (tikerData){
    const ticker = document.querySelector('#${tikerData.ticker}')
    console.log('addUpdateTiker')
}
if (ticker) {
    console.log('Atualizar')
} else {
    console.log('editar')
    cardList.innerHTML += `
<div class="card-ticker" id="${tickerData.ticker}" onmouseenter="showCardOptions(event)" onmouseleave="hideCardOptions(event)">
    <header>
        <img src="${tickerData.ticker}" alt="Logo">
        <h4>${tickerData.ticker}</h4>
        <span>${tickerData.ticker}</span>
    </header>
    <main>
        <p>Valor: <span style="color: #1ebd1e">${tickerData.ticker} <span>▲</span></span></p>
    </main>
    <footer>
        <p>Quantidade: <span>${tickerData.ticker}</span></p>
        <p>Posição: <span>R$ ${+tickerData.ticker * +tickerData.ticker}</span></p>
    </footer>
    <div class="options">
        <button style="width:80px;" onclick = "editCard (event)">Editar</button>
        <button style="width:80px;" onclick="removeCard(event)">Excluir</button>
    </div>
</div>
`

}






function closemodal (event){
    const fecharmodal = document.querySelector ('#modaleditTicker')
    
    
    fecharmodal.style.display = 'none'

   
       
}