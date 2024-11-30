
export const checkValidate=(email,password)=>{
    const EmailRegex=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const PasswordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!EmailRegex){
        return "Invalid Email";
    }
    if(!PasswordRegex){
        return "Password must contain 8 characters, one letter and one number";
    }

    return null;

}