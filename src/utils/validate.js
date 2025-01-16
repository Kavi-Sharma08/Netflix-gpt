export const CheckValidData = (email , password , fullName,phone , isSignIn) =>{
    console.log(isSignIn);
    const Email = email.current.value;
    const Password = password.current.value;
    const FullName = !isSignIn && fullName.current.value;
    const phoneNumber = !isSignIn && phone.current.value;
    
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(Email);
    const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(Password);
    const isValidFullName = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(FullName)
    const isValidPhoneNumber = /^\+?[0-9]{1,3}?[-. ]?(\(?\d{1,4}\)?)[-. ]?\d{1,4}[-. ]?\d{1,9}$/.test(phoneNumber)

    if(!isSignIn &&!isValidFullName ) return "Invalid Name"
    if(!isSignIn && !isValidPhoneNumber) return "Invalid Phone Number"
    if(!isValidEmail) return "Invalid Email"
    if(!isValidPassword) return "Invalid Password"
    

    return null; //Means no error

}