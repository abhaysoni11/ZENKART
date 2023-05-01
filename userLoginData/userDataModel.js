const userCredData = {
    name : '',
    email : '',
    set changeName(name){
        this.name = name;
    },
    set changeEmail(email)
    {
        console.log("Emial : ",email);
        this.email = email;
    }
}

