import { useTranslation } from "next-export-i18n";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <div className="container mt-5">
      <script
        src="https://kit.fontawesome.com/4a2c5437ed.js"
        crossOrigin="anonymous"
      ></script>
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
                <td scope="col-2">{t("profile.socialTitle")}</td>
                <td scope="col-10">
                  <div className="row">
                    <div className="col-1">
                      <div className="row">
                        <div className="col-6">
                          <a href="https://github.com/aoki-h-jp">
                            <i className="fa-brands fa-github fa-xl github-color"></i>
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="https://www.linkedin.com/in/hirotaka-aoki-b62b78221/">
                            <i className="fa-brands fa-linkedin-in fa-xl linkedin-color"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-1"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
