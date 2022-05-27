
import axios from "axios";
import React, {useEffect, useState} from "react";

const Todos = () => {

const [todos, setTodos] = useState([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    
    //useEffect to run anything only one
  //useEffect when one particular state value changes
  useEffect(() => {
      //method
   const getTodo = async () => {
     let res = await axios.get(`http://localhost:8080/users?_page=${page}&_limit= ${limit}`);
     //console.log(res);
     setTodos(res.data);
     setTotalCount(Number.parseInt(res.headers["x-total-count"]));//convrt str=>num
    };
    getTodo();
  }, [page, limit]);
      

  return (
    <div>
      
       <button disabled={page <= 1} onClick={() => setPage(page - 1)}>{`<`}</button>
      
      <select onChange={(e) => setLimit(Number(e.target.value))}>
        <option value={5} >5</option>
        <option value={10} >10</option>
        <option value={20} >20</option>
      </select>

      <button disabled={totalCount < page*5} onClick={() => setPage(page+1)}>{ `>`}</button>
    
      {todos.map(e => (
      <div key={e.id}>{e.id} : {e.name} </div>
      ))}
      <h3>{ page }</h3>
    </div>
  );
}

export default Todos;
