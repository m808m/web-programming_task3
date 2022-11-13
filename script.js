let isExist = false;

function createTable(){
    if (isExist == false){
        const table = document.createElement('table');
        table.setAttribute("id", "mytable");
        document.getElementById('container').appendChild(table);
        isExist = true;

        document.getElementById('add').disabled = false;
        document.getElementById('delete').disabled = false;
        document.getElementById('rowNumber').disabled = false;
    }
    else{
        alert('Таблица уже создана');
    }
}


function addRowCount(){
    const rowCountInput = document.getElementById('rowCount');
    const newRowCount = +rowCountInput.value + 1;
    rowCountInput.value = newRowCount;
    return newRowCount;
}

function addRow(){
    const table = document.getElementById('mytable');
    const rowNum = addRowCount();
    const row = table.insertRow();
    row.setAttribute("id", 'num-' + rowNum);

    const tdNum = row.insertCell();
    tdNum.textContent = rowNum;
    tdNum.setAttribute("class", "numberCell");

    const tdValue= row.insertCell();
    tdValue.textContent = 'value' + ' = ' + Math.round((Math.random()*100));
}

function autoRepeat(){
    const cells = document.querySelectorAll('.numberCell');
    let i = 1;
    cells.forEach(item => {
        item.textContent = i;
        i++;
    })
}

function removeRow(){
    const input = document.getElementById('rowNumber').value;
    const hidden_input =  document.getElementById('rowCount').value;
    const table = document.getElementById('mytable');

    if (input <= +hidden_input){
        table.deleteRow(input-1);
        document.getElementById('rowCount').value -= 1;
        autoRepeat();
    }
    else{
        alert('Такой строки нет');
    }

}