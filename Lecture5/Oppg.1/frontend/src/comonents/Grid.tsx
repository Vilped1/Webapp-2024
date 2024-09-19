import { useState } from "react"
import Student from "./Student"
import { StudentProps } from "./Types"
import AddStudentForm from "./AddStudentForm"

type GridProps = {
    students: StudentProps[]
}

export default function Grid(props: GridProps) {
    // const {id, name} = props
    const [student, setStudent] = useState<StudentProps>(props.students ?? [])

    const onAddStudent = (student: {name: string}) => {
        setStudent((prev) => [...prev, {id: crypto.randomUUID(), ...student}])
    }

    return(
        <section>
            <article className="grid">
                {student?.map(stud => (
                    <Student key={stud.id} name={stud.name} id={stud.id} />
                ))}
            </article>
            <AddStudentForm onAddStudent={onAddStudent} />
        </section>
    )
}
