import { Unity, useUnityContext } from "react-unity-webgl";
import { PageWrapper } from "../components/PageWrapper";
import { Advertisement } from "./Advertisment";

export const GamePage = () => {


    return <PageWrapper>
        <Advertisement type="horizontalAd" />
        <h1>Weź udział w konkursie i zagraj w naszą grę!</h1>
        <p>Dla uczestników konkursu mamy specjalną ofertę. <br /> Kup 2 napoje PRIDA i otryzmaj 2 dodatkowe ZA DARMO! </p>
        <p><b>Jak skorzystać?</b></p>
        <ol className="how-to">
            <li>Zapisz się do newslettera</li>
            <li>Pobierz i zagraj w grę</li>
            <li>Osiągnij wynik wyższy niż 4000</li>
            <li>Idź na zakupy do najlbliższej Żabki</li>
            <li>Odbierz kod QR na mailu i pokaż go przy kasie</li>
            <li>Ciesz się PRIDA!</li>
        </ol>
        <div className="game">
            <a href="./NinjaFrogAdventures.zip">POBIERZ GRĘ</a>
        </div>
        <div className="bonus">
            <p>
                <h2>
                    Konkurs bonusowy
                </h2>
            </p>
            <p>
                Dodatkowo, 3 najwyższe wyniki otrzymają nagrod rzeczowe.
            </p>
            <ol className="bonus-contest">
                <li>Konsola PlayStation5</li>
                <li>Konsola XBox Series S</li>
                <li>Zestaw czekolady Lint Lindor</li>
            </ol>
        </div>
    </PageWrapper>;
}