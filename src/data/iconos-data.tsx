
import { Settings, ContentPaste, RequestQuoteOutlined, FolderOpenOutlined, ImageOutlined,  Visibility, Print, Paid, PersonOutlineOutlined, EmailOutlined, TaskAltOutlined, CommentOutlined, PowerSettingsNew, Dashboard, SupervisedUserCircle, QrCodeScanner, Category, ThreeP, LockOpen, Image, PictureAsPdf, MonetizationOn, Delete, Downloading } from '@mui/icons-material';


interface PropsIconos {
    [key: string]: JSX.Element; 
}



export const iconos: PropsIconos = {
    setting: <Settings />,
    existencia: <ContentPaste />,
    precio: <RequestQuoteOutlined />,
    folder: <FolderOpenOutlined />,
    imagen: <ImageOutlined />,

    ver: <Visibility fontSize="small" />,
    imprimir: <Print fontSize="small" />,
    abono: <Paid fontSize="small" />,
    password: <LockOpen fontSize="small" />,
    comentario2: <CommentOutlined fontSize="small" />,
    image: <Image fontSize="small" />,
    pdf: <PictureAsPdf fontSize="small" />,
    money: <MonetizationOn fontSize="small" />,
    eliminar: <Delete fontSize="small" />,
    descargar: <Downloading fontSize="small" />,

    inicio: <Dashboard />,
    usuario: <SupervisedUserCircle />,
    producto: <QrCodeScanner />,
    category: <Category />,
    proveedor: <ThreeP />,

    personal: <PersonOutlineOutlined sx={{fontSize:'17px'}}/>,
    email: <EmailOutlined sx={{fontSize:'17px'}}/>,
    tarea: <TaskAltOutlined sx={{fontSize:'17px'}}/>,
    comentario: <CommentOutlined sx={{fontSize:'17px'}}/>,
    power: <PowerSettingsNew sx={{fontSize:'17px'}}/>,

};