function FizzBuzz(value1, value2) {
    let output = [];
    for(let i = 1; i <= 100; i++){
        output[i] = ((i % value1 == 0 ? 'Fizz' : '' ) + (i % value2 == 0 ? 'Buzz' : '') || i);                   
    }
    return output;
}

function populateTable(){
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');
    
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;
    
    let val1 = document.getElementById('fizz-value').value;
    let val2 = document.getElementById('buzz-value').value;
    
    output = FizzBuzz(val1,val2);
    for(i = 1; i < output.length; i += 5){
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
            .replace('{{val2}}', output[i + 1])
            .replace('{{val3}}', output[i + 2])
            .replace('{{val4}}', output[i + 3])
            .replace('{{val5}}', output[i + 4]);
    }
    document.getElementById('result').innerHTML = resultsHTML;
}