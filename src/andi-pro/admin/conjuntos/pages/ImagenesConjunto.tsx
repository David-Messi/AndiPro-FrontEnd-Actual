

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, CardActionArea } from '@mui/material';
import { DisenioPaginas } from "../../../layouts"
import { descargarArchivo, getEnvVariables } from '../../../../helpers';
import { useAdminStore, useModalesStore, useUploadStore } from '../../../../hooks';
import { ModalVerImagen } from '../../../components';



const imagenes = [
    { name: 'admin', title: 'Logo', url: 'xD' },
    { name: 'informeMes', title: 'Informe Mes', url: 'xD' },
    { name: 'factura', title: 'Factura', url: 'xD' },
]



export const ImagenesConjunto = () => {

    const { VITE_APP_API_URL: url } = getEnvVariables();

    const { id } = useParams();
    const { activeAdmin, setActiveAdmin, deleteAdmin } = useAdminStore();
    const { subirImagenTodoCategoria } = useUploadStore();
    const { toggleStartVerImagen } = useModalesStore();


    const [category, setCategory] = useState('')
    const [datos, setDatos] = useState(imagenes);
    const [cargar, setCargar] = useState<any>(null);
    const [images, setImages] = useState('');



    useEffect(() => {
        if(id){
            setActiveAdmin(id);
        }
        return () => {
            deleteAdmin();
        }
    }, [id])



    useEffect(() => {
        if( activeAdmin ){
            setDatos([
                { name: 'logo', title: 'Logo', url: activeAdmin.logo },
                { name: 'informeMes', title: 'Informe Mes', url: activeAdmin.informeMes },
                { name: 'factura', title: 'Factura', url: activeAdmin.factura },
            ]);
        }
    }, [activeAdmin, cargar])



    // Subir Imagen de Abono
    const handlePictureClick = async( cat: any ) => {
        setCategory(cat);
        document.querySelector<HTMLInputElement>('#fileSelector')?.click();
    }

    

    const handleFileChange = async( e: any ) => {
        const file = e.target.files[0];
        if( file && category ) {
            const respuesta = await subirImagenTodoCategoria(id || activeAdmin.id, category, file);
            setCargar(respuesta);
        }
    }


    const handleDescargar = (img: any) => {
        const ver = `${ url }/uploads/${ img.name }/${ img.url }`
        descargarArchivo(ver, img.name);
    }



    const handleVerImg = ( img: any ) => {
        toggleStartVerImagen(true);
        setImages(`${ url }/uploads/${ img.name }/${ img.url }`)
    }






    return (

        <DisenioPaginas titulo="Subir Imagenes" url="conjunto/list" add={false} subtitulo="Información del Conjunto">

            <Grid container spacing={4} sx={{ padding:5, justifyContent:'center' }}>

            {
            datos.map( s => (
                <Grid item xs={12} sm={6} md={4} key={s.name} >
                    <Card sx={{ maxWidth: 345, minHeight: 210 }}>
                        <CardActionArea onClick={ () => handleVerImg(s) }>
                            <CardMedia
                                // component="img"
                                component={ (s.url?.split('.').includes('pdf')) ? 'iframe' : 'img' }
                                alt={`Imagen ${s.title}`}
                                sx={{ objectFit:'cover', height:190, width:'100%', overflow:'hidden' }}
                                // image={`${ baseUrl }/uploads/${ s.name }/${ s.url }`}
                                image={`${url}/uploads/${s.name}/${s.url}`}
                            />
                            <CardContent>
                                <Typography sx={{ textAlign:'center' }} variant="h5">
                                    { s.title }
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardActions sx={{ justifyContent:'center' }} >
                            <Button size="small" variant="contained" color='primary' onClick={ () => handlePictureClick(s.name) } >
                                Subir Imagen
                            </Button>
                            <Button size="small" variant="contained" color='primary' onClick={ () => handleDescargar(s) } >
                                Descargar
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
            ))
            }
            </Grid>


            <input type="file" 
                id="fileSelector"
                className="boton-file"
                onChange={ handleFileChange }
                name="file"
            />


            <ModalVerImagen url={images} />


        </DisenioPaginas>

    )

    
}
