import Experience from "./Experience";

type ExperiencesType = {
    experienceOne: string
    experienceTwo: string
}

export default function Experiences(props: ExperiencesType) {
    const {experienceOne, experienceTwo} = props
    return (
      <div>
        <Experience description={experienceOne} />
        <Experience description={experienceTwo} />
      </div>
    )
  }