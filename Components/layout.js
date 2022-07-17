import Navbar from "./navbar";
import Footer from "./footer";
// import Navbar2 from "./navbar2";

export default function Layout({children}){
    return(
        <div>
            {/* <Navbar2/> */}
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}