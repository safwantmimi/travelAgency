import React from 'react';
import "../styles/landingComponent.css";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook for translations
import { NavLink } from 'react-router-dom';

function LandingComponent() {
    const { t } = useTranslation(); // Initialize useTranslation hook

    return (
        <div className="container-fluid  landingComponent" id="landing">
            <div className="content container-fluid d-flex flex-column justify-content-center align-items-center h-100 row-gap-5">
                <p className='slogan '>{t('apply_visa_now', 'Apply For A Visa Now')}</p>
                <p className='sloganMessage'>{t('visa_with_direct', 'With Direct, you can get travel visas with ease')}</p>
                <NavLink to={"/visaDemand"}>
                    <button className="btn btnApply">{t('apply_now', 'Apply for visa now !')}</button>
                </NavLink>
            </div>
        </div>
    );
}

export default LandingComponent;
