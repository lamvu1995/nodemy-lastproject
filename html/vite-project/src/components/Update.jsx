import { Button, Checkbox, Form, Input, Switch,DatePicker,message } from 'antd';
import './Add.css'
import axios from 'axios';

const Update = () => {
    const [messageApi, contextHolder] = message.useMessage();
    
    const onFinish = (values) => {
        let date = values.date.format('YYYY-MM-DD')
      let data = JSON.stringify({'data': {...values, date}})
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://backoffice.nodemy.vn/api/tasks',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY4NTA3NDQwMSwiZXhwIjoxNjg3NjY2NDAxfQ._5Pk8t5tmFtkklqZ5eUDdCKEJAugnd926_noC5dYKHE'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        messageApi.open({
          type: 'success',
          content: 'This is an success message',
        });
      })
      .catch((error) => {
        messageApi.open({
          type: 'error',
          content: 'This is a error message',
        });
        console.log(error);
      });
      
    
    };
    const configDeadline = {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please select time!',
          },
        ],
      };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

return (
<>
<h1>Add new</h1>
{contextHolder}
  <Form
  className='add-form'
    name="addForm"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="task-title"
      name="title"
      rules={[
        {
          required: true,
          message: 'vui long dien task title!',
        },
      ]}
    >
      <Input placeholder='fill the task title'/>
    </Form.Item>
    <Form.Item name="date" label="han cong viec" {...configDeadline}>
      <DatePicker />
    </Form.Item>
    <Form.Item name="complete" label="Trang thai" valuePropName="checked">
      <Switch />
    </Form.Item>
    

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
)
}
export default Update;