// import { StudentProps } from "./Types"

import { ChangeEvent } from "react";

type FilterProps = {
    // student: StudentProps[]
    // filterStudent: any
    // headLine: any
    // handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    filter: string
    options: {id: string; label: string; value:string}[]
    onFilterChange: (filter:string) => void
}

export default function Filter({ filter, options, onFilterChange}: FilterProps) {

    const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onFilterChange(event.target.value)
    }

    return (
        <section>
            {/* <h2>{headLine}</h2> */}
            {/* <select name="status" id="status" onChange={handleFilterChange}>
                <option value="Alle">Alle studenter</option>
                <option value="Fullført">Fullførte prosjekter</option>
                <option value="Pågående">Pågående prosjekter</option>
            </select> */}
            <select value={filter} onChange={handleFilterChange}>
                {[{id: "default", label:"-", value: ""}, ...options].map(({id, label, value}) => (
                        <option key={id} value={value}>
                            {label}
                        </option>
                    )
                )}
            </select>
        </section>
    )
}