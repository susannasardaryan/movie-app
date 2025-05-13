import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from "react-router-dom";
import {setInfo} from "../features/login/loginSlice.ts";
import {useDispatch} from "react-redux";

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onFinish = (values:FieldType) => {
        if(values.remember){
            localStorage.setItem("userInfo", JSON.stringify(values));
        }
        delete values.remember;
        dispatch(setInfo(values))
        navigate("/");
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
        >
            <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;