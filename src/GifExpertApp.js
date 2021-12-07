import React,{useState} from 'react'

//Estas importaciones son por apartados dependiendo de lo que realice cada widget
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Dragon Ball', 'Naruto']
    //Este Hook trae el primer argumento que en este caso es el nombre de ONE PUNCH
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
          <h2>GifExpertApp</h2>

          <AddCategory setCategories={ setCategories }  />
          <hr></hr>

          <ol>
          {
              categories.map(category => (
                <GifGrid 
                key = { category } 
                category = { category }  />
              ))
          }
          </ol>
        </>
    )
}
