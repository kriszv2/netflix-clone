import { PlayArrow } from "@mui/icons-material"
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import "./listItem.scss"
import { useState } from "react";

export default function ListItem({index}){

    const [isHovered, setIsHovered] = useState(false)
    

    return(
        <div
      className="listItem"
      style={{ left: isHovered && index * 325 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
            <img src="https://www.thewrap.com/wp-content/uploads/2022/06/joker.jpg" alt="" />
            {isHovered && (
                <>
                <iframe src="https://www.youtube.com/embed/zAGVQLHvwOY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow className="icon"/>
                    <AddIcon className="icon"/>
                    <ThumbUpOutlinedIcon className="icon"/>
                    <ThumbDownOffAltOutlinedIcon className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>1 hour 14 mins</span>
                    <span className="limit">+18</span>
                    <span>2020</span>
                </div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero 
                expedita placeat mollitia repellendus cupiditate molestias iste soluta vero temporibus et quia, illo qui id
                 possimus nemo fugiat doloremque illum ratione.
                 </div>
                 <div className="genre">Drama</div>
            </div>
            </>
            )}
            
        </div>
    )
}