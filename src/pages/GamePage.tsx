import { Unity, useUnityContext } from "react-unity-webgl";
import { PageWrapper } from "../components/PageWrapper";
import { Advertisement } from "./Advertisment";

export const GamePage = () => {


    return <PageWrapper>
        <Advertisement type="horizontalAd" />
        <h1>Weź udział w konkursie i zagraj w naszą grę!</h1>
        <p>Dla uczestników konkursu mamy specjalną ofertę. <br /> Kup 2 napoje LiquidEnergy i otryzmaj 2 dodatkowe ZA DARMO! </p>
        <p><b>Jak skorzystać?</b></p>
        <ol className="how-to">
            <li>Zapisz się do newslettera</li>
            <li>Pobierz i zagraj w grę</li>
            <li>Osiągnij wynik wyższy niż 2000</li>
            <li>Idź na zakupy do najlbliższej Żabki</li>
            <li>Odbierz kod QR na mailu i pokaż go przy kasie</li>
            <li>Ciesz się LiquidEnergy!</li>
        </ol>
        <div className="game">
            [tu będzie link do gry czy coś]
        </div>
    </PageWrapper>;
}