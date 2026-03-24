const SearchTaskForm = (props) => {
  const {
    onSearchInput,
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
        onInput = {(event) => {onSearchInput(event.target.value)}}
      />
    </form>
  )
}

import Field from "./Field.jsx";

export default SearchTaskForm