import { PageWrapper } from "../components/PageWrapper"
import { Advertisement } from "./Advertisment"

export const AskUs = () => {
    return <PageWrapper>
        <Advertisement type="horizontalAd" />
        <h1>Masz pytanie? Zapytaj!</h1>

        <form className="contact-form content-1000">
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
            <div className="content-1000">
                <p><b>Gdzie dostępny jest PRIDA?</b></p>
                <p>PRIDA znajdziesz na półkach w sklepach Żabka, Lidl, Duży Ben, Chata Polska oraz Kaufland.</p>
            </div>
            <div className="content-1000">
                <p><b>Czy PRIDA jest dostępne w innych miejscach?</b></p>
                <p>PRIDA będzie partnerem wielu wydarzeń w przyszłości. Nabycie naszego produktu będzie możliwe w każdym miejscu, w którym dzieje się takie wydarzenie!
                    <br />
                    Zapisz się do newslettera aby być na bierząco!
                </p>
            </div>
            <div className="content-1000">
                <p><b>Czy PRIDA jest szkodliwe dla zdrowia?</b></p>
                <p>Nie! W przeciwieństwie do innych napojów energetycznych, PRIDA bazuje na naturalnych składnikach. W wyniku badań przeprowadzonych przez Europejski Instytut Żywienia spożywanie go nie ma szkodliwych efektów na zdrowie.</p>
            </div>
            <div className="content-1000">
                <p><b>Jak mogę wziąć udział w konkursie PRIDA?</b></p>
                <p>Aby skorzystać z promocji w sieci sklepów Żabka wymagane jest zapisanie siędo newslettera. Następnym krokiem jest zdobycie wyniku wyższego niż 2000 w grze dostępnej na naszej stronie. <br />
                    Następnie wystarczy pokazać kod QR otrzymany na maila przy kasie.<br />To wszystko!</p>
            </div>
            <div className="content-1000">
                <p><b>Jak podjąć współpracę z firmą PRIDA</b></p>
                <p>Jeśli chcesz podjąć z nami współpracę lub chcesz abyśmy znaleźli się na jednym z eventów - napisz do nas! Odezwiemy się do Ciebie i ustalimy szczegóły spotkania, na którym będziemy rozmawiać o współpracy.</p>
            </div>
        </div>
    </PageWrapper>;
}

