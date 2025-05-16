import {Button, Checkbox, Form, type FormProps, Input} from 'antd';
import {useNavigate} from "react-router-dom";
import {setFavoriteMovies, setInfo} from "../features/login/loginSlice.ts";
import {useDispatch} from "react-redux";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import type {Movie} from "../features/movies/moviesSlice.ts";
import {StorageService} from "../services/apiService.ts";

type FieldType = {
    username: string;
    password: string;
    remember?: boolean;
};

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = (values: FieldType) => {
        if (values.remember) {
            localStorage.setItem("userInfo", JSON.stringify(values));
        }
        delete values.remember;
        console.log(values);
        dispatch(setInfo(values));

        const favorites: Movie[] = StorageService.getItem('favorites') ?? [];
        dispatch(setFavoriteMovies(favorites));
        navigate("/");
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="login">
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{minWidth: 500}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                className="white-form"
            >
                <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                >
                    <Input prefix={<UserOutlined/>} placeholder="Username"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
                >
                    <Input prefix={<LockOutlined/>} type="password" placeholder="Password"/>
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;