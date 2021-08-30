import React from "react";
import { NavBar } from './nav/NavBar';
import { ApplicationViews } from "./ApplicationViews";
import './Repairs.css'

export const Repairs = () => { 

  document.title = "Honey Rae Repairs"
        

    return (
        <>
            <NavBar/>
            <h1>Honey Rae's Repairs</h1>

            <ApplicationViews/>
            
        </>
    )
    
}