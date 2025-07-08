/* Componente hijo de task_list */
import React, { useEffect } from "react";
import PropTypes, { func } from "prop-types";
import { Task } from "../../models/task.class";

//Importar la hoja de estilos
import "../../styles/task.css";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log("Created task");
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /* Funcion para comprobar el nivel de la tarea*/

    function taskLevelBadge() {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (
                    <h6 className=" mb-0">
                        <span className="badge bg-primary">{task.level}</span>
                    </h6>
                );
            case LEVELS.URGENT:
                return (
                    <h6 className=" mb-0">
                        <span className="badge bg-warning">{task.level}</span>
                    </h6>
                );
            case LEVELS.BLOCKING:
                return (
                    <h6 className=" mb-0">
                        <span className="badge bg-danger">{task.level}</span>
                    </h6>
                );

            default:
                break;
        }
    }

    /* Funcion para comprobar si la tarea esta completada */

    function taskCompletedIcon() {
        if (task.completed) {
            return (
                <i
                    onClick={() => complete(task)}
                    className="bi bi-toggle-on task-action"
                    style={{ color: "green" }}
                ></i>
            );
        } else {
            return (
                <i
                    onClick={() => complete(task)}
                    className="bi bi-toggle-off task-action"
                    style={{ color: "grey" }}
                ></i>
            );
        }
    }

    const taskCompleted = {
        color: "grey",
        fontWeight: "bold",
        textDecoration: "line-through",
    };

    const taskPending = {
        color: "tomato",
        fontWeight: "bold",
    };

    return (
        <tr
            className="fw-normal"
            style={task.completed ? taskCompleted : taskPending}
        >
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className=" align-middle">
                <span>{task.description}</span>
            </td>
            <td>
                {/* Llamando a la funcion de los niveles de las tareas */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* Llamando a la funcion de saber si la tarea esta completa o no */}
                {taskCompletedIcon()}
                <i
                    className="bi bi-trash task-action"
                    style={{ color: "tomato" }}
                    onClick={() => remove(task)}
                ></i>
            </td>
        </tr>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default TaskComponent;
