import Item from '../item/Item';
import { useParams, Link } from 'wouter';
import { useState, useEffect } from 'react';
import './Challenge.css';
import useSound from 'use-sound';
import clicking from '../../assets/sounds/clicking.mp3';

function Challenge () {

    const { day } = useParams();
    const dayNumber = parseInt(day, 10);
    const [items, setItems] = useState([]);
    const [daysCompleted, setDaysCompleted] = useState(0);
    
    const [restItems, setRestItems] = useState(0);
    
    const handleStatusUpdate = (id, status) => {
        const updatedItems = items.map((item) => {
            if (item.id == id ) item.status = status;
            return item;
        });

        setItems(updatedItems);
        setRestItems(updatedItems.filter((updatedItem) => updatedItem.status == '').length);
        localStorage.setItem(`items${day}`, JSON.stringify(updatedItems));
    };
 
    useEffect(() => {
        // checking for locally stored items to use that info in the render. If there is no info, create new ones and store in the hooks.
        const localStorageItems = localStorage.getItem(`items${day}`);
        let parsedItems = JSON.parse(localStorageItems);
        if (parsedItems) {
            setItems(parsedItems);
            setRestItems(parsedItems.filter((item) => item.status == '').length);
        } else {
            const newItems = Array.from({ length: dayNumber }).map((_, index) => {
                return { 
                    id: index, 
                    status: '', 
                    day: dayNumber};
            });
            setItems(newItems);
            setRestItems(newItems.filter((item) => item.status == '').length);
            localStorage.setItem(`items${day}`, JSON.stringify(newItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(`rest_items${day}`, JSON.stringify(restItems));
    }, [restItems]);

    useEffect(() => {
        let count = 0;
    for ( let i = 1;  i <= 15; i++){
        const key = `rest_items${i}`;
        const value = localStorage.getItem(key); 
        const parsedValue = JSON.parse(value);
        if (parsedValue === 0){
        count++;
    }
    }
    setDaysCompleted(count);
}, [] );

const [play] = useSound(clicking);

    return (
        <main 
            className='challenge-container mb-10 flex flex-col items-center'>
            <div className='challenge-header p-4 flex flex-col gap-4 justify-center w-11/12 align-middle'>
                <h1 className='flex justify-center'>Day {daysCompleted}</h1>
                <h2 className='flex justify-center'>Eliminate {restItems} items</h2>
            </div>
            <div className='mt-3'>
            <Link href='/' className='flex justify-center' onClick={play}>&#x21e6; Back</Link>
            </div>
           
            <div className='items-container flex flex-wrap gap-3 justify-center content-center'>

                   { items.map((item) => (
                        <Item
                            key={item.id}
                            day={item.day}
                            id={item.id}
                            handleStatusUpdate={handleStatusUpdate}
                            />
                        ) )
                    }
            </div>
        </main>
    )
}

export default Challenge