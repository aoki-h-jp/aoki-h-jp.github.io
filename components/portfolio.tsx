import { useTranslation } from "next-export-i18n";

export default function Portfolio() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid">
        <div className="portfolio">
          <h1>Portfolio</h1>
          <br></br>
          <div className="row">
            <div className="col-lg-3 col-xs-12 my-2">
              <div className="card h-100">
                <img
                  src="./img/funding-rate-arbitrage.jpg"
                  className="card-img-top"
                  height="160"
                  alt="playground"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://github.com/aoki-h-jp/funding-rate-arbitrage">funding-rate-arbitrage</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {t("portfolio.cardFundingRate.subTitle")}
                  </h6>
                  <p className="card-text">
                    {t("portfolio.cardFundingRate.subscription")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 my-2">
              <div className="card h-100">
                <img
                  src="./img/binance-bulk-downloader.svg"
                  className="card-img-top"
                  height="160"
                  alt="binance-bulk-downloader"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://github.com/aoki-h-jp/binance-bulk-downloader">binance-bulk-downloader</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {t("portfolio.cardBinanceBulkDownloader.subTitle")}
                  </h6>
                  <p className="card-text">
                    {t("portfolio.cardBinanceBulkDownloader.subscription")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 my-2">
              <div className="card h-100">
                <img
                  src="./img/bybit-bulk-downloader.png"
                  className="card-img-top"
                  height="160"
                  alt="bybit-bulk-downloader"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://github.com/aoki-h-jp/bybit-bulk-downloader">bybit-bulk-downloader</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {t("portfolio.cardBybitBulkDownloader.subTitle")}
                  </h6>
                  <p className="card-text">
                    {t("portfolio.cardBybitBulkDownloader.subscription")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xs-12 my-2">
              <div className="card h-100">
                <img
                  src="./img/playground.png"
                  className="card-img-top"
                  height="160"
                  alt="playground"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="https://github.com/aoki-h-jp/playground">playground</a>
                  </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {t("portfolio.cardPlayground.subTitle")}
                  </h6>
                  <p className="card-text">
                    {t("portfolio.cardPlayground.subscription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
