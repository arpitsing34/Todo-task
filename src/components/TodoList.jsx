import React, { useState } from "react";
import { Fragment } from "react";
import "../App.css";

let TodoList = (props) => {
  return (
    <Fragment>
      {/* <pre>{JSON.stringify(props.item.checkBox)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-lg ">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-11">
                    <input
                      type="checkbox"
                      checked={props.item.checkBox}
                      onClick={(e) => {
                        props.updateSingleCheck(e.target.checked, props.index);
                      }}
                    />
                    <span
                      className={
                        props.item.checkBox
                          ? "text-decoration-line-through"
                          : ""
                      }
                    >
                      <span className="h5 text-success mx-2">
                        {props.item.inputText}
                      </span>
                    </span>
                  </div>
                  <div className="col-md-1">
                    <i
                      onClick={(e) => props.delete(props.index)}
                      className="fa fa-trash text-danger fa-2x"
                    ></i>
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

export default TodoList;
