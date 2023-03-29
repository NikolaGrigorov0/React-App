import NavigationBar from "../Navbar/NavigationBar";
import './Layout.css';


export const Layout = () => {
    return (
        <div id="box">
            <NavigationBar />
            <div className="background-image"></div>

        <footer>
        <p>&copy; 2023 Cars Storage</p>
      </footer>
        </div>
        
    );
}