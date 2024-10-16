type ContactType = {
    email: string
}

export default function Contact(props: ContactType) {
    const {email} = props
    
    return(
        <>
            <h2>{email}</h2>
        </>
    )
}