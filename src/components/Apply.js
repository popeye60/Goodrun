import React, { Component } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Activity.css";

const { Option } = Select;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Apply extends Component {
  state = {
    visible: false,
    name: "",
    email: "",
    id: "",
    gender: "",
    phone: "",
    birthday: "",
    type: "",
  };
  onChangeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  onChangeSubmit = () => {
    let hp = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.id,
      phone: this.state.phone,
    };
    alert(
      "ชื่อ-นามสกุล: " +
        hp.name +
        " อีเมล: " +
        hp.email +
        " เลขประจำตัวประชาชน: " +
        hp.id +
        " เบอร์: " +
        hp.phone
    );
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  render() {
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.showDrawer}>
            <PlusOutlined /> สมัครกิจกรรมนี้
          </Button>
          <Drawer
            title="STAYING ALIVE VR2020"
            width={720}
            onClose={this.onClose}
            visible={this.state.visible}
            bodyStyle={{ paddingBottom: 80 }}
            footer={
              <div
                style={{
                  textAlign: "right",
                }}
              >
                <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                  ยกเลิก
                </Button>
                <Button onClick={this.onChangeSubmit} type="submit">
                  บันทึก
                </Button>
              </div>
            }
          >
            <Form onSubmit={this.apply} layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="Name"
                    label="ชื่อ - นามสกุล"
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่ชื่อและนามสกุลของท่าน",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={this.state.name}
                      onChange={this.onChangeHandle}
                      placeholder="ใส่ชื่อ - นามสกุล"
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่ที่อยู่อีเมลของท่านให้ถูกต้อง",
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "100%" }}
                      addonBefore="http://"
                      addonAfter=".com"
                      name="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.onChangeHandle}
                      placeholder="ใส่อีเมลปัจจุบัน"
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="id"
                    label="เลขประจำตัวประชาชน"
                    rules={[
                      {
                        required: true,
                        message: "กรุณาใส่เลขประจำตัวตามบัตรประชาชน",
                      },
                    ]}
                  >
                    <Input
                      name="id"
                      id="id"
                      value={this.state.id}
                      onChange={this.onChangeHandle}
                      placeholder="ใส่เลขประจำตัวประชาชน"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="gender"
                    label="เพศ"
                    rules={[{ required: true, message: "กรุณาระบุเพศของท่าน" }]}
                  >
                    <Select placeholder="เลือกเพศ">
                      <Option value="male">ชาย</Option>
                      <Option value="female">หญิง</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="phone"
                    label="เบอร์มือถือ"
                    rules={[
                      { required: true, message: "กรุณาใส่เบอร์มือถือของท่าน" },
                    ]}
                  >
                    <Input
                      name="phone"
                      id="phone"
                      value={this.state.phone}
                      onChange={this.onChangeHandle}
                      placeholder="ใส่เบอร์โทร"
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="birthday"
                    label="วันเกิด"
                    rules={[
                      { required: true, message: "กรุณาระบุวันเกิดของท่าน" },
                    ]}
                  >
                    <DatePicker style={{ width: "100%" }} onChange={onChange} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <Form.Item
                    name="type"
                    label="ประเภทการแข่งขัน"
                    rules={[
                      { required: true, message: "กรุณาเลือกประเภทการแข่งขัน" },
                    ]}
                  >
                    <Select placeholder="เลือกประเภทการแข่งขัน">
                      <Option value="1">
                        วิ่งกินนอนฟิต (เสื้อ+หน้ากาก) 380 บาท{" "}
                      </Option>
                      <Option value="2">บริจาค (เสื้อ+หน้ากาก) 480 บาท</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Drawer>
        </div>
      </div>
    );
  }
}
