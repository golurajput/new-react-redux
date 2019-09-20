const validation = {
    emailValidation: function(email){
        const length = email;
        if(length<1) return "Email can not Null";
        else if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
        else return "Invalid email format";

    },
    passwordValidation: function(password){
        const length = password;
        if(length>7) return "success"
        else if(length>1 && length<7) return "password atleast 8 digit";
        else return "password can not Null";
    }
}

export default validation;