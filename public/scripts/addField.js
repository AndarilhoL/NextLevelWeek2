//Procurar o Botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //QUAL CAMPO ?                                                    //CLONAR CAMPO 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //Limpar os Campos
    //Quais Campos ?
    const fields = newFieldContainer.querySelectorAll('input'); 

    fields.forEach(function(field){
        field.value = "";
    })

    console.log(fields);
    
    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}