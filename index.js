// console.log("js file");

// console.log(document);

// const a = document.getElementsByTagName('h2')[0].innerHTML;
// console.log(a);

// const b = document.getElementsByTagName('h2');
// console.log(b);  

// const div1Capture = document.getElementById('div2');
// const className = document.getElementsByClassName('form-control');
// const tagName = document.getElementsByTagName('h2');
// const btnCapture = document.querySelector('.btn');
// const tagNameCapture = document.querySelector('btn');
// const querySelect2 = document.querySelector('#div2');
// console.log(div1Capture);
// console.log(className);
// console.log(tagName[0]);
// console.log(btnCapture2[0]);
// console.log(tagNameCapture);
// console.log(querySelect2);

// btnCapture.addEventListener('click', function clickEvent(event){
//     event.preventDefault();
//     console.log(event);
//     // alert(event);
//     // document.querySelector('#div2').innerHTML = "change Text";
// });

// function clickEvent(){
//     // alert('Button Clicked');
//     document.querySelector('#div2').innerHTML = "change Text";

// }

// btnCapture.addEventListener('click', clickEvent());

// const usernameCapture = document.querySelector('.userName');
// console.log(usernameCapture);


const btnCapture = document.querySelector('.btn');
btnCapture.addEventListener('click', function clickEvent(event){
    event.preventDefault(); // prevent default behaviour of the event
    
    const empObj = {};  // create empty object
    const empArr = [];  // empty array

    // set input value
    const username = document.getElementById('inputUserName').value;
    const password = document.getElementById('inputPassword').value;
    const email = document.getElementById('inputEmail').value;

    if (username === "" || username.length === 0 || !username){
        document.querySelector('#nameRequired').innerHTML = "<div class='text-danger'>Name Required</div>";
    } else {
        document.querySelector('#nameRequired').innerHTML = "";
    }
    if (password === "" || password.length === 0){
        document.querySelector('#passwordRequired').innerHTML = "<div class='text-danger'>Password Required</div>";
    } else {
        document.querySelector('#passwordRequired').innerHTML = "";
    }
    if (email === "" || email.length === 0){
        document.querySelector('#emailRequired').innerHTML = "<div class='text-danger'>Email Required</div>";
    } else {
        document.querySelector('#emailRequired').innerHTML = "";
    }

    // Add value (from field) to empty object
    empObj.username = username;
    empObj.password = password;
    empObj.email = email;

    console.log(empObj);

    // push field value to empty array
    empArr.push(username);
    empArr.push(password);
    empArr.push(email);
    console.log(empArr);

    // alert(event);
    // document.querySelector('#div2').innerHTML = "change Text";
});