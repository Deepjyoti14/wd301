import TaskCard from "./TaskCard";
import './TaskCard.css'

function App() {

  return (
    <div>
      <div className="TaskItem">
        <h1>Completed Task</h1>
        <TaskCard title = "Build the website with static content" />
        <TaskCard title = " Add a blog" />
      </div>
      <div className="TaskItem">
        <h1>Pending Task</h1>
        <TaskCard title = "Design the mockup" />
        <TaskCard title = " get approval from principal" />
      </div>
    </div>
  )
}


export default App;
