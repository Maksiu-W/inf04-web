const Nazwa_Kategorii = {gory: 'Góry', morze: 'Morze', miasto: 'Miasto'}
const Kolor_Kategorii = {gory: 'success', morze: 'primary', miasto: 'dark'}

function PhotoCard({id, title, description, category, image, alt}) {
    return(
        <>
            <div className="card h-100 shadow-sm">
                <img src={image} className="card-img-top" alt={alt}></img>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title h5">{title}</h3>
                    <p>
                        <span className={`badge text-bg-${Kolor_Kategorii[category]}`}>
                            {Nazwa_Kategorii[category]}
                        </span>
                    </p>
                    <p className="card-text text-body-secondary">
                        {description}
                    </p>
                    <button type="button" className="btn btn-outline-primary mt-auto" data-bs-toggle="modal" data-bs-target={`#zdjecie${id}`}>Powiększ</button>
                </div>
            </div>
        </>
    )
}

export default PhotoCard