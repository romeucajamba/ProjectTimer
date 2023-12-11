
//Minha bibliotec de icones
import { HandPalm, Play } from 'phosphor-react';

// Meus componentes estilizados vindo do styled-Components
import {HomeContainer} from './styles';

import {StartCountdownButton, StopCountdownButton} from './styles';

//controlled / Uncontrolled || controled components, são formulários controlados e pode ser plicado a inputs html
//Controlled component é monitorar cada digitação feita eplo usuário no input e salvar o estado
import {FormProvider, useForm} from 'react-hook-form';

// Zod minha biblioteca de validação
import {zodResolver} from '@hookform/resolvers/zod';
import * as zod from 'zod';

import { NewCycleForm } from './newCycleForm';
import { CountDown } from './countDown';
import { CycleContext  } from '../../components/context/CycleContex';
import { useContext } from 'react';


//Criando as minhas regras de validação
const newCycloFormvalidation = zod.object({
    //Estou a dizer que a informação no input deve ser uma string e que no minimo deve ter 5 caracteres, senão vai pedir para informar a tarefa
    task: zod.string().min(5, 'Informe a tarefa'),
    //Estou a dizer que a informação no input deve ser um numero e que no minimo o minuto deve ser 5 e no máximo deve ser 60
    minutsAmouth: zod.number().min(1, ' O valor mínimo é 5').max(60, ' O valor máximo é 60'),

})

//Tipando o meu Zod                 //O zod está como código JS então para o TypeScript entender, devemos passar antes o tupeof
type NewCycleFormatData = zod.infer<typeof newCycloFormvalidation>

export function Home(){
    const {createnewCycle, interropCurrentCicle, activeCycle} = useContext(CycleContext);
    const newCycleForm = useForm<NewCycleFormatData>({
        //Usando o resolver de validação que é o meu Zod
        resolver: zodResolver(newCycloFormvalidation),
        defaultValues:{
           task: '',
           minutsAmouth: 0,
        }
    })
   const {handleSubmit, watch, reset} = newCycleForm;

   function handleCreateNewCycle(data: NewCycleFormatData){
        createnewCycle(data)
        reset()
   }

//Nosso hook que nos permite trabalhar tanto com Controlled e Uncotrolled no recat e ter o melhor dos dois mundo e melhora na oerformance
    //Register é uma função que tem métodos que ajudam a trabalhar com input no nosso formulário
  
    

   

   

//O método watch nos permite observar os campos ou os inputs se estão preenchidos ou não,
//se estiver preenchido o botão lá embaixo será habilitado
    const task = watch('task')

   const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action=''>

                   <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                   </FormProvider>
                    <CountDown />
                 

                {activeCycle ? (
                    <StopCountdownButton onClick={interropCurrentCicle} type='button'>
                    <HandPalm size={24}/>
                    Interromper
                </StopCountdownButton>
                ) : (
                    <StartCountdownButton disabled={isSubmitDisabled} type='submit'>
                    <Play size={24}/>
                    Começar
                </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    )
}