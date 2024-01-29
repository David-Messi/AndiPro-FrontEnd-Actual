
import { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Autocomplete, TextField } from "@mui/material"



interface AutocompleteProps {
    label: string;
    name: string;
    placeholder: string;
    fullWidth: any;
    options?: any[]; 
    bloqueo?: boolean;
    value?: string | number;
}





export const AutocompleteScreen = ({ label, options=[], bloqueo=false, ...props }: AutocompleteProps) => {

    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;


    const [selectedValue, setSelectedValue] = useState<any>(null); 

    useEffect(() => {
        setSelectedValue(props.value);
    }, [props.value]);



    return (
        <>
            <Autocomplete
                disabled={bloqueo} 
                value={ options.find(valor => valor.id == selectedValue) || null}
                options={ options }
                onChange={ (_event, newValue) => {
                    setSelectedValue(newValue.id)
                    field.onChange({ target: {
                         name: props.name, value: newValue ? newValue.id : '' 
                    }});
                }}
                renderInput={(params) => <TextField
                    {...params} 
                    label={ label }  
                    error={ !!hasError }
                    { ...field } 
                    { ...props }
                    autoComplete="off"
                />}
                getOptionLabel={(option: any) => option.nombre}
            />
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )
}


