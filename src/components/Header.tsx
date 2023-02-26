import { useState } from "react"

type Props = {
  title: string
}


const Header = ({ title }: Props) => {
  const [likes, setLikes] = useState(0)

  const increment = () => {
    setLikes(likes + 1)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={increment}>Likes ({likes})</button>
    </div>
  )
}

export default Header