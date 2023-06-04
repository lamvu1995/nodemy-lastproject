import React, { useState, useEffect } from "react";
import axios from "axios"; 
import { useParams } from "react-router-dom";

export default function Taskdetail() {
  const [task, setTask] = useState(null);  
  const { taskId } = useParams();  
  useEffect(() => {
  const config = {
    method: "get",   
    maxBodyLength: Infinity,
    url: `https://backoffice.nodemy.vn/api/tasks/${taskId}`,
    headers: {  
      Authorization: 
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY4NTA3NDQwMSwiZXhwIjoxNjg3NjY2NDAxfQ._5Pk8t5tmFtkklqZ5eUDdCKEJAugnd926_noC5dYKHE" 
     } 
  };
  axios.request(config)
.then((response) => {
  let task = response.data.data;
  setTask(task);
})
.catch((error) => {
  console.log(error);
});
  }, []);

  return (  
        <>
          <h4>{task?.attributes?.title}</h4>   
          <h4>{task?.attributes?.updatedAt}</h4>   
          <h4>{task?.attributes?.createdAt}</h4>
          <h4>{task?.attributes?.date}</h4>   
        </> 
     )}       