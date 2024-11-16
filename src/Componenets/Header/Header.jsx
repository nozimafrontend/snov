import React from 'react'
import "../../App.css"
import "./Header.css"
import qulupnay from "./Headerqulupnika.png"
// import bodring from "./Headerbodring.png"
import { useTranslation } from 'react-i18next'
function Header() {

    const { t, i18n } = useTranslation();

    return (
        <section>
            <div className="container">
                
                <div className="general">
                    <div className="qulupnikaImg">
                        <img className='qulupnay' src={qulupnay} />
                    </div>
                    <div className="qulupnika">
                        <h2 className="qulupnika_title">
                            {t('QulpnikaTitle')}
                        </h2>
                        <h4 className="qulupnika_hero">
                            {t('Qulupnikatext')}
                        </h4>
                        <p className="qulupnika_text">
                            {t('Qulupnikatext1')}
                        </p>
                        <p className="qulupnika_text">
                            {t('Qulupnikatext2')}
                        </p>
                        <p className="qulupnika_text">
                            {t('Qulupnikatext3')}
                        </p>
                        <h4 className="qulupnay_title">
                            {t('Qulupnikahiro')}
                        </h4>
                        <p className="qulupnay_text">
                            {t('Qulupnikahiro1')}
                        </p>
                        <p className="qulupnay_text">
                            {t('Qulupnikahiro2')}
                        </p>
                        <p className="qulupnay_text">
                            {t('Qulupnikahiro3')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
