
export const validarRut = (body: any) => {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    const USU_RUT = body.USU_RUT
    console.log(USU_RUT)
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(USU_RUT)) {

        throw new Error('Formato del rut es inválido')
    }

    var tmp = USU_RUT.split('-');
    var digv = tmp[1];
    var rut = tmp[0];

    if (digv == 'K') digv = 'k';

    if (validarRut.dv(rut).toString() == digv) {
        return true
    } else {

        throw new Error('Rut inválido')
    }

};
validarRut.dv = (T: any) => {
    var M = 0, S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;

    return S ? S - 1 : 'k';
};
