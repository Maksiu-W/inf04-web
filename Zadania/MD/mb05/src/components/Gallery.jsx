import { Fragment } from "react"
import photos from "../data/photos.json"
import PhotoCard from "./PhotoCard"
import PhotoModal from "./PhotoModal"

function Gallery() {
    return(
        <>
            <div id="Galeria" className="row g-4">
                {photos.map(photo => (
                    <Fragment key={photo.id}>
                        <div className="col-12 col-md-6 col-lg-4">
                            <PhotoCard {...photo}></PhotoCard>
                        </div>
                        <PhotoModal {...photo}></PhotoModal>
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default Gallery