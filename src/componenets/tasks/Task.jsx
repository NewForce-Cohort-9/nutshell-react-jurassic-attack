import { Card } from "reactstrap"

export const Task = ({singleTask}) => {
  return (
    <Card className="my-2"
    color="primary"
    inverse
    style={{
      width: '18rem'
    }}>
      <h3>{singleTask.task}</h3>
      <div>Complete By: {singleTask.completeByDate}</div>
    </Card>
  )
}
