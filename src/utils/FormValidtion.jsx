

export const FormValidation = ( email, name, password)=> {

    const Valid_email = /^\S+@\S+\.\S+$/.test(email);
    const Valid_password = /^[A-Za-z0-9@#$_!]{6,}$/.test(password);

    const Valid_name = /([a-zA-Z0-9_\s]+)/.test(name);

    if (!Valid_email) {
        return "Invalid Email"
    }
    if (!Valid_password) {
        return "Invalid Password"
    }
    if (!Valid_name) {
        return "Invalid User Name"
    }

    return null;

}
