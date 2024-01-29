
import { IconButton, Tooltip } from "@mui/material"
import { Settings } from "@mui/icons-material"
import { iconos } from "../../../data"




export const TooltipAndIcon = ({ titulo, icono, onClick }: any) => {


    return (

        <Tooltip title={titulo} placement="top">
            <IconButton sx={{ color:"primary.main"}} 
                    onClick={ onClick }>
                { iconos[icono] || <Settings /> }
            </IconButton>
        </Tooltip>


    )



}
