import { useTranslation } from 'next-i18next';

export default function Portfolio() {
  const { t } = useTranslation('common');
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