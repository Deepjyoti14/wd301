import './TaskCard.css'

const TaskCard = (props) => {
    console.log(props)
    return (
      <div className='TaskItem'>
        <h2>{props.title}</h2>
        <p>Completed on: ..</p>
        <p>Due date: ..</p>
      </div>
    )
  }

  export default TaskCard