import Toolbar from "./Toolbar"

export default function Card({color, title, text}) {
  return (
    <div style={{ background: color }} className="">
      <h2>{title}</h2>
      <p>{text}</p>
      <Toolbar />
    </div>
  )
}