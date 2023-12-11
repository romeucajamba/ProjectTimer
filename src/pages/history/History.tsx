import { useContext } from 'react';
import {HistoryConatiner, HistoryList, Status} from './styles';
import { CycleContext  } from '../../components/context/CycleContex';

export function History(){
    const {cycle} = useContext(CycleContext)
    return (
        <HistoryConatiner>
            <h1>Histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                       {cycle.map(cycle => {
                         return(
                            <tr key={cycle.id}>
                            <td>{cycle.task}</td>
                            <td>{cycle.minutsAmouth} minutos</td>
                            <td>{cycle.startDate.toISOString()}</td>
                            <td>
                               {cycle.finishDate &&  <Status statusColor="green">Concluído</Status>}
                               {cycle.interrupedDate &&  <Status statusColor="red">Interrompido</Status>}
                               {(!cycle.finishDate && cycle.interrupedDate) &&  <Status statusColor="yellow">Em andamento</Status>}
                            </td>
                        </tr>
                         )
                       })}
                        
                    </tbody>
                </table>
            </HistoryList>
        </HistoryConatiner>
    )
}