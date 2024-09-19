import Avatar from "./Avatar"
import { StudentProps } from "./Types"

export default function Student(props: StudentProps) {
    const {id, name} = props
    return (
        <article>
            <Avatar name={name} />
            <h2 className="studentName" id={id}>{name}</h2>
        </article>
    )
}
