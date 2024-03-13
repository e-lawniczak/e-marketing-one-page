import { PageWrapper } from "../components/PageWrapper"
import { Advertisement } from "./Advertisment"

export const AskUs = () => {
    return <PageWrapper>
        <Advertisement type="horizontalAd" />
        <h1>Masz pytanie? Zapytaj!</h1>

        <form className="contact-form">
            <div className="inputs">
                <div>
                    <input type="text" placeholder="Temat..." />
                    <textarea placeholder="Treść..."></textarea>
                </div>
                <div>
                    <input type="email" placeholder="example@email.com" />
                </div>
            </div>
            <button>Wyślij</button>
        </form>
        <h3>FAQ</h3>
        <div className="faq">
            <p><b>Gdzie dostępny jest Liquid Energy?</b></p>
            <p>Liquid Energy znajdziesz na półkach w sklepach Żabka, Lidl, Duży Ben, Chata Polska oraz Kaufland.</p>
            <p><b>Czy Liquid Energy jest dostępne w innych miejscach?</b></p>
            <p>Liquid Energy będzie partnerem wielu wydarzeń w przyszłości. Nabycie naszego produktu będzie możliwe w każdym miejscu, w którym dzieje się takie wydarzenie!
                <br />
                Zapisz się do newslettera aby być na bierząco!
            </p>
            <p><b>Czy liquid energy jest szkodliwe dla zdrowia?</b></p>
            <p>Nie! W przeciwieństwie do innych napojów energetycznych, Liquid Energy bazuje na naturalnych składnikach. W wyniku badań przeprowadzonych przez Europejski Instytut Żywienia spożywanie go nie ma szkodliwych efektów na zdrowie.</p>
            <p><b>Jak mogę wziąć udział w konkursie Liquid Energy?</b></p>
            <p>Aby skorzystać z promocji w sieci sklepów Żabka wymagane jest zapisanie siędo newslettera. Następnym krokiem jest zdobycie wyniku wyższego niż 2000 w grze dostępnej na naszej stronie. <br />
                Następnie wystarczy pokazać kod QR otrzymany na maila przy kasie.<br />To wszystko!</p>
        </div>
    </PageWrapper>;
}

