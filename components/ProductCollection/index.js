import React from "react"
import ProductCard from "../ProductCard"

const ProductCollection = ({ collTitle, collSubTitle, collProducts }) => {
  return (
    <div>
      <div className="pt-10 pb-2 flex flex-col items-center">
        {collTitle?.length > 0 && (
          <h2 className="text-2xl font-semibold mb-1">{collTitle}</h2>
        )}
        {collSubTitle?.length > 0 && (
          <p className="text-gray-600 text-sm">{collSubTitle}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 justify-items-center gap-2;">
        {collProducts?.length > 0 &&
          collProducts.map((props) => <ProductCard {...props} />)}
      </div>
    </div>
  )
}

export default ProductCollection
