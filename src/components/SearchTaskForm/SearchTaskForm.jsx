import {useContext} from "react";
import Field from "../Field/Field.jsx";
import {TasksContext} from "../../Context/TasksContext.jsx";

const SearchTaskForm = (props) => {
  const { styles } = props
  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TasksContext)



  return (
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className={styles.field}
        label="Search Task"
        id="search-task"
        type="search"
        onInput = {(event) => {setSearchQuery(event.target.value)}}
        value={searchQuery}

      />
    </form>
  )
}


export default SearchTaskForm