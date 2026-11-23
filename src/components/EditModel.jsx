import '../styles/EditModel.css'

function EditModel() {
  return (
    <div className="model">
        <div className="form-box">
            <form>
                <h1>Edit Expense</h1>

                <input
                type="number"
                name="amount"
                defaultValue=""
                placeholder="Amount"
                />

                <input
                type="text"
                name="description"
                defaultValue=""
                placeholder="description"
                />

                <input
                type="date"
                name="date"
                defaultValue=""
                />
                
                <label htmlFor="category">Category:</label>
                <select id="category" name="category" defaultValue="">
                <option value="">select category</option>
                <option value="food">Food</option>
                <option value="shopping">Shopping</option>
                <option value="transportation">Transportation</option>
                <option value="education">Education</option>
                <option value="phoneBill">Phone Bill</option>
                <option value="entertainment">Entertainment</option>
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
