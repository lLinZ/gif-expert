import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export function GifExpertApp() {
    const [categories, setCategories] = useState(['Samurai X'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories } />
            <ol>
                { 
                    categories.map( category =>(
                        
                        <GifGrid 
                            key         =   {category}
                            category    =   {category}
                        />
                    )) 
                }
            </ol>
        </>
    )
}
