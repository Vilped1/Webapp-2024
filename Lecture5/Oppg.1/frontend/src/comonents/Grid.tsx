import { useState } from "react"
import Student from "./Student"
import { StudentProps } from "./Types"

type GridProps = {
    students: StudentProps[]
}

export default function Grid(props: GridProps) {
    // const {id, name} = props
    const [student, setStudent] = useState(props.students ?? [])

    return(
        <article className="grid">
            {student?.map(stud => (
                <Student key={stud.id} name={stud.name} id={stud.id} />
            ))}
        </article>
    )
}