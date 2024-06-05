import { Card } from "reactstrap"

export const Event = ({singleEvent}) => {
  return (
    <Card className="my-2"
    color="light"
    style={{
      width: '18rem'
    }}>
        <h2>{singleEvent.title}</h2>
        <div>Location: {singleEvent.location}</div>
        <div>Date: {singleEvent.date}</div>
    </Card>
  )
}



//[
//     {
//     "id": 1,
//     "userId": 1,
//     "title": "Mary's Birthday",
//     "date": "06/24/2024",
//     "location": "Red Lobster"
//     }
//     ]