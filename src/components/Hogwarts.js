import data from "../data.json"
import HogwartsCard from "./HogwartsCard"

export default function Hogwarts(){

  const students = data.students
  const professors = data.professors

  console.log("students", students)
  console.log("professors", professors)

  return (
    <div>
      <h3>Students</h3>
      {students.map((student, i) => {
        return (
          <div key={student.id}>
            <HogwartsCard 
              firstName={student.firstName}
              lastName={student.lastName}
              house={student.house}
              age={student.age}
              playsQuidditch={student.playsQuidditch}
            />
            {/* <p></p>
            <h5>{student.firstName} {student.lastName}</h5>
            <p>{student.house}</p>
            <p>{student.playsQuidditch ? "plays Quidditch" : "doesn't play Quidditch"}</p> */}
          </div>
        )
      })}
      <h3>Professors</h3>
      {professors.map((professor, index) => {
        return (
          <div key={index}>
            <p>{professor.name}</p>
          </div>
        )
      })}
    </div>
  )
}