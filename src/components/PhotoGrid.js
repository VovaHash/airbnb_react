import Photos from '../images/photo-grid.png'
import "./PhotoGrid.css"

export default function PhotoGrid(){
    return (
        <section>
            <img className='photogrid--photos' src={Photos}/>
        </section>
    )
}