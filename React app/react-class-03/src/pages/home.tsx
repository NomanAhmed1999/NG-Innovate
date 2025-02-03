import Header from '../components/header';
import HomeCom from '../components/home';
import Sidebar from '../components/sidebar';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <div className='w-full'>
                    <HomeCom />
                </div>
            </div>
        </div>
    )
}

export default Home;