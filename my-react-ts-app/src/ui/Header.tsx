import logo from "../../public/logo.webp"

export function Header() {

   return (

      <>

         <div className="bg-black/20">

            <div className="p-2">

               <div className="flex gap-1">

                  <img src={logo} alt="logo of codolog" className="w-[70px] h-[70px]" />
                  <div>
                     <h1 className="text-4xl font-bold">Codolog</h1>
                     <p className="text-[11px]">Always Learn Unique</p>
                  </div>
               <div className="p-3 pl-10">
                  <div className="p-2 bg-white h-10 w-[200px] rounded-full">
                  <input className="" type="search" placeholder="Enter Your name"/>
                  </div>
               </div>

               </div>
            </div>



         </div>



      </>
   )
}

export default Header