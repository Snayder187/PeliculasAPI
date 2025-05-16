export function extraerErrores(obj: any): string []{
    const err = obj.error.errors;
    
    let mensajeDeError: string[] = [];
    for (let llave in err) {
        let campo = llave
        const mensajesCoNCampos = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
        mensajeDeError = mensajeDeError.concat(mensajesCoNCampos);
    }
    return mensajeDeError;
}

export function extraerErroresIdentity(obj: any): string[] {
    let mensajeDeError: string[] = [];

    for(let i = 0; i < obj.error.length; i++) {
        const elemento = obj.error[i];
        mensajeDeError.push(elemento.descripcion);
    }
    return mensajeDeError;
}