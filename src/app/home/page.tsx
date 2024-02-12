'use client'
import * as React from 'react';
import { useAppSelector, useAppDispatch, useAppStore } from '../../redux/hooks'


interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const count = useAppSelector((state:any)=>state)
    
    React.useEffect(()=>{
      console.log(count)
    },[count])
    return (
    
    <div>
        
    </div>


  );
};

export default Home;
