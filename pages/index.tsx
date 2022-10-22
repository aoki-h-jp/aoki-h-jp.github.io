import Timeline from '../components/timeline';
import Profile from '../components/profile';
import Portfolio from '../components/portfolio';
import type { VFC } from 'react'
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

const Index: VFC = () => {
    return (
      <>
        <title>aoki-h-jp</title>
        <div className="container mt-1">
          <div className="row justify-content-end">
            <div className="col-auto">
              <button type="button" className="btn btn-light" id="isLightMode">Light</button>
              <button type="button" className="btn btn-dark" id="isDarkMode">Dark</button>
            </div>
            <div className="col-auto">
              <LanguageSwitcher lang="en"><button type="button" className="btn btn-outline-primary">English</button></LanguageSwitcher>
              <LanguageSwitcher lang="ja"><button type="button" className="btn btn-outline-primary">日本語</button></LanguageSwitcher>
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
      </>
    );
}

if (process.browser) {
  document.body.classList.add("light-theme");
  const lightBtn = document.querySelector("#isLightMode");
  const darkBtn = document.querySelector("#isDarkMode");

  lightBtn!.addEventListener('click', () => {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      }
  );

  darkBtn!.addEventListener('click', () => {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      }
  );
}

export default Index;