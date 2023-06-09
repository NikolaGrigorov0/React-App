
 
export const registerValidation = (username, email, password, confirmPassword) => {
    if(!username || !email || !password || !confirmPassword){
        return 'All fields must be fiiled';
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        return 'Invalid email';
    }
    else if(password.length < 5) {
        return 'Password is too short';
    }else if(password !== confirmPassword) {
        return 'The password is not the same';
    }
    else return '';
}