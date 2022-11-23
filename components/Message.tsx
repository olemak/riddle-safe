interface IMessageProps {
    dirty: boolean;
    correct: boolean;
}

export default function Message({correct, dirty}: IMessageProps) {

    if (correct) {
        return (
            <div class="message message--success">
                <h3>Gratulerer!</h3>
                <p>Du har klart å åpne jernskapet.</p>
                <p>
                    Løsningsordet er: <em><i>JABBERSLYTH</i></em>
                </p>
        </div>
        )
    }

    if (dirty) {
        return (
            <div class="message message--error">
                <h3>Det var feil!</h3>
                <p>
                    Øk din <em>"attention rating"</em> med 1 poeng.
                </p>
            </div>
        )
    }

    return null;
}