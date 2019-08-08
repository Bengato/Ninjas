/*eslint-disable*/
import React from "react";

const Ninja = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 20 ? (
      <div className="ninja border border-secondary rounded" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          Delete Ninja
        </button>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};
export default Ninja;
