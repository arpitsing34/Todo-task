import { useState } from "react";
// import "./App.css";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { Fragment } from "react";

let c = 0;
function App() {
  let [taskList, setTaskList] = useState([]);

  let addList = (task) => {
    setTaskList([...taskList, task]);
    console.log(taskList);
  };

  let btnHide = () => {
    return taskList.filter((ad) => {
      return ad.checkBox === true;
    });
  };

  let deleteSingleData = (recieveIndex) => {
    let storedArray = [...taskList];
    storedArray.splice(recieveIndex, 1);
    setTaskList([...storedArray]);
  };

  let updateSingleCheck = (checkValue, index) => {
    let recieveArr = taskList;
    recieveArr[index].checkBox = checkValue;

    setTaskList([...recieveArr]);
  };

  let leftItems = () => {
    return taskList.filter((arrayOfData) => {
      return arrayOfData.checkBox === false;
    });
  };

  let deleteItem = () => {
    return taskList.filter((arrayOfData) => {
      return arrayOfData.checkBox === true;
    });
  };

  let deleteSelectedItems = () => {
    // let tempArr = taskList;
    let checkedItems = taskList.filter((data) => {
      return data.checkBox !== true;
    });
    setTaskList([...checkedItems]);
  };

  let allChecked = (checkedValue) => {
    let tempArray = taskList;
    tempArray.map((value) => {
      return (value.checkBox = checkedValue);
    });
    setTaskList([...tempArray]);
  };

  return (
    <Fragment>
      <Todo
        addList={addList}
        btnHide={btnHide}
        list={taskList}
        allChecked={allChecked}
      />
      {taskList.map((listItems, i) => {
        return (
          <TodoList
            key={i}
            index={i}
            item={listItems}
            delete={deleteSingleData}
            updateSingleCheck={updateSingleCheck}
          />
        );
      })}

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-lg bg-info">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-9">
                    <span className="mt-2">
                      <b>{leftItems().length}</b>
                      &nbsp;items left
                    </span>
                  </div>
                  <div className="col-sm-3">
                    {btnHide().length > 0 ? (
                      <button
                        className=" btn btn-primary btn-sm"
                        onClick={deleteSelectedItems}
                      >
                        Clear <b>{deleteItem().length}</b>
                        &nbsp;completed items
                      </button>
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
}

export default App;
