import { useParams } from "react-router-dom"

export default function HelloPage () {
  const params = useParams()
  if (params.username == null) {
    return <>No username</>
  }
  const result = params.username + 1
  return (
    <h2>Hello {result}</h2>
  )
}