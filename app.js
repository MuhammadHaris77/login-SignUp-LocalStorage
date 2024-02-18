
var userData = [];



function signUp() {

    var singUpGetinputName = document.querySelector('#signUpInputName1');
    var singUpGetinputEmail = document.querySelector('#signUpInputEmail1');
    var signUpGetPassword = document.querySelector('#signInInputPassword1');
    singUpGetinputName = singUpGetinputName.value
    singUpGetinputEmail = singUpGetinputEmail.value
    signUpGetPassword = signUpGetPassword.value

    console.log(singUpGetinputName)
    console.log(singUpGetinputEmail)
    console.log(signUpGetPassword)

    var userobj = {
        name: singUpGetinputName,
        email: singUpGetinputEmail,
        password: signUpGetPassword
    }
    console.log(userobj)

    var getLocalStrorage = localStorage.getItem("user")
    console.log(getLocalStrorage)
    if (getLocalStrorage == null) {
        userData.push(userobj)
        localStorage.setItem('user', JSON.stringify(userData))
        console.log(userData)
        alert("user signup")
        window.location.href = "./signin.html"

    }
    else {
         alert("User Already Exist")
     }

}

function logIn() {
    var logiInGetinputEmail = document.querySelector('#logInInputEmail1');
    var logiInGetPassword = document.querySelector('#logInInputPassword1');
    logiInGetinputEmail = logiInGetinputEmail.value
    logiInGetPassword = logiInGetPassword.value


    console.log(logiInGetinputEmail)
    console.log(logiInGetPassword)

    if (logiInGetinputEmail === userData.email && logiInGetPassword === userData.password ){
         console.log("user login ")
         console.log(logiInGetinputEmail)
    

    }else{
        console.log("incorrect user Email password")

    }

    console.log(userData)
}