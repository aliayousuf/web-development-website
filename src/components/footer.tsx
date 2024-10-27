import Image from "next/image";

export default function Footer(){
    return(
        <footer className="w-full bg-gray-900 px-4 md:px-12 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between">
            
            <div>
            <Image className="w-40 h-16" src="/skill.png" alt="skill" width={50} height={50}></Image>
            <p className="my-4">Email us: support@wdskills.com</p>
            
            </div>
            <div>
            <h2 className="font-bold text-xl mt-4">WD Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div>
            <p>About Us</p>
            <p>FAQS</p>
            <p>Privacy Policy</p>
            </div>
             </div>

             <div>
               <h2 className="font-bold text-xl mt-4">Products</h2>
               <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
               <div>
                 <p>WD Skills Lab</p>
                 <p>Job Portal</p>
                 <p>Experience Portal</p>
                 <p>Hall Of Fame</p>
            
                 </div>
             </div>
             <div>
               <h2 className="font-bold text-xl mt-4">Links</h2>
               <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
            <div>
                 <p>Discord Channel</p>
                 <p>WD Youtube</p>
                 <p>Careers</p>
            
              </div>
             </div>
            </footer>
             );
             }