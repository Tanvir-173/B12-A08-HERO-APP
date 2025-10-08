import React from 'react';
import Header from '../Header/Header';
import Footer from '../footer/footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../loading/Loading';

const Root = () => {
    const navigation=useNavigation()
    const isNavigating=Boolean(navigation.location)
    console.log(isNavigating)
    
    return (
        <div>
            {/* {isNavigating && <Loading/>} */}
            
              <Header></Header>
            
            
           <div>
            {isNavigating ? <Loading/>:
           
            <Outlet></Outlet>}
             
           </div>
            
            <Footer></Footer>
        </div>
        
    );
};

export default Root;