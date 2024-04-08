import css from "../ImageCard/ImageCard.module.css"

export default function ImageCard({data}) {
    return(
        <div >
            <img className={css.image} src={data.urls.small} alt={data.alt_description} />
        </div>
    )
}