import React, { useState, useEffect } from 'react';
import { Task} from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

import '../../styles/task.css'


const TaskListComponent = () => {

    const defaultTask = new Task ('Example', 'Default description', false, LEVELS.NORMAL)
    

//Esatado del componente
    const[ tasks, setTasks ] = useState( defaultTask );
    const [ loading, setLoading ] = useState( true );

    //Control del ciclo de vida

    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            console.log('taskList component is going to unmount')
        };
    }, [tasks]);

    const chanceCompleted =( id ) => {
        console.log('TODO: Cambiar estado de una tarea')

    }


    return (
        <div>
            <div>
                <h1>
                    Your Task: 
                </h1>
            </div>
            {/* TODO aplicar un For/Map para renderizar una lista de tareas */}
            <TaskComponent task={defaultTask}> </TaskComponent>
        </div>
    );
};


export default TaskListComponent;
