const drpDwn1 = document.getElementById('tempType1');
const drpDwn2 = document.getElementById('tempType2');
const _alert = document.getElementById('alert');

const tempList = ['celsius', 'fahrenheit', 'reamur'];
let drpDwnOp = '';

for( x of tempList) {
    drpDwnOp += '<option value=' + x +  '>' + x + '</option>';
}

drpDwn1.innerHTML += drpDwnOp;
drpDwn2.innerHTML += drpDwnOp;

const btn = document.getElementById('convert');

btn.addEventListener('click', () => {
    const tempInput = Number(document.getElementById('value').value);
    const tempOutput = document.getElementById('output');

    _alert.style.display = 'none';  
    
    const tempType1 = drpDwn1.value;
    const tempType2 = drpDwn2.value;

    if (tempType1 == 'celsius' && tempType2 == 'fahrenheit') {
        const fahrenheit = tempInput * 9.0 / 5.0 + 32;
        tempOutput.value = fahrenheit;
    } else if (tempType1 == 'celsius' && tempType2 == 'reamur') {
        const reamur = tempInput * 4.0 / 5.0;
        tempOutput.value = reamur;
    } else if (tempType1 == 'fahrenheit' && tempType2 == 'celsius') {
        const celsius = (tempInput - 32) * 5.0 / 9.0;
        tempOutput.value = celsius;
    } else if (tempType1 == 'fahrenheit' && tempType2 == 'reamur') {
        const celsius = (tempInput - 32) * 5.0 / 9.0;
        const reamur = celsius * 4.0 / 5.0;
        tempOutput.value = reamur;
    } else if (tempType1 == 'reamur' && tempType2 == 'celsius') {
        const celsius = 5 * tempInput / 4;
        tempOutput.value = celsius;
    } else if (tempType1 == 'reamur' && tempType2 == 'fahrenheit') {
        const celsius = 5 * tempInput / 4;
        const fahrenheit = celsius * 9.0 / 5.0 + 32;
        tempOutput.value = fahrenheit;
    } else {
        tempOutput.value = '';
        document.getElementById('value').value = '';
        _alert.style.display = 'block';      
    }
    
})