import React from 'react'

const About = async () => {

    let res = await  fetch('https://fakestoreapi.com/products')
   let products = await res.json() 
    console.log(products);
    

  return (
    <div>about page


        {
            products.map((elem)=>{
                return <a key={elem.id} href={`/about/${elem.id}/ol/name/age`}>
                     <h1>{elem.title}</h1>
                </a>
            })
        }
    </div>
  )
}

export default About