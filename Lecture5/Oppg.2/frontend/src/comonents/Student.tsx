import { useState } from "react";
import Avatar from "./Avatar"
import { StudentProps } from "./Types"

export default function Student(
    props: StudentProps & {
        onRemoveStudent: (id: string) => void;
    },) {
        const [showRemove, setShowRemove] = useState(false);
        const { id, name, onRemoveStudent } = props;
        const updateShowState = () => {
            setShowRemove(true);
        };
    return (
        <article>
             <div
            onMouseOver={updateShowState}
            onMouseLeave={() => setShowRemove(false)}
        >
            <Avatar name={name} />
            <p className="student-name">{name}</p>
            {showRemove ? (
                <button type="button" onClick={() => onRemoveStudent(id)}>
                    Slett
                </button>
            ) : null}
        </div>
        </article>
    )
}
