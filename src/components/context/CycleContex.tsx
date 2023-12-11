import { ReactNode, createContext, useState } from 'react';


interface Cycle {
    id: string,
    task: string,
    minutsAmouth: number,
    startDate: Date,
    interrupedDate?: Date,
    finishDate?: Date
}

interface CreateCycleData {
    task: string,
    minutsAmouth: number,
}

interface CycleContextType {
    cycle: Cycle[],
    activeCycle: Cycle | undefined,
    activeId: string | null,
    markCycleAsFinished: () => void,
    amountSecondsPassed: number,
    setSecondPassats: (second : number) => void,
    createnewCycle: (data: CreateCycleData) => void,
    interropCurrentCicle: () => void,
}

export const CycleContext = createContext({} as CycleContextType)

interface  CycleContectProviderProps {
    children: ReactNode;
}

export function CycleContextProvider({children,}: CycleContectProviderProps) {

    const [amountSecondsPassed, setmaountSecondsPassed] = useState(0);
    const [cycle, setCycle] = useState<Cycle[]>([])
    const [activeId, setActiveId] = useState<string | null>(null)

    const activeCycle = cycle.find(cycle => cycle.id == activeId);

    function markCycleAsFinished(){

        setCycle(
            (state) => state.map(cycle => {
                if(cycle.id == activeCycle){
                    return {...cycle, finishDate: new Date()}
                }else{
                    return cycle
                }     
        })
        )
       }
    
       function setSecondPassats(second : number){
            setmaountSecondsPassed(second);
       }
    

    function createnewCycle(data: CreateCycleData ){

        const id = String(new Date().getTime())
        
        const newCycle: Cycle  = {
            id,
            task: data.task,
            minutsAmouth: data.minutsAmouth,
            startDate: new Date(),
        }
        
        setCycle((state) => [...state, newCycle]);
        setActiveId(id);
        setmaountSecondsPassed(0);
    }

    const interropCurrentCicle = () =>{

        setCycle(
            cycle.map(cycle => {
                if(cycle.id == activeCycle){
                    return {...cycle, interrupedDate: new Date()}
                }else{
                    return cycle
                }
        }));

        setActiveId(null)
    }


    return(
        <CycleContext.Provider value={{
                cycle,
                activeCycle, 
                activeId, 
                amountSecondsPassed, 
                markCycleAsFinished, 
                setSecondPassats,
                createnewCycle,
                interropCurrentCicle
            
            }}>
                {children}
        </CycleContext.Provider>
    )
}