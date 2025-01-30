import React from 'react'

const Task2 = ({ products }) => {
    console.log(products)
    console.log(products.map((a)=>a.image))
    // 1.style a page for showing the product details
    // 2.pass the details as prop from app.js to product.js
    // 3.display each item as a card component

    return (
        <div className='d-flex justify-content-center gap-4'>
            {products.map((a)=>(
                 <div className="card" style={{width: "18rem"}}>
                 <img src="" className="card-img-top" alt=" unavailable" />
                 <div className="card-body">
                     <h5 className="card-title">{a.name}</h5>
                     <p className="card-text">{a.description}</p>
                     <p>{a.price}</p>
                     <button className='btn btn-primary'>Buy now</button>
                 </div>
             </div>
            ))}

           

        </div>
    )
}

export default Task2
