

import { Box, Backdrop, Modal, CardMedia } from '@mui/material';
import { useModalesStore } from '../../../hooks';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    minHeight: 500,
    bgcolor: '#000000',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};




export const ModalVerImagen = ({ url }: any) => {


    const { modalImg, toggleStartVerImagen } = useModalesStore();


    const handleCerrarModal = () => {
        toggleStartVerImagen(false);
    }



    return (

        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={ modalImg }
                onClose={ handleCerrarModal }
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Box sx={style}>
                    <div className="contiene-img">
                    {
                    (url) &&
                    <CardMedia
                        component={ (url?.split('.').includes('pdf')) ? 'iframe' : 'img' }
                        alt="Imagen"
                        sx={{ height:400 }}
                        image={`${url}`}
                    />
                    }
                    </div>
                </Box>
            </Modal>
        </>
    );

}