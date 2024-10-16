// import { StudentProps } from "./Types"

// type TotalProp = {
//     student: StudentProps[]
// }

// export default function Total({student}: TotalProp) {
//     return( 
//         <p>{student.lenght}</p>
//     )
// }

export default function Total({total}: Readonly<{total: number}>) {
    if (total === 0) return null

    return( 
        <section>
        <p>Antall studenter: {total}</p>
        </section>
    )
}