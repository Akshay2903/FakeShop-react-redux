import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductComponents } from './ProductComponents'
import axios from 'axios'
import { setProduct } from '../redux/actions/productActions'


export const ProductList = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log('Err', err)
            });
            dispatch(setProduct(response.data))
    }


    useEffect(() => {
        fetchProducts();
    },[])

    console.log("Products: ", products)
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  )
}
