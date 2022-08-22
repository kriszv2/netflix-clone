import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss"

export default function Featured({type}) {
return(<div className="featured">{
    type && (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="animation">Animation</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="documentary">Documentary</option>
                <option value="drama">Drama</option>
                <option value="fantasy">Fantasy</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
            </select>
        </div>
    )
}
    <img  src="https://images.pexels.com/photos/2398356/pexels-photo-2398356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" alt="" />
    <div className="info">
        <img src="https://goggler.my/wp-content/uploads/2019/12/JM2_INTL_30Sht_BRIDGE_03-e1575889045252.jpg" alt="" />
    <span className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nemo minus accusamus eos quas, id itaque consequuntur necessitatibus assumenda, neque mollitia esse voluptas nulla obcaecati animi ab totam aliquid rem.</span>
    <div className="buttons">
        <button className="play">
            <PlayArrowIcon />
            <span>Play</span>
        </button>
        
        <button className="more">
        <InfoOutlinedIcon />
        <span>Info</span>
        </button>
        
    </div>
    </div>
    </div>
)
}
