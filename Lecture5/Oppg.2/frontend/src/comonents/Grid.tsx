import { PropsWithChildren } from "react";
import Student from "./Student"
import { StudentProps } from "./Types"
// import AddStudentForm from "./AddStudentForm"

type GridProps = {
    children: React.ReactNode;
    student: StudentProps[]
    onRemoveStudent: (id: string) => void;
    // handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Grid(props: PropsWithChildren<GridProps>) {
    // const { students, onAddStudent, onRemoveStudent, children } = props;
    const { student, onRemoveStudent, children } = props;

    return (
        <section>
            <article className="grid">
                {student?.map((stud: any) => (
                    <Student key={stud.id} name={stud.name} id={stud.id} onRemoveStudent={onRemoveStudent}/>
                ))}
            </article>
            {/* <AddStudentForm onAddStudent={onAddStudent} /> */}
            {children}
        </section>
    )
}
