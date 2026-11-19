import '../styles/Expenselist.css';

function Expenselist({expenses}) {
return (
    <div className="Expenselist">
        <div className="list-search">
            <div>
                <h1>your expenses</h1>
                <p className="list-help">
                    search,edit,or remove an expense below.
                </p>
            </div>

            <div>
                <select>
                    <option>All categories</option>
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Shopping</option>
                    <option>Entertainment</option>
                </select>

                <input 
                type="search"
                placeholder="search expense..."
                />
            </div>
    </div>

    <table>
        <thead>
            <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Actions</th>
            </tr>
        </thead>
        
        <tbody>
            {expenses.map((expenses)=>(
                <tr>
                    <td>{expenses.amount}</td>
                    <td>{expenses.shopping}</td>
                    <td>{expenses.date}</td>
                    <td>{expenses.category}</td>
                    <td className="tble=action">
                        <button className="btn-delete">Delete</button>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-readmore">View</button>
                    </td>
                </tr>
            ))}
            

            <tr className="expense-total">
                <td colSpan={5}>total: ₹2,000</td>
            </tr>
        </tbody>
    </table>
    </div>

);
}

export default Expenselist