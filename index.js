const button = document.querySelector('button');

let admin = `Admin`;
let password = `TheMaster`;

button.onclick = function() {
    let accountName = prompt(`Enter account name (Try "Admin", press Esc key, or other text):`);

    if (accountName == admin){
        enteredPassword = prompt(`Enter password (Try "TheMaster" or other text):`);
        if(enteredPassword == password){
            alert(`Welcome Master!`);
        }
        else if(enteredPassword == null || enteredPassword==""){
            alert(`Canceled`);
        }
        else{
            alert(`Wrong password.`);
        }
        
    }
    else if(accountName == null){
        alert(`Canceled`);
    }
    else{
        alert(`I don't know you`);
    }
    }