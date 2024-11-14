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
   
        if (event===undefined)
        return cadastroUnico.style.display = 'none'
}
