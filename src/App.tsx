import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lessons {
  id: string;
  title: string;
};

function App() {
  const { data } = useQuery<{ lessons: Lessons[] }>(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <Event />
  )
}

export default App
