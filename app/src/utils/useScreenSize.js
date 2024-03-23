import {useEffect, useState} from 'react' 

export const useScreenSize = () =>{
const [screenWidth, setScreenWidth] = useState(0);
const [screenHeight, setScreenHeight] = useState(0);

useEffect(() =>{
    const updateScreenProperties = () =>{
        setScreenHeight(window.innerHeight);
        setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateScreenProperties);

    updateScreenProperties();

    return ()=>window.removeEventListener('resize', updateScreenProperties);
},[]);

    return {screenWidth, screenHeight}
}