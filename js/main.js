'use strict';

// Удаление всех символов из строки str кроме чисел
const getNumbers = (str) => str.replace(/\D+/g,"");
let name, sName, age, tel, email;

function nameOnChange(val) {
    console.log(val);
    name = val;
}

function sNameOnChange(val) {
    console.log(val);
    sName = val;
}

function ageOnChange(val) {
    console.log(val);
    age = val;
}

function telOnChange(val) {
    console.log(val);
    tel = val;
}

function emailOnChange(val) {
    console.log(val);
    email = val;
}

function btnOnClick() {
    console.log('name', name);
    console.log('sName', sName);
    console.log('age', age);
    console.log('tel', tel);
    console.log('email', email);

if(name === undefined || name.length <2){
    alert('Имя введено некорректно!');
    return;
}
if(sName === undefined || sName.length <2){
    alert('Фамилия введена некорректно!');
    return;
}
if(age === undefined || +age <0 || +age >131){
    alert('Возраст введен некорректно! Возраст должен быть не меньше 0 и не привышать 130');
    return;
}
if(tel === undefined || tel.length <9 || tel.length >11 || tel.length-9 != 0){
    alert('Номер телефона введен неверно, перепроверьте!');
    return;
}
//if(email === undefined || email.indexOf("@")<1 || email.indexOf(".")<3 || email.length-1 !="." ){
if(email === undefined) {

    alert('Email не введен!');
    return;
}
let emailChar=email.indexOf("@");
if(emailChar<0){
    alert('В email нет @ ');
    return;
}
if(emailChar===0){
    alert('email не может начинаться с @');
    return;
}
let emailDomaine=email.slice(emailChar+1);
console.log(emailDomaine);
if(emailDomaine.indexOf(".")===0 || emailDomaine.indexOf(".")>emailDomaine.length-1){
    alert( "точка стоит не там");
    return;
}
alert("все хорошо");
}
