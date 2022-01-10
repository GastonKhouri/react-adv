import { ProductButtons, ProductTitle, ProductCard, ProductImage } from '../components';
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={ {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            } }>

                {
                    products.map( product => (
                        <ProductCard
                            key={ product.id }
                            product={ product }
                            className='bg-dark text-white'
                            onChange={ onProductCountChange }
                            value={ shoppingCart[ product.id ]?.count || 0 }
                        >
                            <ProductImage className='custom-image' style={ { boxShadow: '10px 10px 10px rgba(0, 0 , 0, 0.5)' } } />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ) )
                }

            </div>

            <div className="shopping-cart">
                {
                    Object.entries( shoppingCart ).map( ( [ key, product ] ) => (
                        <ProductCard
                            key={ key }
                            product={ product }
                            className='bg-dark text-white'
                            style={ { width: '100px' } }
                            onChange={ onProductCountChange }
                            value={ product.count }
                        >
                            <ProductImage className='custom-image' style={ { boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' } } />
                            <ProductButtons className='custom-buttons' style={ { display: 'flex', justifyContent: 'center' } } />
                        </ProductCard>
                    ) )
                }
            </div>

        </div>
    );
};

export default ShoppingPage;
