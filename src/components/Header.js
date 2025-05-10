import React from "react";


export default function Header({name}){
  //  var isLoggedIn = false;
    
        return(
            <header>
                <div className="container-fluid bg-primary text-white p-3"> <h1 className="text-center">{name} Website</h1>
            </div>
                
            </header>
        )
    
}