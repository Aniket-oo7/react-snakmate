export const validateName = function(firstName){
const nameRegex = /^[A-Za-z]{1,20}$/;
return nameRegex.test(firstName)
}

export const validateLastName = function(lastName){
    const regex = /^[A-Za-z]{1,20}$/;
    return regex.test(lastName)
}

export const validatePhoneNumber = function(phoneNumber){
    const phoneRegex =  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phoneNumber)
}

export const validatePassword = function(password){
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
    return passRegex.test(password)
}

export const validateEmail = function(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/;
    return emailRegex.test(email)
}