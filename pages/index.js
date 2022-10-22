import Timeline from '../components/en/timeline';
import Profile from '../components/en/profile';
import Portfolio from '../components/en/portfolio';


export default function Index() {
    return (
        <>
            <title>aoki-h-jp</title>
            <div class="container mt-1">
                <div class="row justify-content-end">
                    <div class="col-auto">
                        <button type="button" class="btn btn-light" id="isLightMode">Light</button>
                        <button type="button" class="btn btn-dark" id="isDarkMode">Dark</button>
                    </div>
                    <div class="col-auto">
                        <button type="button" class="btn btn-outline-primary">English</button>
                        <a href="jp" type="button" class="btn btn-outline-primary">日本語</a>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="d-flex flex-column">
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
    )
}

if (process.browser) {
    document.body.classList.add("light-theme");
    const lightBtn = document.querySelector("#isLightMode");
    const darkBtn = document.querySelector("#isDarkMode");

    lightBtn.addEventListener('click', () => {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        }
    );

    darkBtn.addEventListener('click', () => {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        }
    );
}