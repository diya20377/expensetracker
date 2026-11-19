import "../styles/Expenseform.css";

export default function Expenseform() {
    return (
        <div className="Expenseform">
            <form>
                <h1>Expense Form</h1>

                <input
                type="number"
                name="amount"
                placeholder="Enter amount.."
                />

                 <input
                type="text"
                name="description"
                placeholder="Enter Description.."/>

                <input
                type="date"
                name="date"
                placeholder="Enter Date.."/>

                <label htmlFor="category">category</label>
                <select id="category" name="category" defaultValue="">
                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                    <option value="Phonebill">Phonebill</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                <div className="btn">
                    <button type="button">Add Expense</button> 
                </div>
            </form>
        </div>
    );
}