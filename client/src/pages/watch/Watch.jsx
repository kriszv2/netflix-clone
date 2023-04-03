import "./watch.scss"
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch(){
    return(
        <div className="watch">
            <div className="back">
                <ArrowBackOutlinedIcon/>Home
            </div>
            <video src="" className="video" autoPlay progress controls></video>
        </div>
    )
}