/**
 * Password validation Rule
 *
 */
export const PasswordRule = (values, value) => {

    // Check the size
    if ( value.length == 0 ) return false;

    // Get only the numbers
    const onlyNumbers = value.replace(/\D/g, "");
    if ( onlyNumbers.length < 2 ) return 'A senha precisa conter no mínimo 2 números.';

    // Get only special chars
    const onlySpecialChars = value.replace(/[a-zA-Z0-9]/g, "");
    if ( onlySpecialChars.length == 0 ) return 'A senha precisa conter pelo menos 1 caracter especial.';

    // Get only uppercase chars
    const onlyUpperCaseChars = value.replace(/[^A-Z]/g, "");
    if( onlyUpperCaseChars.length == 0 ) return 'A senha precisa conter pelo menos 1 letra maiúscula.';

    // Get only lowercase chars
    const onlyLowerCaseChars = value.replace(/[^a-z]/g, "");
    if( onlyLowerCaseChars.length < 4 ) return 'A senha precisa conter pelo menos 4 letras minusculas.';

    // Password is valid
    return true;
}

// End of file
