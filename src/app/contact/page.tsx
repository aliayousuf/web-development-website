import ContactForm from "@/components/contactform"

export default function Contact(){
    return(
       <main className="bg-gradient-to-b from-blue-100 to-red-200">
      <div className="p-4 max-w-3xl mx-auto ">
        <h1 className="text-3xl font-bold text-black">Contact Us</h1>
        <p className="text-black">please fill in the form below</p>

        <ContactForm/>
        
      </div>
      </main>
    
      
  
      
    )
  }