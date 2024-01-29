
import { ErrorMessage, useField } from 'formik';
import { MenuItem, TextField } from "@mui/material"




export const SelectPorNombre = ({ label, options=[], ...props }: any) => {


    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;


    return (
        <>
            <TextField 
                select
                defaultValue=""
                label={ label } 
                error={ !!hasError }
                { ...field } 
                { ...props }
            >
                <MenuItem value=''>Seleccione { props.nombre }</MenuItem>
                {
                options?.map( (value: any) => (
                    <MenuItem key={value.id} value={value.id}>{value.nombre}</MenuItem>
                ))
                }
            </TextField>
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )


}
