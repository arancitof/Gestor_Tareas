import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = () => {


    const {id} = useParams();

    return (
        <div>
            <h1>Detalles de Tarea: - {id} </h1>
        </div>
    );
}

export default TaskDetailPage;
