import ImageCard from "../ImageCard/ImageCard"
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({photosData, setDataForModal, setIsOpen}) {
    
        return(
        <ul className={css.galleryDiv}>
            {photosData.map((data) => {
                return (
                    <li key={data.id} className={css.li}>
                <ImageCard data={data} setDataForModal={setDataForModal} setIsOpen={setIsOpen}/>
                </li>
                )
            })}
</ul>
)}
