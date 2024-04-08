import css from "../SearchBar/SearchBar.module.css"

export default function SearchBar({setTopic, toast}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.elements.input.value.trim() === '') {
      toast.error('Please print a word')
      return;
    }
    setTopic(e.target.elements.input.value);
    e.target.reset();
  }
    return (
    <header>
        <form onSubmit={handleSubmit} className={css.form}>
          <input className={css.input}
          name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.button}>Search</button>
        </form>
      </header>
      )
}
