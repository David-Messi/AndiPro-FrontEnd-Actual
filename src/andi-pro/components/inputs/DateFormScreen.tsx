
import { ErrorMessage, useField } from 'formik';
import { TextField } from "@mui/material"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


interface DateProps {
    label: string;
    placeholder: string;
    name: string;
    bloqueo?: boolean,
}


export const DateFormScreen = ({ label, bloqueo=false, ...props }: DateProps) => {



    const [field, meta] = useField(props);
    const hasError = meta.touched && meta.error;



    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={label}
                    disabled={bloqueo} 
                    value={field.value} 
                    onChange={(newValue: any) => {
                        field.onChange({ target: { name: props.name, value: newValue.$d || newValue._d } });
                    }}
                    renderInput={(params: any) => <TextField {...params} fullWidth 
                                error={ !!hasError } 
                                className="whiteTextAndIcon" 
                    /> }
                />
            </LocalizationProvider>
            <ErrorMessage className='error-message' name={ props.name } component="span" />
        </>
    )

}

