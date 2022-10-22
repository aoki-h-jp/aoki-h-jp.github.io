import { useTranslation } from 'next-i18next';

export default function Profile() {
  const { t } = useTranslation('common');
    return (
        <div className="container mt-5">
            <div className="row d-flex align-items-center">
                <div className="col-3">
                    <div className="text-center mt-3">
                        <h1 className="mt-2 mb-0">{t("profile.name")}</h1>
                        <h5>{t("profile.subTitle")}</h5>
                    </div>
                </div>
                <div className="col-9">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td scope="col-2">{t("profile.birthTitle")}</td>
                                <td scope="col-10">{t("profile.birth")}</td>
                            </tr>
                            <tr>
                                <td scope="col-2">{t("profile.birthPlaceTitle")}</td>
                                <td scope="col-10">{t("profile.birthPlace")}</td>
                            </tr>
                            <tr>
                                <td scope="col-2">{t("profile.interestTitle")}</td>
                                <td scope="col-10">{t("profile.interest")}</td>
                            </tr>
                            <tr>
                                <td scope="col-2">{t("profile.emailTitle")}</td>
                                <td scope="col-10">{t("profile.email")}</td>
                            </tr>
                            <tr>
                                <td scope="col-2">{t("profile.githubTitle")}</td>
                                <td scope="col-10"><a href="https://github.com/aoki-h-jp" className="link-info">{t("profile.github")}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}