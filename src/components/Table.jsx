import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {data} from "../utils/data"

export const Table = ({ users, header }) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          {header.length > 0 &&
            header.map((row, index) => {
              return <th key={index}>{row.name}</th>;
            })}
            <th colSpan={3}>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 && (
          <>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td> {user.username} </td>
                  <td> {user.email} </td>
                  <td> {user.age} </td>
                  <td> {user.city} </td>
                  <td>
                    <Link to={`/UserManagement/UserDetail/${user.id}`}>
                      {" "}
                      <button className="detail">Detail</button>{" "}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/UserManagement/edit/${user.id}`}>
                      {" "}
                      <button>Edit</button>{" "}
                    </Link>
                  </td>
                  <td>
                    <Link to={`/UserManagement/delete/${user.id}`}>
                      {" "}
                      <button className="delete">Delete</button>{" "}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </>
        )}

        {users.length === 0 && (
          <tr>
            <td colSpan={5}>No record Found!</td>
          </tr>
        )}
      </tbody>
    </table>


    <table>
      h
    </table>
    </>
    
  );
};
