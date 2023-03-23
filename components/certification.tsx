import { useTranslation } from "next-export-i18n";

export default function Certification() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container mt-5">
        <div className="certification">
          <h1>Certification</h1>
          <br></br>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/a42014a6-e401-4533-aae1-730c8197207f">
                  <img
                    src="./img/aws-certification/CLF.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/e4701f26-4619-423b-971a-44ce36cd913f">
                  <img
                    src="./img/aws-certification/SAA.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/4e6cb979-c8ad-4c05-98a8-5b1301c4e2b8">
                  <img
                    src="./img/aws-certification/DVA.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/1b4d9124-b0ce-4588-8f12-2b19eb5b0a3c">
                  <img
                    src="./img/aws-certification/SOA.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/0756ff87-6b7f-43e3-91db-d69c79003634">
                  <img
                    src="./img/aws-certification/SAP.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/52701159-1c10-4167-a49e-1801b3f03e4b">
                  <img
                    src="./img/aws-certification/DOP.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/bcec3a9d-57a2-41fc-a2c2-c915fa452b63">
                  <img
                    src="./img/aws-certification/SCS.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/19b79d89-8041-43f2-8f75-4e2a2b320f73">
                  <img
                    src="./img/aws-certification/DBS.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <a href="https://www.credly.com/badges/af6c7ae1-5910-4190-a2f8-228376c7b7fe">
                  <img
                    src="./img/aws-certification/MLS.png"
                    className="img-fluid"
                  ></img>
                </a>
              </div>
              <div className="col-lg-2 col-sm-4">
                <img
                  src="./img/lpic-certification/essentials.png"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-lg-2 col-sm-4">
                <img
                  src="./img/lpic-certification/1.png"
                  className="img-fluid"
                ></img>
              </div>
              <div className="col-lg-2 col-sm-4">
                <img
                  src="./img/oracle-java-certification/Bronze.png"
                  className="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
