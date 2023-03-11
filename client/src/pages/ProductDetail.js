import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetailComp from "../components/productDetail/ProductDetailComp"

const ProductDetail = () => {

    const [id, setId] = useState()
    
    const path = useParams()

    useEffect(() => {
        setId(path.id)
    }, [])
    
  return (
    <div className="mt-24 relative px-24 py-6">
        <ProductDetailComp id={id} />
    </div>
  )
}
export default ProductDetail