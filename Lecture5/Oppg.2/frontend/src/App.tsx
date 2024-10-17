import { useEffect, useState } from "react";
import Grid from "./comonents/Grid";
import Total from "./comonents/Total";
import { StudentProps } from "./comonents/Types";
import AddStudentForm from "./comonents/AddStudentForm";
import Filter from "./comonents/Filter";

const allStudents = [
  {
    id: "V",
    name: "Vilde Pedersen"
  },
  {
    id: "O",
    name: "Ola Norman"
  },
  {
    id: "K",
    name: "Kari Norman"
  }
]

function App() {
  const [student, setStudent] = useState<StudentProps[]>(allStudents ?? [])
  const [filter, setFilter] = useState("-")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // const [headLine, setHeadLine] = useState("Alle studenter")

  useEffect(() => {
    const fetchStudent = async () => {
      try{
        // TODO: No hardcoded url. Move to config in config/index.ts
        const response = await fetch("http://localhost:3999/api/students")
        const data = await response.json()
        setStudent(data)
      } catch (error) {
        console.error(error)
        setError("feilet")
      } finally {
        setLoading(false)
      }
    }
    fetchStudent()
  }, [])

  const options = Array.from(
    student
      .reduce((acc, stud: StudentProps) => {
        const name = stud.name.trim().split(" ")[0]
        if (acc.has(name)) return acc

        return acc.set(name, {
          ...stud,
          value: name.toLowerCase(),
          label: name,
        })
      }, new Map())
      .values()
  )

  // const options = Array.from(
  //   new Set(
  //     students.map((student) => student.name.trim().split(" ")[0].toLowerCase())
  //   )
  // );

  const onAddStudent = (student: Omit<StudentProps, "id">) => {
    setStudent((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
  };

  const onRemoveStudent = (id: string) => {
    setStudent((prev) => prev.filter((stud) => stud.id !== id));
  };

  // const filterStudents = (status: string) => {
  //   if (status === "Alle") {
  //     setFilterStudent(student)
  //   } else {
  //     setFilterStudent(student.filter((stud) => stud.name === status))
  //   }
  //   setHeadLine(`${status}`)
  // }


  const onFilterChange = (filter: string) => {
    setFilter(filter)
  }

  const filterdStudents = student.filter((stud) => 
  filter !== "-" ? stud.name.toLowerCase().includes(filter) : true
  )



  return (
    <main>
      <Filter filter={filter} onFilterChange={onFilterChange} options={Object.values(options)}/> 
      <Grid student={filterdStudents} onRemoveStudent={onRemoveStudent}>
        <AddStudentForm onAddStudent={onAddStudent} />
      </Grid>
      <Total total={student.length} />
      {/* <Total student={student} /> */}
    </main>
  )
}

export default App;
