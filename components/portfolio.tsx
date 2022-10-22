import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

export default function Portfolio() {
  const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <div className="portfolio">
                    <h1>Portfolio</h1>
                    <div className="row">
                        <p className="text-muted">{t("portfolio.text")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}