import '../styles/contact.css'

function Contact() {
    return (
        <div style={{width : "50%"}}>
            <form className="formContact"  onSubmit={submit}>
                <input type='text' name='nome' defaultValue='Tapez votre texte' />
                <input type='text' name='phone' defaultValue='Tapez votre texte' />
                <textarea></textarea>
                <button type='submit'>Entrer</button>
            </form>
        </div>
    )
}


function submit() {
    alert("Supprimer : ")
}

export default Contact