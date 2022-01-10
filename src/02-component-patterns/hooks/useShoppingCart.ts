import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';

const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [ key: string ]: ProductInCart; }>( {} );

    const onProductCountChange = ( { count, product }: { count: number; product: Product; } ) => {

        setShoppingCart( prev => {

            // Control desde useShoppingCart

            const productInCart: ProductInCart = prev[ product.id ] || { ...product, count: 0 };

            if ( Math.max( productInCart.count + count, 0 ) > 0 ) {
                productInCart.count += count;
                return {
                    ...prev,
                    [ product.id ]: productInCart
                };
            }

            const { [ product.id ]: toDelete, ...rest } = prev;
            return rest;

            // Control desde useProduct

            // if ( count === 0 ) 
            //     const { [ product.id ]: toDelete, ...rest } = prev;
            //     return rest;
            // }

            // return {
            //     ...prev,
            //     [ product.id ]: { ...product, count }
            // };

        } );

    };

    return {
        onProductCountChange,
        shoppingCart
    };

};

export default useShoppingCart;
