
'use client'
import { Modal } from "@/components/modal"
import { Navbar } from "@/components/Navbar"
//import { Event } from "@/utils/Contracts";

export default function Register() {
    
    

    const Events = [
      {
        name: 'Daurin Aure',
        descr: 'Daurin Auren Maryamu da Ahmadaou Wanda suka shekara Dubu biyu suna soyayya allah ya basu zaman Lafiya',
        location: 'Kano, Nigeria',
        price: '$10000',
        date: '12-11-2023',
        

      },
      
    ]
     
    return(
    <div className="flex">
        <Navbar />
        {''}
        { Events.map((event,index) => (
          <Modal key={index} date={event.date} name={event.name} location={event.location} descri={event.descr} price={event.price}/>
        ))}
    </div>
    )
}