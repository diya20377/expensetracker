import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/Expenseform.css";
import { useNavigate } from "react-router-dom";

export default function Expenseform() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        amount: (""),
        description: '',
        date: new Date().toISOString().split('T')[0],
        category: '',
    });
    const [errors, setErrors] = useState({});

    const handlechange = (e) =>{
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: name === "amount" ? Number(value) : value,
        }));
    };
    const validate=()=>{
        const newErrors = {};

        if(!formData.amount || formData.amount <= 0) {
            newErrors.amount = 'Enter an amount greater than 0';
        }

        if(!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }

        if(!formData.date) {
            newErrors.date = 'Date is required';
        }

        if(!formData.category) {
            newErrors.category = 'Select a category';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!validate()) return;

        const expenses = JSON.parse(localStorage.getItem("expenses") || '[]');
        const newExpense = {...formData, id: uuidv4() };

        console.log("Expense added successfully", newExpense);
        localStorage.setItem('expenses',JSON.stringify([...expenses, newExpense]));
        Navigate("/");
    }

    return (
        <div className="Expenseform">
            <form onSubmit={handleSubmit}>
                <h1>Expense Form</h1>

                <input
                type="number"
                name="amount"
                placeholder="Enter amount.."
                value={formData.amount}
                onChange={handlechange}
                />
                {errors.amount && <p className="validation">{errors.amount}</p>}

                 <input
                type="text"
                name="description"
                placeholder="Enter Description.."
                value={formData.description}
                onChange={handlechange}
                />
                {errors.description && <p className="validation">{errors.description}</p>}

                <input
                type="date"
                name="date"
                placeholder="Enter Date.."
                value={formData.date}
                onChange={handlechange}
                />
                {errors.date && <p className="validation">{errors.date}</p>}


                <label htmlFor="category">category:</label>
                <select id="category" name="category" 
                    value={formData.category}
                    onChange={handlechange}>

                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                    <option value="Phonebill">Phonebill</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
                {errors.category && <p className="validation">{errors.category}</p>}

                <div className="btn">
                    <button>Add Expense</button> 
                </div>
            </form>
        </div>
    );
}