export default function CardValidation(values) {
    const errors = {}

    if(values.cardName === "") {
        errors.cardName = "Card Name is required !"
    }

    if(values.cardNumber === ""){
        errors.cardNumber="Card Number is required !"
    }

    if(values.expiration === "") {
        errors.expiration = "Expiration is required !"
    }

    if(values.cvv === "") {
        errors.cvv = "CVC/CVV is required !"
    }

    return errors;
}