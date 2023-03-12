import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetailComp from "../components/productDetail/ProductDetailComp"
import Reviews from "../components/productDetail/Reviews"
import products from "../products"

const ProductDetail = () => {

    const [id, setId] = useState()
    
    const path = useParams()

    useEffect(() => {
        setId(path.id)
    }, [path.id])
    
    const selectedProduct = products.find((product)=>product._id === id)
  return (
    <div className="mt-24 relative px-24 py-6">
        <ProductDetailComp selectedProduct={selectedProduct} />
        <Reviews selectedProduct={selectedProduct} />
    </div>
  )
}
export default ProductDetail