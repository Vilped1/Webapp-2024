type ExperienceType = {
    description: string
}

export default function Experience(props: ExperienceType) {
    const {description} = props
    return(
        <section>
            <p>{description}</p>
        </section>
    )
}