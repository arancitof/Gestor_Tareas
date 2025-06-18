import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

import "../../styles/task.css";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
    const defaultTask1 = new Task(
        "Example1",
        "Description1",
        true,
        LEVELS.NORMAL
    );
    const defaultTask2 = new Task(
        "Example2",
        "Description2",
        false,
        LEVELS.URGENT
    );
    const defaultTask3 = new Task(
        "Example3",
        "Description3",
        false,
        LEVELS.BLOCKING
    );

    //Esatado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida

    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false);
        return () => {
            console.log("taskList component is going to unmount");
        };
    }, [tasks]);

    const chanceCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    };

    return (
        <div>
            <div className="col-12">
                <div className="card">
                    {/* Header */}
                    <div className="card-header p-3">
                        <h5>Your Task:</h5>
                    </div>
                    {/* Body */}
                    <div
                        className="card-body"
                        data-mdb-perfect-scrollbar="true"
                        style={{ position: "relative", height: "400px" }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col"> Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (
                                        <TaskComponent key={index} task={task}></TaskComponent>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
        </div>
    );
};

export default TaskListComponent;
