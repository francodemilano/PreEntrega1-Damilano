import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../../asyncMock'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        if(categoryId) {
            getProductsByCategory(categoryId).then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            });
        } else {
            getProduct().then(res => {
                console.log(res)
                setProducts(res)
            }).catch(error => {
                console.log(error)
                setError(true)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    // const productosTransformados = products.map(product => <li key={product.id}>{product.name}</li>)
    if(loading) {
        return <h1>Loading...</h1>
    }
    

    if(error) {
        return <h1>Hubo un error</h1>
    }


    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer