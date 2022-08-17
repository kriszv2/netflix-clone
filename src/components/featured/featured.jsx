import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "./featured.scss"

const Featured = () =>{
return(<div className="featured">
    <img  src="https://images.pexels.com/photos/2398356/pexels-photo-2398356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1" alt="" />
    <div className="info">
        <img src="https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2021%2F05%2FStar-Wars-Posters-composite.jpg" alt="" />
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

export default Featured;