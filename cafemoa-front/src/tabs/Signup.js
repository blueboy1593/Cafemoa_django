import React from "react";
import {
    Form,
    Input,
    Row,
    Col,
    Button,
    Divider
} from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import store from '../store';
import LatteNavbar from '../headers/LatteNavbar';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class SignUpForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        loading: false,
        role: 'GUEST',
    };

    // 회원가입 버튼 눌렀을 때
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
              const role = this.state.role;
              const user_data = {
                username: values.uid,
                password: values.upass,
                role: role,
                unickname: values.uname,
              }
              const base_url = process.env.REACT_APP_SERVER_IP
              axios.post(base_url + '/accounts/signup/', user_data)
              .then(response => {
                  console.log('회원가입')
                  
                  // 바로 로그인하자.
                  const login_data = response.data
                  console.log(login_data)
                  store.dispatch({type:'LOGIN', user_data:login_data})
                  localStorage.setItem(
                      "user_data",
                      JSON.stringify(login_data)
                  );
                  this.props.history.push('/');
                  
              })
              .catch(error => {
                  console.log('error')
                  console.error(error)
              })
            }
        });
    };

    handleConfirmBlur = (e) => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };


    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('upass')) {
            callback('비밀번호가 다릅니다.');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['upassConfirm'], { force: true });
        }
        callback();
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            role: e.target.value,
        });
    };
    

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 18 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 45,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <>
            <LatteNavbar></LatteNavbar>
            <Row>
                <Col span={2} />
                <Col span={20}>
                    <Divider>회원가입</Divider>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit} className="signupForm mainForm">
                        <Form.Item label="아이디">
                            <Row gutter={8}>
                                <Col span={24}>
                                    {getFieldDecorator('uid', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '아이디를 입력해 주세요!',
                                            },
                                        ],
                                    })(<Input />)}
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item label="비밀번호" hasFeedback>
                            <Row gutter={8}>
                                <Col span={24}>
                                    {getFieldDecorator('upass', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '비밀번호를 입력해 주세요!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>
                        <Form.Item label="비밀번호 확인" hasFeedback>
                            <Row gutter={8}>
                                <Col span={24}>
                                    {getFieldDecorator('upassConfirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '비밀번호를 입력해 주세요!',
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            },
                                        ],
                                    })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>

                        <Form.Item label="이름">
                            <Row gutter={8}>
                                <Col span={24}>
                                    {getFieldDecorator('uname', {
                                        rules: [
                                            { 
                                                required: true, 
                                                message: '이름을 입력해 주세요!' 
                                            }
                                        ],
                                    })(<Input />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {/* {this.state.role} */}
                            <Button className="signupBtn mainBtn" htmlType="submit">
                              회원가입
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={2} />
            </Row>
        </>
        );
    }
}
const SignUp = Form.create({ name: 'signup' })(SignUpForm);

export default SignUp;