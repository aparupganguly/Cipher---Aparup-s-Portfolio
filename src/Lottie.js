import React,{useEffect, useRef} from 'react';
import lottie from 'lottie-web';
import {motion} from "framer-motion";
const Lottie=()=> {
    const container = useRef(null);

    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer:'svg',
            loop:true,
            autoplay:true,
            speed:"0.7",
            animationData:require('./sa.json') 
        })
    },[])
  return (
    <motion.div className="lottie-animation" ref ={container}
    
    animate ={{
      y:['70px', '40px'],
    }}
    >
        
     
    


    </motion.div>
  )
}
export default Lottie;