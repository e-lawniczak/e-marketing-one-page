import React from 'react'
import { PageWrapper } from '../components/PageWrapper'
import { Advertisement } from './Advertisment'
import { Image } from '../components/Image'

export const HomePage = (props) => {
    return <PageWrapper>
        <Advertisement type='main' />
        <ContentSection title='Liquid Energy?' mode='left' wrapperClass='section-1'>
            <Image wrapperClass='main-product-image' src={'./images/product.gif'} />
            <p>
                Niesamowity napój energetyczny, cechujący się najzdrowszym składem. Najnowsze osiągnięcie w dziedzinach dietetyki i żywienia. W skład napoju wchodzą naturlane składniki, dzięki którym Liquid Enery zawdzięcza swoje unikalne działanie i niepowtarzalny smak.
            </p>

        </ContentSection>
        <ContentSection title='Dlaczego produkt jest lepszy?' mode='right' wrapperClass='section-2'>
            <p>
                Skład Liquid Energy został stworzony we współpracy najtęższych umysłów w dziedzinie żywienia i dietetyki. Cały proces był wpomagany, przez najnowsze algorytmy szucznej inteligencji, szkolone na studentach AWF i byczkach z siłki. <br /><br />
                Naturalne składniki zapewniają stały przypływ energii, zamiast chwilowego zastrzyku.
            </p>
            <Image wrapperClass='main-product-image' src={'./images/productCan.gif'} />
        </ContentSection>
        <ContentSection title='Lista dostępnych sklepów' mode='center' wrapperClass='section-3'>

            <ul className='image-list'>
                <li>
                    <Image src={'./images/lidl.png'} />
                </li>
                <li>
                    <Image src={'./images/zabka.png'} />
                </li>
                <li>
                    <Image src={'./images/chatapolska.jpg'} />
                </li>
                <li>
                    <Image src={'./images/duzyben.png'} />
                </li>
                <li>
                    <Image src={'./images/kaufland.png'} />
                </li>
            </ul>
        </ContentSection>
        <Advertisement type='horizontalAd' />
        <ContentSection title='Newsletter' mode='center' wrapperClass='section-4'>
            <div className="text">
                Zapisz się do newslettera, aby otrzymywać informacje o najnowszych promocjach i wydarzeniach.
            </div>
            <form className='form-control'>
                <input type="email" placeholder='example@email.com' />
                <button>Zapisz&nbsp;się!</button>
            </form>
        </ContentSection>
    </PageWrapper>
}
export const ContentSection = (props: { title: string, wrapperClass: string, [x: string]: any, children: any, mode: "left" | "right" | "center" }) => {
    const { title, wrapperClass, mode = "left", children } = props;
    return <section className={["section", wrapperClass, mode].join(" ")}>
        <h3>{title}</h3>
        <div className="section-content">
            {children}
        </div>
    </section>
}