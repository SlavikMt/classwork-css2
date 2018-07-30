
// const hello = 'hello world';
// alert(hello);
const userName = prompt('enter your name');
const greetings = 'hello, ' + userName;
alert(greetings);
const userAge = parseInt(prompt('enter your age'));  
alert('Your age is ' +userAge);
const nextAge =userAge + 1;
alert('Next year you will be' +nextAge);
if (userAge >= 18) {
    alert('You are adult');
} else{
    alert('You are child');
}
function add(a,b,c) {
    const result=a+b+c;
    return result;}
    const result = add(2, 2, 2);
    alert(result);
    