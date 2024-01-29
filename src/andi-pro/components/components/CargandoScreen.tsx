import { Box, CircularProgress, Typography } from "@mui/material"


interface Props {
    titulo: String;
}


export const CargandoScreen = ({ titulo }: Props) => {

  return (
    
    <Box sx={{ display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100%', height:'60vh' }}>
        <CircularProgress size="50px" />
        <Typography sx={{ fontSize:18, mt:1 }} >{ titulo }</Typography>
    </Box>

  )


}
