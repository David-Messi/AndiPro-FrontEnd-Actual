
import { ErrorMessage, useField } from 'formik';
import { TextField } from "@mui/material"


interface TextFieldProps {
    name: string;
    label: string; 
    type: string;
    placeholder: string; 
    fullWidth: any;
    disabled?: boolean;
    InputProps?: any;
    multiline?: any;
    rows?: any;
    style?: any;
}


export const TextFormField = ({ label, ...props }: TextFieldProps) => {

    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;


    return (
        <>
            <TextField
                // autoComplete="off"
                error={ !!hasError }
                label={ label } 
                { ...field } 
                { ...props }
            />
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )


}
