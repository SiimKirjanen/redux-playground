import { useSelector } from 'react-redux';
import { Product } from '../../interfaces/Product';
import { fetchProducts, highestPriceItemSelector } from '../../slices/product/productSlice';
import { RootState, useAppDispatch } from '../../store';
import Box from '../Box';

const NoProducts = () => {
    const dispatch = useAppDispatch();

    return(
        <>
            <div>Please load Products</div>
            <button onClick={() => dispatch( fetchProducts() )}>Load</button>
        </>
    )
}

interface productListProps {
    products: Product[]
};

const ProductsList = ({products}: productListProps) => {
    const highestPriceProduct = useSelector(highestPriceItemSelector);

    return(
        <>
            <ul>
                {products.map((product: Product) => <li key={product.id}>{product.title} - {product.price}</li>)}
            </ul>
            Highest price product is:  { highestPriceProduct.title } - { highestPriceProduct.price }
        </>
    )
};

const Products = () => {
    const { products, loading, error } = useSelector((state: RootState) => state.product);
    
    if(loading) {
        return (
            <Box title='Products'>
                Loading
            </Box>
        );
    }

    return (
        <Box title='Products'>
             { products.length ? (
                <ProductsList products={products} />
            ) : (
              <NoProducts />
            ) }
        </Box>
    );
};

export default Products;