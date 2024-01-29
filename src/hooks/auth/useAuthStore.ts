
import { useDispatch, useSelector } from "react-redux"
import authApi from "../../api/authApi";
import { clearErrorMessage, onAutorizado, onChecking, onLogin, onLogout } from "../../store";



interface Login {
    username: String;
    password: String;
}



export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( (state: any) => state.auth );
    const dispatch = useDispatch();  


    const startAutorizado = async() => {
        try {
            dispatch( onAutorizado() );
        } catch (error: any) {
           console.log(error)
        }
    }


    const startLogin = async( login: Login ) => {
        dispatch( onChecking() );
        try {
            const { data } = await authApi.post('/', login );
            localStorage.setItem('token', data.access);
            dispatch( onLogin( data.access ) );
            return true;
        } catch (error: any) {
            dispatch( onLogout( error.response.data?.msg || '' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 200);
            return true;

        }
    }




    const checkAuthToken = async( ) => {

        const token = localStorage.getItem('token');
        if( !token ){ return dispatch( onLogout('') ) }

        try {
            const { data } = await authApi.get('/renew');
            localStorage.setItem('token', data.token);
            dispatch( onLogin( data.usuario ) );           
            // dispatch( startMenu( data.menu ) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout( 'Error de Autenticación' || '' ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 200);
        }
    }



    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout('') );
    }





    return {
        // Propiedades
        status, 
        user,
        errorMessage,

        // Metodos
        startLogin,
        checkAuthToken,
        startLogout,
        startAutorizado,
    }


}






