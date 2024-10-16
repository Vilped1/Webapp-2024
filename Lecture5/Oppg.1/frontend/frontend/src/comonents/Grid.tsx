// import { PropsWithChildren } from "react";
import Student from "./Student"
import { StudentProps } from "./Types"
// import AddStudentForm from "./AddStudentForm"

type GridProps = {
    children: React.ReactNode;
    student: StudentProps[]
    onRemoveStudent: (id: string) => void;
    // handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Grid({ children, student, onRemoveStudent }: GridProps) {
    // export default function Grid(props: PropsWithChildren) {
    //     const{childen} = props

    console.log("Studenter", student)

    return (
        <section>
            <article className="grid">
                {student?.map((stud: any) => (
                    <Student key={stud.id} name={stud.name} id={stud.id} />
                ))}
            </article>
            {/* <AddStudentForm onAddStudent={onAddStudent} /> */}
            {children}
        </section>
    )
}
