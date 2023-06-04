import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, userSlice } from '../redux/userSlice';

export default function Login() {
  const dispatch = useDispatch()
const nav = useNavigate()
    function onFinish(values) {
     
        let data = JSON.stringify(values);
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'https://backoffice.nodemy.vn/api/auth/local/',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImlhdCI6MTY4NTA3NDQwMSwiZXhwIjoxNjg3NjY2NDAxfQ._5Pk8t5tmFtkklqZ5eUDdCKEJAugnd926_noC5dYKHE'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          let txtData = JSON.stringify(response.data)
          localStorage.setItem('user', txtData)
          const user = response.data.user
          dispatch(setUser(user))
          nav('/')
        })
        .catch((error) => {
          console.log(error);
        });
      }        
      return (
    <Form
    name="normal_login"
    className="login-form"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
  >
    <Form.Item
      name="identifier"
      rules={[
        {
          required: true,
          message: 'Please input your Username!',
        },
      ]}
    >
      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your Password!',
        },
      ]}
    >
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    <Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <a className="login-form-forgot" href="">
        Forgot password
      </a>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit" className="login-form-button">
        Log in
      </Button>
      Or <a href="">register now!</a>
    </Form.Item>
  </Form>
      )
}