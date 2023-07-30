import React, { useState } from "react";
import DisplayData from "./DisplayData";

function Searchsec() {
  const [userName, setUserName] = useState(" ");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((value) => {
        if (value) {
          setData(value);
        }
      });
  };

  //darkmode

  return (
    <>
      {/*search body  */}

      <div className="row m-10 p-10 ">
        <div className="col-md-6 mx-auto text-center mt-20">
          <form onSubmit={onSubmitHandler}>
            <div className="col-mb-11 col-sm-12 my-2 formgroup">
              <input
                className="form-control"
                placeholder=" enter username "
                aria-describedby="name"
                type={userName}
                id="w"
                onChange={onChangeHandler}
              />
            </div>

            <div className="col-mb-3 col-mb-12 my-2 formgroup">
              <button type="submit" className="btn btn-success mb-10 my-1">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <DisplayData data={data}></DisplayData>
    </>
  );
}
export default Searchsec;
