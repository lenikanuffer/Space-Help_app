import initial from '../../assets/icons/initial-grain.png';
import recycle from '../../assets/icons/recycle-grain.png';
import donate from '../../assets/icons/donate-grain.png';
import sell from '../../assets/icons/sell-grain.png';

function Instructions () {
    return(
        <main className='default-container m-4 flex flex-col items-center'>
            <h1 className='text-center'>Welcome to Space Help!</h1>
            <ul className='w-4/5 flex flex-col gap-2 m-4'>
            <li> 1. Select a challenge: you can complete them in any order! Each challenge has a number of items you need to eliminate, from 1 to 15.</li>
            <li> 2. After clicking the challenge, you will see a meteor for each item to remove:</li>
            <div className='flex p-4 justify-center gap-4'>
            <img src={initial} alt='Meteor icon for initial state' className='w-20 nav-zoom' />
            </div>
            <li> 3. Start decluttering a space! Once you find an item you want to remove, click on a meteor and select the future of that item:</li>
            <div className='flex p-4 justify-center gap-4'>
            <img src={recycle} alt='Black hole icon for recycling' className='w-20 nav-zoom' />
            <img src={donate} alt='Rocket icon for donate' className='w-20 nav-zoom'/>
            <img src={sell} alt='Satelite icon for sell' className='w-20 nav-zoom'/>
            </div>
            <li> 4. You can decide to recycle ( or dispose ), donate, or sell each item.</li>
            <li> 5. Go to the 'Progress' page at the bottom to see how many items you collected for each category.</li>
            <li> 6. Go to the 'Tips' page for more ideas on how to use this app.</li>
            <li className='text-center'>Have fun decluttering!</li>
           </ul>
        </main>
    )
}

export default Instructions