import { useEffect, useState } from 'react'
import '../styles/EditModel.css'

function EditModel({ editId, onClose, onUpdate }) {
    const [formData, setFormData] = useState({
        id: editId,
        amount: null,
        description: "",
        date: "",
        category: "",
    });

    useEffect(() => {
        const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
        const expense = expenses.find((item) => String(item.id) === String(editId));

        //eslint-disable-next-line react-hooks/set-state-in-effect
        if (expense) setFormData(expense);
    }, [editId]);

    //handle change
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "amount" ? Number(value) : value,
        }));
    };

    //update expense
    const handleUpdate = (e) => {
        e.preventDefault();

        const expenses = JSON.parse(localStorage.getItem("expenses") || "[]");
        const updatedExpenses = expenses.map((item) =>
            String(item.id) === String(editId) ? formData : item
        );

        localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
        onUpdate();
        onClose();
    };

    return (
        <div className="model">
            <div className="form-box">
                <form onSubmit={handleUpdate}>
                    <h1>Edit Expense</h1>

                    <input
                        type="number"
                        name="amount"
                        value={formData.amount || ''}
                        onChange={handlechange}
                        defaultValue=""
                        placeholder="Amount"
                    />

                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handlechange}
                        defaultValue=""
                        placeholder="description"
                    />

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handlechange}
                        defaultValue=""
                    />

                    <label htmlFor="category">category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handlechange}
                    >

                    <option value="">Select category</option>
                    <option value="Food">Food</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Education">Education</option>
                    <option value="Phonebill">Phonebill</option>
                    <option value="Entertainment">Entertainment</option>
                    </select>

                    <div className="model-btn">
                        <button className="edit">
                            update
                        </button>
                        <button className="cancel">
                            cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModel
