import { FormConatiner, TaskInput, MinutsAmouthInput } from './styles';
import { useContext } from 'react';
import { CycleContext } from '../../../components/context/CycleContex';
import { useFormContext } from 'react-hook-form';


export function NewCycleForm(){
   const {activeCycle} = useContext(CycleContext)
   const {register} = useFormContext()
    
    return (
        <FormConatiner>
        <label htmlFor='task'>Vou trabalhar em</label>
        <TaskInput  
            id='task' 
            list='task-suggestions' 
            placeholder='Dê um nome para o seu projeto' 
            {...register('task')}
            disabled={!!activeCycle}
        />

        <datalist id='task-suggestions'>
            <option value="projecto IgnithTimer com reactjs"/>
            <option value="Projecto com Nextjs"/>
            <option value="Projecto com NextJss"/>
            <option value="Estudos iniciais de node"/>
        </datalist>

        <label htmlFor="minutsAmouth">durante</label>
        <MinutsAmouthInput 
            type="number" 
            id='minutsAmouth' 
            placeholder='00' 
            step={5} min={1} max={60}
            disabled={!!activeCycle}
            {...register('minutsAmouth', {valueAsNumber: true})}
        />
        <span>minutos.</span>
    </FormConatiner>
    )
}