import { CycleContext } from '../../../components/context/CycleContex';
import { CountDownContainer, Separator} from './styles';
import { useEffect, useContext } from 'react';



export function CountDown(){
    const {activeCycle, amountSecondsPassed, markCycleAsFinished, setSecondPassats} = useContext(CycleContext)
    

    const totalSeconds = activeCycle ? activeCycle.minutsAmouth * 60 : 0;

    useEffect(() => {
        let interval : number;
       

        if(activeCycle){
            interval = setInterval(() =>{
                
                const diferenceInseconds = state => state + 1;
                
                if(diferenceInseconds >= totalSeconds){
                    markCycleAsFinished()
                    setSecondPassats(totalSeconds)
                    clearInterval(interval)

                }else{
                    setSecondPassats(diferenceInseconds)
                }
               
            }, 1000)
        }

        return () => {
            clearInterval(interval);
        }
    }, [activeCycle, totalSeconds, markCycleAsFinished, setSecondPassats])


    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutsmouht = Math.floor(currentSeconds  / 60);

    const  secondsAmouht = currentSeconds % 60;

    const minutes = String(minutsmouht).padStart(2, '0');
    const seconds = String(secondsAmouht).padStart(2, '0')    

   

    useEffect(() =>{
        if(activeCycle){
            document.title = `${minutes} : ${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    return (
        <CountDownContainer>
                    <span>{minutes[0]}</span>
                     <span>{minutes[1]}</span>
                     <Separator>:</Separator>
                     <span>{seconds[0]}</span>
                     <span>{seconds[1]}</span>
         </CountDownContainer>
    )
}