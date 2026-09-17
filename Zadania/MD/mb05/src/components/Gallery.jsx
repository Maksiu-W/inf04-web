import photos from "../data/photos.json"
import PhotoCard from "./PhotoCard.jsx"

function Gallery() {
    return(
        <>
            <div id="Galeria" className="row g-4">
                {photos.map(photo => {
                    <div key={photo.id} className="col-12 col-md-6 col-lg-4">
                        <PhotoCard {...photo}></PhotoCard>
                    </div>
                })}
            </div>
        </>
    )
}

export default Gallery