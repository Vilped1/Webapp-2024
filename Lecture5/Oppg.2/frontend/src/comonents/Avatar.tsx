type AvatarProps = {
    name: string
}

// Kan hete data, men han foretrekker props
export default function Avatar(data: AvatarProps) {
    const {name} = data

    /// Thor sin versjon
    /// Lager en array av alle bokstavene i navnet og henter ut det første listepunktet
    /// const FirstLetter = Array.from(name[0])

    // Marius sin versjon!!
    const FirstLetter = name.split("").join("").toUpperCase().slice(0, 1)
    return(
        /// <p className="avatar">{FirstLetter}</p>

        // Maruis sin versjon!!
        <p className="avatar">{FirstLetter}</p>

        // Anne sin versjon?!
        // <p className="avatar">{name[0]}</p>?!
    )
}
