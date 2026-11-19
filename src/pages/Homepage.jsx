import Expenselist from "../components/Expenselist";
import Navbar from "../components/Navbar";

export default function Homepage() {
    const expenses=[
        {
            amount: "2,000",
            shopping: "Grocery shopping",
            date:"17 nov 2026",
            category:"food"
        },
        {
            amount: "1,000",
            shopping: "cloth shopping",
            date:"16 nov 2026",
            category:"shopping"
        },
        {
            amount: "800",
            shopping: "vegetable shopping",
            date:"15 nov 2026",
            category:"food"
        },
    ];
    return(
        <>
        <Navbar/>
        <Expenselist expenses={expenses} />
        </>
    );
}