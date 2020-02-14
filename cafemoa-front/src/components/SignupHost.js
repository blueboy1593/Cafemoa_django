import React from "react";
import {
    Form,
    Input,
    Row,
    Col,
    Button,
    Upload,
    Icon,
    Divider,
    TimePicker
} from 'antd';
import 'antd/dist/antd.css';

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const { TextArea } = Input;

class CafeReg extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        loading: false,
        copen: null,
        cclose: null,
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            // const user_data = this.props.location.state.user_data

            
            // if (role === "GUEST") {
            //   const base_url = process.env.REACT_APP_SERVER_IP
            //   axios.post(base_url + '/user/signup', data)
            //   .then(response => {
            //       console.log('회원가입')
            //       this.props.history.push('/');
            //   })
            //   .catch(error => {
            //       console.log('error')
            //       console.error(error)
            //   })    
            // } else {
            //   const location = {
            //       pathname: '/visitor/signup/host',
            //       state: {
            //           data: data,
            //       }
            //   }
            //   const history = this.props.history;
            //   history.push(location)                
            // }
          }
      });
  };

    onCopenChange = time => {
        console.log(time);
        this.setState({ copen: time });
    };

    onCcloseChange = time => {
        console.log(time);
        this.setState({ cclose: time });
    };


    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Divider>
                        카페 정보 등록
                        </Divider>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="카페 이름">
                            <Row gutter={8}>
                                <Col span={20}>
                                    {getFieldDecorator('cname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '카페 이름을 입력해 주세요!',
                                            },
                                        ],
                                    })(<Input />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>
                        <Form.Item label="카페 위치">
                            <Row gutter={8}>
                                <Col span={20}>
                                    {getFieldDecorator('cloc', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '카페 위치를 입력해 주세요!',
                                            },
                                        ],
                                    })(<Input />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>
                        <Form.Item label="오픈 시간">
                            <Row gutter={8}>
                                <Col span={20}>
                                    {getFieldDecorator('copen', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '오픈 시간을 입력해 주세요!',
                                            },
                                        ],
                                    })(<TimePicker setFieldsValue={this.state.copen} onChange={this.onCopenChange} />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>

                        <Form.Item label="폐점 시간">
                            <Row gutter={8}>
                                <Col span={20}>
                                    {getFieldDecorator('cclose', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '폐점 시간을 입력해 주세요!',
                                            },
                                        ],
                                    })(<TimePicker setFieldsValue={this.state.cclose} onChange={this.onCcloseChange} />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>

                        <Form.Item label="전화번호">
                            <Row gutter={8}>
                                <Col span={20}>
                                    {getFieldDecorator('cphone', {
                                        rules: [
                                          { 
                                            required: true, 
                                            message: '전화번호를 입력해 주세요!' 
                                          },
                                        ],
                                    })(<Input />)}
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>

                        <Form.Item label="카페 소개">
                            <Row gutter={8}>
                                <Col span={20}>
                                    <TextArea rows={4} />
                                </Col>
                                <Col span={4} />
                            </Row>
                        </Form.Item>

                        <Form.Item label="카페 사진">
                            <Upload>
                                <Button>
                                    <Icon type="upload" /> Click to Upload
                                </Button>
                            </Upload>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button htmlType="submit">회원가입</Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={1} />
            </Row>
        );
    }
}
const SignupHost = Form.create({ name: 'cafereg' })(CafeReg);

export default SignupHost;