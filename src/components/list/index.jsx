import React from "react";
import { NavLink } from "react-router-dom";


const List = (props) => {
  return (
    <div>
      
      <h5 className=" fs-13">{}</h5>
      <ul className="list-unstyled mt-5 ">
        {props.data.map((val, i) => (
          <li className="mb-2 py-1">
          
            {val.url ? (
               <NavLink to={val.url} 
               className="link  text-white">
                {val.name}
              </NavLink>
            ) : (
              val.name
            )}
          </li>
        ))}
      </ul>
    </div>
   
  );
};

export default List;
