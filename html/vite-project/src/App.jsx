import axios from "axios";
import { useEffect, useState, } from "react";
import {List} from 'antd';
import './App.css';
import { Button } from "antd";


export default function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://backoffice.nodemy.vn/api/tasks?pagination[page]=1&pagination[pageSize]=10',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY4NTA3NDQwMSwiZXhwIjoxNjg3NjY2NDAxfQ._5Pk8t5tmFtkklqZ5eUDdCKEJAugnd926_noC5dYKHE'
  }
};

axios.request(config)
.then((response) => {
  let list = response?.data?.data
  setTasks(list)
})
.catch((error) => {
  console.log(error);
});

  }, []);


  function handleDelete(taskId) {
    const url = `https://backoffice.nodemy.vn/api/tasks/${taskId}`;
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY4NTA3NDQwMSwiZXhwIjoxNjg3NjY2NDAxfQ._5Pk8t5tmFtkklqZ5eUDdCKEJAugnd926_noC5dYKHE';
  
    axios.delete(url, {
      headers: { Authorization: token },
      maxBodyLength: Infinity
    })
      .then(response => {
        console.log(`Task ${taskId} has been deleted`);
        console.log(response.data);
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      })
      .catch(error => {
        console.log(`Error deleting task ${taskId}: ${error}`);
      });
  }
  return (
    <>
      <List
  itemLayout="horizontal"
  dataSource={tasks}
  renderItem={(item, index) => (
    <List.Item>
      <List.Item.Meta
        title={<a href={`/${item?.id}`}>{item?.attributes?.title}</a>}
        description={item?.attributes?.date}
      />
      <Button type="primary" danger onClick={() => handleDelete(item?.id)}>
        Xóa
      </Button>
    </List.Item>
  )}
/>
    </>
  );
}