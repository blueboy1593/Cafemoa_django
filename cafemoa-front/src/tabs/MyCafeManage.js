import React from "react";
import {
    Row,
    Col,
    Switch,
    Divider,
    Table,
    Button,
    Modal,
    Form,
    Input,
    Icon,
    Upload,
    message
} from 'antd';
import 'antd/dist/antd.css';
import PCNavbar from '../headers/PCNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import store from '../store';

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log(info.file)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
      
    },
  };

const pictures = [
    "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
    "https://www.kfckorea.com/nas/product/XcMIvGGXjcuM.jpg",
    "https://sc01.alicdn.com/kf/HTB1WPBcklDH8KJjy1zeq6xjepXav/Fruit-juice-production-line-juice-filling-machine.jpg_350x350.jpg"
]

class MyCafe extends React.Component {
    state = {
        menuAddVisible: false,
        menuDetailVisible: false,
        menus:[]
    };

    

    // 모달 관련 메소드
    showMenuAdd = () => {
        this.setState({
            menuAddVisible: true,
        });
    };

    handleSubmit = () => {
        console.log('핸들서브밋')
    }

    handleMenuAddOk = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values)
                console.log(pictures)
                console.log(this)
                const L = this.state.menus.length
                const menu = {
                    mname:values.mname,
                    mprice:values.mprice,
                    mpic:pictures[L],
                    key: (L + 1)
                }

                this.setState({
                    menus: [
                        ...this.state.menus,
                        menu
                    ]
                })
                console.log(this.props.form)
            }
        })
        this.setState({
            menuAddVisible: false,
        });
    };
    

    handleMenuAddCancel = e => {
        this.setState({
            menuAddVisible: false,
        });
    };

    showMenuDetail = () => {
        this.setState({
            menuDetailVisible: true,
        });
    };

    handleMenuDetailOk = e => {
        this.setState({
            menuDetailVisible: false,
        });
    };

    handleMenuDetailCancel = e => {
        this.setState({
            menuDetailVisible: false,
        });
    };

    

    render() {
        // console.log(this.state)
        // key값 다 수정해야 함~! 
        const columns = [
            {
                title: '메뉴 사진',
                dataIndex: 'mpic',
                key: 'mpic',
                render: image => <img src={image} width="45px" alt="이미지" />,
            },
            {
                title: '메뉴 이름',
                dataIndex: 'mname',
                key: 'mname',
                // render: text => <a>{text}</a>,
            },
            {
                title: '가격',
                dataIndex: 'mprice',
                key: 'mprice',
                // render: price => <a>{price}원</a>,
            },
        ];

        const data = this.state.menus
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        // const formItemLayoutWithOutLabel = {
        //     wrapperCol: {
        //         xs: { span: 24, offset: 0 },
        //         sm: { span: 20, offset: 4 },
        //     },
        // };

        

        return (
            <>
            <PCNavbar></PCNavbar>
            <Row>
                <Col span={1} />
                <Col span={22}>
                    <Divider>카페 운영 활성화</Divider>
                    <Switch checkedChildren="OPEN" unCheckedChildren="CLOSE" />
                    {/* 현재 운영 여부에 따라 defaulChecked 해줘야 함 */}
                    <Divider>카페 메뉴 현황</Divider>
                    <div style={{ textAlign: 'right', marginBottom: 5 }}>
                        <Button icon="plus" onClick={this.showMenuAdd}>메뉴 등록</Button>
                    </div>
                    <Modal
                        title="메뉴 등록"
                        visible={this.state.menuAddVisible}
                        onOk={this.handleMenuAddOk}
                        onCancel={this.handleMenuAddCancel}
                        okText="등록"
                        cancelText="취소"
                    >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item {...formItemLayout} label="메뉴 이름">
                                {getFieldDecorator('mname', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '메뉴 이름',
                                        },
                                    ],
                                })(<Input allowClear style={{ width: '80%', marginRight: 5 }}/>)}
                                {/* <Input id="mname" allowClear style={{ width: '80%', marginRight: 5 }} /> */}
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="메뉴 사진">
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="가격">
                                {getFieldDecorator('mprice', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '가격',
                                        },
                                    ],
                                })(<Input allowClear style={{ width: '30%', marginRight: 5 }} suffix="원"/>)}
                            </Form.Item>
                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={data} onRowClick={this.showMenuDetail} />
                    {/*
                    메뉴 수정 삭제를 위한 모달
                    -> 아직 수정 안했음~~~~~~~~
                    */}
                </Col>
                <Col span={1} />
            </Row >
            </>
        );
    }
}

const MyCafeManage = Form.create({ name: 'mycafe' })(MyCafe);
// ReactDOM.render(<MyCafeManage />, document.getElementById("react-root"));

export default MyCafeManage;