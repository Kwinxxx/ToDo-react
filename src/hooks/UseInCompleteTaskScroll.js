import { useRef } from "react";

const UseInCompleteTaskScroll = (tasks) => {
  const firstInCompleteTaskRef = useRef(null)
  const firstInCompleteTaskId = tasks.find((task) => !task.isDone)?.id

  return {
    firstInCompleteTaskRef,
    firstInCompleteTaskId,
  }
}

export default UseInCompleteTaskScroll