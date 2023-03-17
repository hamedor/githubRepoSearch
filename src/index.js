import getData from "./getData";
import "./styles.css";

const button = document.querySelector('.button');
const input = document.querySelector('.input');
const form = document.querySelector('.form');
const error = document.querySelector('.error');
let searched = '';
let data;

input.addEventListener('input', (e)=>{
    const target = e.target;
    searched = target.value;

    
    error.innerHTML = '';
})

button.addEventListener('click', (e)=>{
    e.preventDefault();

    if(searched.length < 3){
       error.innerHTML = 'Ошибка! Введите минимум 3 символа.';
    }else{
        data = getData(searched);
        input.value='';
    }

})

