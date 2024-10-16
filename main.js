let input_value= document.getElementById('input-value');
let celsius_fahrenheit=document.getElementById('celsius-fahrenheit');
let fahrenheit_celsius=document.getElementById('fahrenheit-celsius');
let result=document.getElementById('result');
let submit = document.getElementById('submit');
let temp;
submit.onclick= function(){
  temp_conv();
}
function temp_conv(){
  if (celsius_fahrenheit.checked){
    temp= Number(input_value.value);
    temp= temp * 9/5 +32;
    result.textContent=`${temp} degrees F`;
  }
  else if(fahrenheit_celsius.checked){
    temp= Number(input_value.value);
    temp=(temp - 32)*(5/9);
    result.textContent=temp.toFixed(1) + "degrees C";
  }
  else{
    result.textContent='Select Unit';
  }
}