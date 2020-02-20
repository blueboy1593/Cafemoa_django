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
    Radio,
    Icon,
    Upload,
    message
} from 'antd';
import 'antd/dist/antd.css';
// import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let optionId = 0;

class MyCafe extends React.Component {
    state = {
        menuAddVisible: false,
        menuDetailVisible: false,
    };

    // 모달 관련 메소드
    showMenuAdd = () => {
        this.setState({
            menuAddVisible: true,
        });
    };

    handleMenuAddOk = e => {
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

    removeOption = k => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('optionKeys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            optionKeys: keys.filter(key => key !== k),
        });
    };

    addOption = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('optionKeys');
        const nextKeys = keys.concat(optionId++);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            optionKeys: nextKeys,
        });
    };


    render() {
        // key값 다 수정해야 함~! 
        const columns = [
            {
                title: '메뉴 사진',
                dataIndex: 'mpic',
                key: 'mnpic',
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


        // 더미 데이터
        const data = [
            {
                key: '1',
                mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
                mname: 'John Brown',
                mquantity: 1,
                mprice: 4000,
                moption: '샷 추가',
            },
            {
                key: '2',
                mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
                mname: 'John Brown',
                mquantity: 2,
                mprice: 3000,
                moption: '없음',
            },
            {
                key: '3',
                mpic: "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[110563]_20150813222100303.jpg",
                mname: 'John Brown',
                mquantity: 3,
                mprice: 2500,
                moption: '휘핑 추가',
            },
        ];


        const { getFieldDecorator, getFieldValue } = this.props.form;
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
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };

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
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        getFieldDecorator('optionKeys', { initialValue: [] });
        const optionKeys = getFieldValue('optionKeys');
        const optionItems = optionKeys.map((k, index) => (
            <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? '옵션' : ''}
                required={false}
                key={k}
            >
                <Input placeholder="옵션명" style={{ width: '40%', marginRight: 5 }} />
                <Input placeholder="추가 가격" style={{ width: '40%', marginRight: 5 }} suffix="원" />
                {optionKeys.length > 1 ? (
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => this.removeOption(k)}
                    />
                ) : null}
            </Form.Item>
        ));


        return (
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
                                <Input id="mname" allowClear style={{ width: '80%', marginRight: 5 }} />
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="메뉴 사진">
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="사이즈">
                                <Radio.Group defaultValue={2}>
                                    <Radio value={1}>있음</Radio>
                                    <Radio value={2}>없음</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="가격">
                                {/* 사이즈 없을 때
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="S" suffix="원" /> */}
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="S" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="M" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="L" suffix="원" />
                                {/* <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="톨" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="그란데" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="벤티" suffix="원" /> */}
                            </Form.Item>

                            {optionItems}
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="dashed" onClick={this.addOption} style={{ width: '50%' }}>
                                    <Icon type="plus" />옵션 추가
                                </Button>
                            </Form.Item>

                        </Form>
                    </Modal>
                    <Table columns={columns} dataSource={data} onRowClick={this.showMenuDetail} />
                    {/*
                    메뉴 수정 삭제를 위한 모달
                    -> 아직 수정 안했음~~~~~~~~
                    */}
                    <Modal
                        title="메뉴 정보"
                        visible={this.state.menuDetailVisible}
                        onOk={this.handleMenuDetailOk}
                        onCancel={this.handleMenuDetailCancel}
                        footer={[
                            <Button key="back" onClick={this.handleMenuDetailCancel}>취소</Button>,
                            <Button key="update" type="primary" onClick={this.handleMenuUpdate}>수정</Button>,
                            <Button key="delete" type="primary" onClick={this.handleMenuDelete}>삭제</Button>,
                        ]}
                    >
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Item {...formItemLayout} label="메뉴 이름">
                                <Input id="mname" allowClear style={{ width: '80%', marginRight: 5 }} />
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="메뉴 사진">
                                <Upload {...props}>
                                    <Button>
                                        <Icon type="upload" /> Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="사이즈">
                                <Radio.Group defaultValue={2}>
                                    <Radio value={1}>있음</Radio>
                                    <Radio value={2}>없음</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item {...formItemLayout} label="가격">
                                {/* 사이즈 없을 때
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="S" suffix="원" /> */}
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="S" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="M" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="L" suffix="원" />
                                {/* <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="톨" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="그란데" suffix="원" />
                                <Input allowClear style={{ width: '30%', marginRight: 5 }} prefix="벤티" suffix="원" /> */}
                            </Form.Item>

                            {optionItems}
                            <Form.Item {...formItemLayoutWithOutLabel}>
                                <Button type="dashed" onClick={this.addOption} style={{ width: '50%' }}>
                                    <Icon type="plus" />옵션 추가
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Col>
                <Col span={1} />
            </Row >
        );
    }
}

const MyCafeManage = Form.create({ name: 'mycafe' })(MyCafe);
// ReactDOM.render(<MyCafeManage />, document.getElementById("react-root"));

export default MyCafeManage;