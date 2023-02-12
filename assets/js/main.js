function tableToExcel (){
    
    var table2excel = new Table2Excel();
      table2excel.export(document.querySelectorAll("table.table"));

    }
 
function makeEditable(header){

    //Pega o texto da header que tiver a funcção
    let headerText = header.innerHTML;

    //para evitar que apareça a palara <input> quando clicado duas vezes
    if (headerText === "<input>") {
        headerText = "";
    }

    //Remove o texto da Header
    header.innerHTML = ""

    //Cria um input com o valor da headerText
    let input = document.createElement("input");
    input.value = headerText;

    header.appendChild(input);

    input.focus()

    //salva o texto na header quando sair de foco
    input.addEventListener('blur', function(){
        header.innerHTML = input.value;
    })

}