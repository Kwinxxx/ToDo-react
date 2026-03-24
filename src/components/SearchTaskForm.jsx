const SearchTaskForm = (props) => {
  const {
    searchQuery,
    setSearchQuery,
  } = props



  return (
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className="todo__field"
        label="Search Task"
        id="search-task"
        type="search"
        onInput = {(event) => {setSearchQuery(event.target.value)}}
        value={searchQuery}

      />
    </form>
  )
}

import Field from "./Field.jsx";

export default SearchTaskForm