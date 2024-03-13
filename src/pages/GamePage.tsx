import { Unity, useUnityContext } from "react-unity-webgl";
import { PageWrapper } from "../components/PageWrapper";
import { Advertisment } from "./Advertisment";

export const GamePage = () => {


    return <PageWrapper>
        <Advertisment type="horizontalAd" />
        <h1>Weź udział w konkursie i zagraj w naszą grę!</h1>
        <p>[tu będzie link do gry]</p>
    </PageWrapper>;
}