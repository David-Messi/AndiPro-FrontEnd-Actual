


import { Alert, AlertTitle, Box } from '@mui/material'


interface Props {
    titulo: String;
    subtitulo?: String;
}


export const AlertaInformativa = ({ titulo, subtitulo=""}: Props) => {



    return (

        <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'60vh' }}>
            <Alert severity="info" sx={{width:'100%', display: 'flex',justifyContent:'center'}}>
                <AlertTitle sx={{fontSize:"18px"}}>{ titulo }</AlertTitle>
                {/* This is an info alert — <strong>check it out!</strong> */}
                { subtitulo }
            </Alert>
        </Box>

    )


}
