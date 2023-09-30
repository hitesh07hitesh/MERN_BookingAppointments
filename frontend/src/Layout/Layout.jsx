import Header from '../components/Header/header'
import Footer from '../components/Footer/Footer'
import Routers from '../Routes/Routers'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Routers />
            </main>
            <Footer />

        </div>
    )
}

export default Layout
