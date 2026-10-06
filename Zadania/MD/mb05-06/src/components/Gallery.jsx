import { Fragment } from "react"
import PhotoCard from "./PhotoCard"
import PhotoModal from "./PhotoModal"

function Gallery({zdjecia, onUsun, onPrzelacz}) {
    return(
        <>
            <div id="Galeria" className="row g-4">
                {zdjecia.map(zdjecie => (
                    <Fragment key={zdjecie.id}>
                        <div className="col-12 col-md-6 col-lg-4">
                            <PhotoCard {...zdjecie} onUsun={() => onUsun(zdjecie.id)} onPrzelacz={() => onPrzelacz(zdjecie.id)}></PhotoCard>
                        </div>
                        <PhotoModal {...zdjecie}></PhotoModal>
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default Gallery