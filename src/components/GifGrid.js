import React from 'react'
import { useFecthGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    
    const { data:images,loading } = useFecthGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then( setImages );
    // },[ category ]);

    

    console.log(loading);
    
    //No debe llamarse esta funcion por que crea un loop en la aplicacion
    //getGifs();

    return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3> 
            
            { loading && <p className="animate__animated animate__flash">Loading</p>  }   
            <div className="card-grid" >          
                {    
                    images.map (img =>  (
                        <GifGridItem
                            key = { img.id } 
                            { ...img } 
                        />
                    ))
                        
                }  
            </div>         
        </>
    )
}
