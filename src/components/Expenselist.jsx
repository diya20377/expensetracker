import { useEffect, useState } from 'react';
import '../styles/Expenselist.css';
import ConfirmationModel from './ConfirmationModel';
import EditModel from './EditModel';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Expenselist() {
    const {theme} = useTheme();
    const [expenses, setExpenses] = useState([]);
    const [filter,setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [deleteExpense, setDeleteExpense] = useState(null);
    const [openModel, setOpenModel] = useState(false);
    const [editId, setEditId] = useState(null);
    const Navigate = useNavigate();

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

    // filtered expense
    const filteredExpenses = expenses.filter((item) => {
        const matchesCategory = filter === 'all' || item.category === filter;
        const matchesSearch = item.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // handler
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDelete =(id) => {
        const updatedExpenses = expenses.filter(
            (item) => item.id !== id
        );

        localStorage.setItem(
            "expenses",
            JSON.stringify(updatedExpenses)
        );

        setExpenses(updatedExpenses);
        setDeleteExpense(null);
    };

    const editHandler = (id) => {
        setEditId(id);
        setOpenModel(true);
    };

    // Read more handler
    const handlerReadMore = (id) => {
        Navigate(`/expenseDetails/${id}`);
    };
return (
    <>
    <div className={`Expenselist ${theme}`}>
        <div className="list-search">
            <div>
                <h1>your expenses</h1>
                <p className="list-help">
                    search,edit,or remove an expense below.
                </p>
            </div>

            <div>
                <select value={filter} onChange={handleFilterChange}>
                    <option value= "all">All categories</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                    <option value="Phonebill">Phonebill</option>
                    <option value="Entertainment">Entertainment</option>
                </select>

                <input 
                type="search"
                placeholder="search expense..."
                value={searchTerm}
                onChange={handleSearchChange}
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
            {filteredExpenses.length>0?(filteredExpenses.map((expenses)=>(
                <tr key={expenses.id}>
                    <td>{expenses.amount}</td>
                    <td>{expenses.description}</td>
                    <td>{expenses.date}</td>
                    <td>{expenses.category}</td>
                    <td className="tble=action">
                        <button
                        className="btn-delete"
                        onClick={() => setDeleteExpense(expenses)}>Delete</button>
                        <button className="btn-edit" 
                        onClick={() => editHandler(expenses.id)}>Edit</button>
                        <button className="btn-readmore" 
                        onClick={() => handlerReadMore(expenses.id)}>View</button>
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
    {deleteExpense !== null && (
    <ConfirmationModel
    title="Delete Expense"
    message={"Are you sure you want to delete this expense"}
    confirmText="Delete"
    cancelText="Cancel"
    onCancel={() => setDeleteExpense(null)}
    onConfirm={() => handleDelete(deleteExpense.id)}
    />
)}

    {openModel && editId !== null && (
    <EditModel
    editId={editId}
    onClose={() => setOpenModel(false)}
    onUpdate={loadExpenses}
    />
)}
</>
);
}

export default Expenselist