import Timeline from "../components/timeline";
import Profile from "../components/profile";
import Portfolio from "../components/portfolio";
import type { VFC } from "react";
import { LanguageSwitcher } from "next-export-i18n";
import useDarkMode from "use-dark-mode";

const Index: VFC = () => {
  const darkMode = useDarkMode(false);
  return (
    <>
      <script src="noflash.js"></script>
      <title>aoki-h-jp</title>
      <div className="container mt-1">
        <div className="row justify-content-end">
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-light"
              onClick={darkMode.disable}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={darkMode.enable}
            >
              Dark
            </button>
          </div>
          <div className="col-auto">
            <LanguageSwitcher lang="en">
              <button type="button" className="btn btn-outline-primary">
                English
              </button>
            </LanguageSwitcher>
            <LanguageSwitcher lang="ja">
              <button type="button" className="btn btn-outline-primary">
                日本語
              </button>
            </LanguageSwitcher>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-column">
          <div>
            <Profile />
          </div>
          <div>
            <Timeline />
          </div>
          <div>
            <Portfolio />
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <div className="text-end">Last update: 2022/11/05</div>
        </div>
      </footer>
    </>
  );
};

export default Index;
