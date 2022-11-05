import React from 'react'



export function CountDownTimer({ seconds = 60 }){
    

    const [time, setTime] = React.useState({ seconds});
    

    const tick = () => {
        if ( time.seconds === 0) 
            reset();
       
         else {
            setTime({seconds: time.seconds - 1});
        }
    };
  

    const reset = () => setTime({ seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div>
            <p>{`${time.seconds.toString()}`}</p> 
        </div>
    );
}
