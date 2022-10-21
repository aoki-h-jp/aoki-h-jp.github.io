import Timeline from '../components/timeline';
import Profile from '../components/profile';
import Portfolio from '../components/portfolio';

const Index = () => {
    return (
        <>
            <title>aoki-h-jp</title>
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

export default Index