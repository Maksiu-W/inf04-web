const Nazwa_Kategorii = {gory: 'Góry', morze: 'Morze', miasto: 'Miasto'}
const Kolor_Kategorii = {gory: 'success', morze: 'primary', miasto: 'dark'}

function PhotoCard({title, description, category, image, alt}) {
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
                </div>
            </div>
        </>
    )
}