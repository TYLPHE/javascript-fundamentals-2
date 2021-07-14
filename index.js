const button = document.querySelector('button');

button.onclick = function() {
    let password;
    let accountName = prompt(`Enter account name (Try "Admin", press Esc key, or other text):`);

    if (accountName == `Admin`){
        password = prompt(`Enter password (Try "TheMaster" or other text):`);
    }
    else if(accountName == null){
        alert(`Canceled`);
    }
    else{
        alert(`I don't know you`);
    }


    if(password == `TheMaster`){
        alert(`Welcome Master!`);
    }
    else if(password == null){
        alert(`Canceled`);
    }
    else{
        alert(`Wrong password.`);
    }
    }