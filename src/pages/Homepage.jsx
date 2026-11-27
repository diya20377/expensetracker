import Expenselist from "../components/Expenselist";
import { useTheme } from "../context/ThemeContext";
import '../styles/HomePage.css'

export default function Homepage() {
    const {theme} = useTheme();

    return(
        <main className={`home-page ${theme}`}>    
        <Expenselist/>
        </main>
    );
}