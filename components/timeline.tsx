import { useTranslation } from "next-export-i18n";

export default function Timeline() {
  const { t } = useTranslation();
  return (
    <section className="py-5">
      <ul className="timeline">
        <li>
          <h1>{t("timeline.timelineTitle")}</h1>
        </li>

        <li>
          <br></br>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">{t("timeline.bachTitle")}</h5>
          <p className="text-muted mb-2 fw-bold">{t("timeline.bachPeriod")}</p>
          <ul>
            <li>{t("timeline.bachGrad")}</li>
            <li>{t("timeline.bachTopic")}</li>
            <li>{t("timeline.bachText")}</li>
          </ul>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">{t("timeline.masTitle")}</h5>
          <p className="text-muted mb-2 fw-bold">{t("timeline.masPeriod")}</p>
          <ul>
            <li>{t("timeline.masGrad")}</li>
            <li>{t("timeline.masTopic")}</li>
            <li>{t("timeline.masText")}</li>
          </ul>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">{t("timeline.compTitle")}</h5>
          <p className="text-muted mb-2 fw-bold">{t("timeline.compPeriod")}</p>
          <ul>
            <li>{t("timeline.compText1")}</li>
            <li>{t("timeline.compText2")}</li>
          </ul>
        </li>

        <li className="timeline-item mb-5">
          <h5 className="fw-bold">{t("timeline.curTitle")}</h5>
          <p className="text-muted mb-2 fw-bold">{t("timeline.curPeriod")}</p>
          <ul>
            <li>{t("timeline.curText1")}</li>
            <li>{t("timeline.curText2")}</li>
            <li>{t("timeline.curText3")}</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
