// convert bitcoin to dollar
// convert bitcoin to naira

document.getElementById('convert').addEventListener('submit', calculateMoney);


// conversion
function calculateMoney(e){

  // UI variables
  const btc = document.getElementById('bitcoin')
  const dollar = document.getElementById('dollar')
  const naira = document.getElementById('naira')

  // Money calculations
  //bitcoin to dollars

  if(btc.value != ''){
  
  const x = btc.value*1500;

  dollar.value = x.toFixed(2)

  //bitcoin to naira
  const y = (x)*360

  naira.value = y.toFixed(2);
  }else{
    error('Put in an amount')
    console.log('bitches')
  }

  
  e.preventDefault();
}

function error(errorShow){
  const error = document.createElement('div');
  const card = document.querySelector('.card-body');
  const header = document.querySelector('.heading');

  error.className = 'alert alert-danger'

  error.style.padding = '10px';

  error.appendChild(document.createTextNode(errorShow));

  card.insertBefore(error, header);

  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 2000)
}