/* Componente hijo de task_list */
import React, { useEffect } from 'react';
import PropTypes, { func } from 'prop-types';
import { Task } from '../../models/task.class';

//Importar la hoja de estilos
import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {

    useEffect(() => {
        console.log('Created task');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        }
    }, [task]);

    /* Funcion para comprobar el nivel de la tarea*/

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className=' mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (<h6 className=' mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return (<h6 className=' mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)

            default:
                break;
        }
    }

    /* Funcion para comprobar si la tarea esta completada */

    function taskCompletedIcon() {
        if (task.completed) {
            return (<i className="bi bi-toggle-on" style={{ color: 'green' }}></i>)
        } else {
            return (<i className="bi bi-toggle-off" style={{ color: 'grey' }}></i>)
        }
    }



    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className=' align-middle'>
                <span>{task.description}</span>
            </td>
            <td>
                {/* Llamando a la funcion de los niveles de las tareas */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* Llamando a la funcion de saber si la tarea esta completa o no */}
                { taskCompletedIcon() }
                <i className='bi bi-trash' style={{ color: 'tomato' } }></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
