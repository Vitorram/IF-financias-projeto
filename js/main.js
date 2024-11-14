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
function handleSubmitAddTiker(event){
    //previni o comportamento padrao
    event.preventDefault()
    //pega o valor do bagulho (urlLOGO)
    console.log(event.target.urlLogo.value)
}