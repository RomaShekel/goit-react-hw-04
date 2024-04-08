import css from "../LoadMoreBtn/LoadMoreBtn.module.css"

export default function LoadMoreBtn({handlePage}) {
    return(
        <button onClick={handlePage} className={css.button}>Load more</button>
    )
}