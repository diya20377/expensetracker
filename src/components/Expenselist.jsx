import { useEffect, useState } from 'react';
import '../styles/Expenselist.css';
import ConfirmationModel from './ConfirmationModel';

function Expenselist() {
    const [expenses, setExpenses] = useState([]);
    const loadExpenses = () => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses") || "[]");
    setExpenses(savedExpenses);
    };

    useEffect(() => {
    //safe: we only read localstorage amount
    //eslint-disable-next-line react-hooks/set-state-in-effect
    loadExpenses(); 
    },[]);
    const totalAmount = expenses.reduce(
    (sum, item) => sum + Number(item.amount),
    0
    );

return (
    <>
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
            {expenses.length>0?(expenses.map((expenses)=>(
                <tr key={expenses.id}>
                    <td>{expenses.amount}</td>
                    <td>{expenses.description}</td>
                    <td>{expenses.date}</td>
                    <td>{expenses.category}</td>
                    <td className="tble=action">
                        <button className="btn-delete">Delete</button>
                        <button className="btn-edit">Edit</button>
                        <button className="btn-readmore">View</button>
                    </td>
                </tr>
            ))):(<>
            <tr>
                <td colSpan="7" className="no-data"> No Expenses Found </td>
            </tr>
            </>)
            }
            
            <tr className="expense-total">
                <td colSpan="7">total Amount: {totalAmount}</td>
            </tr>
        </tbody>
    </table>
    </div>
    <ConfirmationModel
    title="Delete Expense"
    message={"Are you sure you want to delete this expense"}
    confirmText="Delete"
    cancelText="Cancel"
    onCancel={() => {}}
    onConfirm={() => {}}
    />
</>
);
}

export default Expenselist