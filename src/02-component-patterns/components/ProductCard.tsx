import { createContext } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';

export const ProductContext = createContext( {} as ProductContextProps );

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ( { children, product, className, style }: Props ) => {

    const { counter, increaseBy } = useProduct();

    return (
        <ProductContext.Provider value={ {
            counter,
            increaseBy,
            product
        } }>
            <div
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >

                { children }

            </div>
        </ProductContext.Provider>
    );
};
