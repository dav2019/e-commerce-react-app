import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
// import { CategoriesContext } from '../../contexts/categories.context';
import Spinner from '../../components/spinner/spinner.component';

import './category.styles.scss'

const Category = () => {
    const { category } = useParams();
    // const { categoriesMap } = useContext(CategoriesContext);
    // console.log('render/re-rendering category component');
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        {
            isLoading ? <Spinner /> : <div className='category-container'>
            {products &&
                products.map((product) => <ProductCard key={product.id} product={product} /> )
            }
        </div>
        }
        </Fragment>
    )
};

export default Category;