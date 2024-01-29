


export  const colorGestion = (gestion: string) => {
    switch (gestion) {
    case 'ACUERDO DE PAGO EN CUMPLIMIENTO':
        return '#2BB224';
    case 'ACUERDO INCUMPLIDO, SE REMITE TERMINACIÓN':
        return '#EDD400';
    case 'CASO EXITOSO Y CONCLUIDO':
        return '#A12EFB';
    case ' CASO EXITOSO Y CONCLUIDO':
        return '#A12EFB';
    case 'CONTINUAMOS GESTIONANDO, NO CONTESTA':
        return '#6B89F7';
    case 'EN NEGOCIACIONES PARA ACUERDO':
        return '#EAA10F';
    case 'EN PROCESO JURÍDICO':
        return '#D04A38';
    default:
        return 'pink';
    }
}