let percentages = document.querySelectorAll('.default-percent');
const customTip = document.getElementById('custom-tip');
const tipPP = document.getElementById('tip-total');
const totalPP = document.getElementById('total-pp');
const bill = document.getElementById('bill');
const persons = document.getElementById('people');
persons.value = '1';

const reset = document.getElementById('reset')


customTip.addEventListener('click',removeActive)
customTip.addEventListener('keyup',updateTip2)
bill.addEventListener('keyup',updateTip)
persons.addEventListener('keyup',updateTip)
reset.addEventListener('click',resetter)

percentages.forEach(n=>{
    n.addEventListener('click',function(e){
        percentages.forEach(i=>{
            i.classList.remove('active')
        })
        e.target.classList.add('active')
    })
    
})

function removeActive(){
    percentages.forEach(i=>{
        i.classList.remove('active')
    })
}

function updateTip(){
    let percentage;
    if(customTip.value === ''||customTip.value === '0'){
        percentage = check();
    }else if(customTip.value != ''){
        percentage = customTip.value
    }
    if(bill.value == '' || persons.value == ''){
        tipPP.textContent = '$0'
        totalPP.textContent = '0'
    }
    let tip = Math.round((parseInt(percentage)/100)*parseInt(bill.value));
    let tipByP = (parseInt(tip)/parseInt(persons.value)).toFixed(2);
    let billPlusTip = parseInt(bill.value) + parseInt(tip);
    let billPlusTipByP = (parseInt(billPlusTip)/parseInt(persons.value)).toFixed(2);

    tipPP.textContent = `$${tipByP}`;
    totalPP.textContent = `$${billPlusTipByP}`;
}
function updateTip2(){
    let percentage = customTip.value;
    let tip = (bill.value*percentage)/100;
    let tipByP = (tip/persons.value).toFixed(2);
    let billPlusTip = parseInt(bill.value) + parseInt(tip);
    let billPlusTipByP = (billPlusTip/persons.value).toFixed(2);

    tipPP.textContent = `$${tipByP}`;
    totalPP.textContent = `$${billPlusTipByP}`;
}

function check(){
    let act ;
    percentages.forEach(i=>{
        if(i.classList.contains('active')){
            act = i;
        }
    })
    return act.getAttribute('id')
}

function resetter(){
    tipPP.textContent = '$0'
    totalPP.textContent = '$0'
    bill.value = ''
    persons.value = '1'
    customTip.value = ''
}

