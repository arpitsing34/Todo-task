import React, { Fragment } from "react";
import { useState } from "react";

let Todo = (props) => {
  let [state, setState] = useState({
    task: {
      inputText: "",
      checkBox: false,
    },
  });
  let { task } = state;

  let updateInput = (event) => {
    setState((state) => ({
      task: { ...task, inputText: event.target.value },
    }));
  };

  let submitForm = (event) => {
    event.preventDefault();
    console.log(task.inputText);
    if (task.inputText !== "") props.addList(task);
    setState((state) => ({
      task: {
        ...task,
        inputText: "",
      },
    }));
  };

  return (
    <Fragment>
      {/* <pre>{JSON.stringify(task)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body ">
                <p className="h1 text-center">Todos</p>
                <form onSubmit={submitForm}>
                  <div className="mb-2">
                    <input
                      onChange={updateInput}
                      className="form-control form-control-lg mt-4"
                      type="text"
                      placeholder="What needs to be done?"
                      value={task.inputText}
                    />
                  </div>
                </form>
                <div className="mb-3">
                  <div className="form-check-label">
                    {props.list.length > 0 ? (
                      <>
                        {" "}
                        <input
                          //name="checkBox"
                          type="checkbox"
                          className="form-check-label"
                          checked={props.btnHide().length === props.list.length}
                          onClick={(e) => props.allChecked(e.target.checked)}
                        />
                        <label className="form-check-label">
                          &nbsp; Mark all as complete
                        </label>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
