
import { ErrorMessage, useField } from 'formik';
import { MenuItem, TextField } from "@mui/material"




export const SelectSencillo = ({ label, options=[], ...props }: any) => {


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
                    <MenuItem key={valor} value={valor}>{valor}</MenuItem>
                ))
                }
            </TextField>
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )


}
