import { useEffect, useState } from 'react';
import '../styles/ExpenseItemPage.css'

const API_URL = "https://dummyjson.com/products"
const ITEMS_PER_PAGE = 6;

function ExpenseItemPage() {
    const [products, setProducts] = useState([]);
    const [loding, setLoding] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchProducts = async () => {
        try{
            const response = await fetch(API_URL);

            if(!response.ok) {
                throw new Error("could not load expense items");    
            }

            const data = await response.json();
            setProducts(data.products);
        }
        catch (fetchError){
            console.log(fetchError.message);
        }
        finally{
            setLoding(false);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchProducts();
    },[]);

    const totalPages = Math.ceil(products.length/ ITEMS_PER_PAGE);
    console.log(totalPages);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    console.log(startIndex);

    const visibleProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="expense-items">
        <header className="items-header">
            <h1>Expense Item</h1>
            <span>Browese Items and their prices from yhe API. </span>
        </header>

        {loding && <p className="items-message">Loding itemScope...</p>}

        {!loding && (
            <section className="items-grid">
                {visibleProducts.map((products) => (
                    <article className="items-card" key={products.id}>
                        <div className="items-card-top">
                            <span>{products.category}</span>
                            <strong>${products.price}</strong>
                            
                        </div>
                            <h2>{products.title}</h2>
                            <p>{products.description}</p>
                    </article>
                ))}
            </section>
        )} 

    {!loding && totalPages > 1 && (
        <div className="pagination">
            <button
                onClick={() => setCurrentPage((page) => page - 1)}
                disabled={currentPage === 1}
            >
                previous
            </button>

            <span>
                page {currentPage} of {totalPages}
            </span>

            <button
            onClick={() => setCurrentPage((page) => page + 1)}
            disabled={currentPage === totalPages}
            >
                Next
            </button>
            </div>
    )}   
    </main>
  )
}

export default ExpenseItemPage
