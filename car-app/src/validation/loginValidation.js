export const loginValidation = (email, password) => {
    if(!email || !password ){
        return 'All fields must be fiiled';
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        return 'Invalid email';
    }
    else if(password.length < 5) {
        return 'Password is too short';
    }
    else return '';
}