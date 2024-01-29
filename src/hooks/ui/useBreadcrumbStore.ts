
import { useDispatch, useSelector } from 'react-redux';
import { addBreadcrumbs, limpiarState, removerAlNavegar, removerBreadcrumbs } from '../../store';





export const useBreadcrumbStore = () => {

    const dispatch = useDispatch();
    const { migas, miga } = useSelector( ( state: any ) => state.breadcrumb );

    
    const startBreadcrumbs = (valor: any) => {
        dispatch(addBreadcrumbs(valor));
    }

    const navegarAndRemover = (valor: number) => {
        dispatch(removerAlNavegar(valor));
    }


    const limpiarStart = () => {
        dispatch(limpiarState());
    }



    const deleteBreadcrumbs = (valor: any) => {
        dispatch( removerBreadcrumbs(valor) );
    }



    return {
        //Propiedades
        migas,
        miga,

        // Metodos
        startBreadcrumbs,
        navegarAndRemover,
        deleteBreadcrumbs,
        limpiarStart,
    }

}