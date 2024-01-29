
import { ErrorMessage, useField } from 'formik';
import { MenuItem, TextField } from "@mui/material"




export const SelectNormal = ({ label, options=[], ...props }: any) => {


    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;


    return (
        <>
            <TextField 
                select
                label={ label } 
                error={ !!hasError }
                { ...field } 
                { ...props }
            >
                {
                options?.map( (valor: any) => (
                    <MenuItem key={valor.name} value={valor.valor}>{valor.name}</MenuItem>
                ))
                }
            </TextField>
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )


}
