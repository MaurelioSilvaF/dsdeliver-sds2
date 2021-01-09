import { useEffect, useState } from 'react';
import './styles.css'
import StepsHeader from './StepsHeader';
import { Product } from './type';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';


function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    console.log(products);

    useEffect(
        () => {
            fetchProducts()
                .then(
                    response => setProducts(response.data)
                )
                .catch(
                    error => console.log(error)
                )
        }, []
    );
    return (
        
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
        </div>
        
    )

}

export default Orders;