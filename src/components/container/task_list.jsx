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
        setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => {
            console.log("taskList component is going to unmount");
        };
    }, [tasks]);


    function completedTask(task) {
        console.log(' Complete this task;', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        //Actualizar el estado del componente y actualizar la iteración de las tareas
        //En orden a que se vean reflejadas las tareas completadas
        setTasks(tempTasks);
    }

    function deleteTask(task) {
        console.log(' Delete this task;', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);

    }

    function addTask(task) {
        console.log(' Add this task;', task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
        return (
            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" style={{ width: '200px'}}> Title</th>
                            <th style={{ minWidth: '300px'}}className="d-none d-lg-table-cell" scope="col">Description</th>
                            <th scope="col" style={{ width: "120px" }}>Priority</th>
                            <th scope="col" style={{ width: "150px" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => {
                            return (
                                <TaskComponent
                                    key={index}
                                    task={task}
                                    complete={completedTask}
                                    remove={deleteTask}
                                >
                                </TaskComponent>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>
    } else {
        tasksTable = (
            <div>
                <h3>There are no tasks to display</h3>
                <h6>Please create a new task</h6>
            </div>
        )
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center'
    }

    return (
        <div className="container-fluid p-0 m-0">
            {/* Listado de tareas */}
            <div className="row-justify-content-center">
                <div className="col-12">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-primary text-white">
                            <h5 className="mb-0">Your Tasks:</h5>
                        </div>
                        {/* Body */}
                        <div className="card-body"
                        style={{ minHeight: '300px', overflowY:'auto'}}
                        >
                            {loading ? (
                                <p style={loadingStyle}>Loading Tasks...</p>
                            ) : (
                                tasksTable
                            )
                        }
                        </div>
                    </div>
                </div>

                {/* Formulario */}
                <div className="col-12 mt-3">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <TaskForm add={addTask} length={tasks.length} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //<div>
          //  <div className="container-fluid py-3">
            //    {/* Listado de tareas */}
              //  <div className="row justify-content-center">
                //    <div className="card ">
                  //      {/* Header */}
                    //    <div className="card-header p-3">
                      //      <h5>Your Task:</h5>
                        //</div>
                     //   {/* Body */}
                        //<div
                            //className="card-body"
                           // data-mdb-perfect-scrollbar="true"
                         //   style={{ position: "relative", height: "400px" }}
                       // >
                           // {/* TODO Loading Spinner */}
                            //{loading ? <p style={loadingStyle}>Cargando Tareas...</p> : tasksTable}
                        //</div>
                    //</div>
                //</div>
            //</div>
            //<TaskForm add={addTask} length={tasks.length}></TaskForm>
        //</div>
    );
};

export default TaskListComponent;
