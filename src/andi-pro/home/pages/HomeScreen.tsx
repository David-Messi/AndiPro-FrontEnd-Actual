

import { Box, Toolbar } from "@mui/material"
import { FooterComponents, FormulaComponents, FormularioLLamada, NavBarComponent, NuestroEquipo, NuestrosClientes, QuienesSomos, SeccionTituloLogo, SeviciosComponent } from "../components"

import { Element } from 'react-scroll';




export const HomeScreen = () => {


    return (
        

        <>
            <NavBarComponent />
            <Toolbar />
            <Box component="main" sx={{width:'100%', minHeight:'100vh', background:'white'}}>
                
                <Element name="component1">
                    <SeccionTituloLogo />
                </Element>

                <Element name="component2">
                    <QuienesSomos />
                </Element>

                <Element name="component3">
                    <SeviciosComponent />
                </Element>

                <Element name="component4">
                    <NuestrosClientes />
                </Element>

                <NuestroEquipo />

                <Element name="component5">
                    <FormulaComponents />
                </Element>


                <FormularioLLamada />


                <Element name="component6">
                    <FooterComponents />
                </Element>


            </Box>
        </>
    )
}
