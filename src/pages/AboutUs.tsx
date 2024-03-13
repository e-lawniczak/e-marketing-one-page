import { PageWrapper } from "../components/PageWrapper"
import { Advertisement } from "./Advertisment"

export const AboutUs = () => {
    return <PageWrapper>
        <Advertisement type="horizontalAd" />
        <h1>O nas</h1>
        <p>LiquidEnergy to nowa firma na rynku napojów energetycznych. Oferujemy zupełnie nową jakość produktu. Dzięki najnowszym osiągnięciom technologicznym byliśmy w stanie stworzyć napój LiquidEnergy. </p>
        <h3>Liquid Energy</h3>
        <p>
            Napój dotarcza składników odżywczych i energii przez dłuższy czas niż standardowe produkty tego typu. Dotychczasowe substancje oferują szybki zastrzyk energi za pomocą kofeiny, pochodnych cukru lub co gorsza samego cukru.
        </p>
        <p>
            Nasz napój wykorzystuje najnowsze odkrycia technoloincze, aby dostarczać energię przez dłuższy czas. Mikroelementy uwalniają się w czasie, przez co poziom energii nie podlega fluktucjom, a zamiast tego podnosi się stale do pewnego momentu, następnie utrzymując się.
        </p>
        <h3>Struktura</h3>
        <div className="member-list">
            <Member memberName={"Eryk Ławniczak"} contact={"eryk.lawniczak@student.put.poznan.pl"} position={"Founder"} />
            <Member memberName={"Krystian Jakusik"} contact={"krystian.jakusik@student.put.poznan.pl"} position={"CEO"} />
        </div>

        <h3>Kontakt</h3>
        <ul className="contact-list">
            <li>Email: liquid.energy@mail.com</li>
            <li>Telefon: +48 123 123 123</li>
            <li>Adres: pl. Marii Skłodowskiej-Curie 60-965 Poznań</li>
        </ul>


    </PageWrapper>;
}

export const Member = (props: { memberName: any, position, contact: any }) => {
    const { contact, position, memberName } = props
    return <div className="member">
        <div className="name">
            {memberName}
        </div>
        <div className="position">
            {position}
        </div>
        <div className="memberContact">
            <a href={`mailto:${{contact}}`}>{contact}</a>
        </div>
    </div>
}