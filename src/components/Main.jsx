import React, {useState} from 'react';
import {connect} from 'react-redux';
import {active, reset} from '../store/categories';
import {getByCategory} from '../store/products'
const Main = (props) => {
    const [showProducts,
        setShowProducts] = useState(false)
    //   console.log(props.products);   const [active,setActive]=useState('') const
    // handleClick=(name)=>{     console.log(name)     // setActive('f')   }
    // console.log(active);
    // console.log(props.products)
    return (
        <div>
            <div>
                <li
                    onClick={() => {
                    props.reset();
                    props.active(props.categories[0].name);
                    props.getByCategory(props.categories[0].name);
                    setShowProducts(true);
                }}>
                    {props.categories[0].name}-{props
                        .categories[0]
                        .active
                        .toString()}
                </li>
                <li
                    onClick={() => {
                    props.reset();
                    props.active(props.categories[1].name);
                    props.getByCategory(props.categories[1].name);
                    setShowProducts(true);
                }}>
                    {props.categories[1].name}-{props
                        .categories[1]
                        .active
                        .toString()}
                </li>
                <li
                    onClick={() => {
                    props.reset();
                    props.active(props.categories[2].name);
                    props.getByCategory(props.categories[2].name);
                    setShowProducts(true);
                }}>
                    {props.categories[2].name}-{props
                        .categories[2]
                        .active
                        .toString()}
                </li>
                <li
                    onClick={() => {
                    props.reset();
                    props.active(props.categories[3].name);
                    props.getByCategory(props.categories[3].name);
                    setShowProducts(true);
                }}>
                    {props.categories[3].name}-{props
                        .categories[3]
                        .active
                        .toString()}
                </li>
                {showProducts?console.log(props.products):null}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({categories: state.categories.categories, products: state.products.products})

const mapDispatchToProps = {
    active,
    reset,
    getByCategory
};
//
export default connect(mapStateToProps, mapDispatchToProps)(Main);