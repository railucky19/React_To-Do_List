import React, { useState } from 'react'

export default function Main() {

    const [taskname, settaskname] = useState('');
    const [tasklist, settasklist] = useState([]);

    const tasklistcontent = tasklist.map((task, index) => {
        return (
            <div>
                <p>{task}</p>
                <i class="fas fa-trash-alt" onClick={() => deletetask(index)}></i>
            </div >
        )
    })

    function deletetask(index) {
        let dupliarr = [...tasklist]
        dupliarr.splice(index, 1)
        settasklist(dupliarr)
    }


    function addtask() {
        settasklist([...tasklist, taskname])
    }

    return (
        <div>
            <div className="row justify-content-center" >
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">

                    <h1>React TODO List</h1>
                    <input type="text" placeholder="Enter task" className="form-control" onChange={(e) => { settaskname(e.target.value) }} />
                    <button className="btn btn-success" onClick={addtask}>Add</button>

                    <br />
                    {tasklistcontent}
                </div>
            </div>
        </div>
    )
}
