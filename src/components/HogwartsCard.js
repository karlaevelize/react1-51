export default function HogwartsCard(props){
  
  return(
    <div>
      <h5>{props.firstName} {props.lastName}</h5>
      <p>{props.house}, {props.age} years old</p>
      <p>{props.playsQuidditch ? "plays Quidditch" : "doesn't play Quidditch"}</p>
    </div>
  )
}