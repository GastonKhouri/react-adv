import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ( { onChange, product, value = 0, initialValues }: useProductArgs ) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );

    const isMounted = useRef( false );

    useEffect( () => {

        if ( !isMounted.current ) return;

        setCounter( value );

    }, [ value ] );

    useEffect( () => {

        isMounted.current = true;

    }, [] );

    const increaseBy = ( value: number ) => {

        let newValue = Math.max( counter + value, 0 );

        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues?.maxCount );
        }

        setCounter( newValue );

        onChange && onChange( { count: newValue, product } );
    };

    const reset = () => {

        setCounter( initialValues?.count || value );

    };

    return {
        counter,
        increaseBy,
        reset,
        isMaxCountReached: !!initialValues?.maxCount && initialValues?.maxCount === counter,
        maxCount: initialValues?.maxCount
    };

};

export default useProduct;
