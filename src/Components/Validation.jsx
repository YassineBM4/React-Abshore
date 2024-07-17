export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{9,}$/

    if(values.firstName === ""){
        errors.firstName="First Name is required !"
    }

    if(values.lastName === ""){
        errors.lastName="Last Name is required !"
    }

    if(values.email === ""){
        errors.email="E-mail Address is required !"
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Please include an '@' in the E-mail Address."
    }

    if(values.password === "") {
        errors.password = "Password is required !"
    } else if(!password_pattern.test(values.password)) {
        errors.password = "Password is not in the right format"
    }

    return errors;
}