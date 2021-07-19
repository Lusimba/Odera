import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
    return (
        <div className="container-fluid">
            <Header />
            <div className="text-center fixed-top bg-white">
                <div className="">Call us on <a href="tel:254706722744">+254706722744</a></div>
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
