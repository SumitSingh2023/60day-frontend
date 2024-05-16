import React from "react";
import{ useEffect } from 'react';


function Counter() {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('Timer is running...');
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <h2>Timer</h2>
        </div>
    )
}

const ScrollComponent = () => {
    useEffect(() => {
      const handleScroll = () => {
        console.log('Scroll event detected');
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return <div>Scroll Component</div>;
  };

export { Counter}
export {ScrollComponent}