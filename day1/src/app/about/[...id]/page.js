import React from 'react'

const productDetail = async ({params}) => {
 let data =  await  params
 console.log(data);
 
  
  return (
    <div>
        this is  product detail page
    </div>
  )
}

export default productDetail