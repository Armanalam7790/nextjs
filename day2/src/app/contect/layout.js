import Link from "next/link"


const ContectLayout = ({children}) => {
  return (
    <div>

        <div className="flex gap-4 ">
        <Link className="bg-red-500 text-white px-4 py-2 rounded mt-4 h-fit active:scale-95 " href={'/contect/phone'}>Phone</Link>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded mt-4 h-fit active:scale-95" href={'/contect/message'} >message</Link>
     
         {children}
       
    </div>
    
    </div>
  )
}

export default ContectLayout