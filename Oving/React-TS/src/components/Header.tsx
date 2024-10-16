type HeaderType = {
    student: string
    degree: string
    points: number
}

export default function Header(props: HeaderType) {
    const {student, degree, points} = props
    return(
        <header>
            <h1>{student}</h1>
            <p>{degree}</p>
            <p>{points}</p>
        </header>
    )
}