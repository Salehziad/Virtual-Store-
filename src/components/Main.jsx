import React, {useState} from 'react';
import {connect} from 'react-redux';
import {active, reset} from '../store/categories';
import {getByCategory} from '../store/products'
import {Grid, Grow, Typography} from '@material-ui/core';
import Products from './Products';
import UseStyles from './styles';
const Main = (props) => {
    // console.log(props);
    const classes = UseStyles();
    const [showProducts,
        setShowProducts] = useState(false)
    //   console.log(props.products);   
    // const [active,setActive]=useState('') const
    // handleClick=(name)=>{     console.log(name)     // setActive('f')   }
    // console.log(active); 
    console.log(props.products)
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
                {
                    showProducts?
                    <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {props
                            .products
                            .map((prod, i) => (
                                <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                style={{
                                    display: 'flex'
                                }} key={i}>
                                    <Products Products={prod} i={i}/>
                                </Grid>
                            ))}
                    </Grid>
                </Grow>
                        :null}
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