import React, { Component } from "react";
import "./Home.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Carousel,
  Card,
  Col,
  Row,
  Button,
  DatePicker,
  Pagination,
} from "antd";
import Title from "antd/lib/typography/Title";
import { HomeOutlined, TrophyOutlined, FireOutlined } from "@ant-design/icons";
import moment from "moment";
import Info from "./Info";

const { RangePicker } = DatePicker;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;
const dateFormat = "YYYY-MM-DD";

class Home extends Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <Header style={{ padding: 15 }}>
            <Title style={{ color: "white" }} level={2}>
              GOODRUN
            </Title>
          </Header>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["10"]}>
            <Menu.Item key="1">
              <HomeOutlined />
              <a href="#Home">
                <span className="nav-text">หน้าหลัก</span>
              </a>
            </Menu.Item>
            <Menu.Item key="2">
              <FireOutlined />
              <a href="#Info">
                <span className="nav-text">ข่าวสาร</span>
              </a>
            </Menu.Item>
            <Menu.Item key="3">
              <TrophyOutlined />
              <a href="#Activity">
                <span className="nav-text">กิจกรรม</span>
              </a>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <a name="Home" />
          <Carousel autoplay>
            <div>
              <img
                style={{ width: 1400, height: 400 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/13584a6b-9160-4eae-9cb6-2890a5995b18.jpeg"
              />
            </div>
            <div>
              <img
                style={{ width: 1400, height: 400 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/5adc2b00-598e-412f-a330-a8b17e512398.jpeg"
              />
            </div>
            <div>
              <img
                style={{ width: 1400, height: 400 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/b872186f-de85-4e8b-b33e-3cfb5a604f15.jpeg"
              />
            </div>
            <div>
              <img
                style={{ width: 1400, height: 400 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/9ae6413c-dbf8-4dfb-b04f-9f8f405c7245.jpeg"
              />
            </div>
          </Carousel>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <a name="Info" />
            <h3>ข่าวสาร</h3>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Row gutter={16}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://storage.googleapis.com/s.race.thai.run/files/065ca1a5-1e90-4afa-9b48-27fb5de49021.jpeg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="วิ่งหมาหมา RUN DOG DOG"
                        description="งานวิ่งเวอร์ช่วลรันสุดน่ารัก #วิ่งหมาหมา Run Dog Dog ซีรีย์ที่ 2 จากโครงการ #วิ่งแมวแมว วิ่งที่ไหนก็ได้ วิ่งบนลู่วิ่งก็ได้เช่นกัน ด้วยการสะสมระยะ 10 กิโลเมตร"
                      />
                    </p>

                    <p class="title">
                      <Info showDrawer />
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://www.kaohoon.com/wp-content/uploads/2017/04/20170425_PR_CPF.jpg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="CPF จัดกิจกรรมวิ่งการกุศล"
                        description="CPF จัดกิจกรรมเดิน–วิ่งเพื่อสุขภาพและการกุศล “CPF Running Club วิ่งชมเขื่อน เยือนถิ่นสมเด็จโต” เพื่อส่งเสริมการออกกำลังกาย พร้อมมอบเงินสนับสนุนกิ่งกาช"
                      />
                    </p>
                    <p class="title">
                      <Button type="primary" block>
                        ดูรายละเอียดข่าวสาร
                      </Button>
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://brandbuffet.in.th/wp-content/uploads/2017/05/blackmores-1-re.jpg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="Blackmores งัดกลยุทธ์ Be A Well Being"
                        description="ล่าสุด ทาง“แบลคมอร์ส” ผู้นำด้านผลิตภัณฑ์เสริมอาหาร ตระหนักถึงการกระตุ้นให้ผู้คนหันมาใส่ใจดูแลสุขภาพมากขึ้นภายใต้แนวคิด"
                      />
                    </p>
                    <p class="title">
                      <Button type="primary" block>
                        ดูรายละเอียดข่าวสาร
                      </Button>
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://www.thairath.co.th/media/dFQROr7oWzulq5FZYjuvKtNvpT9sUCwaBXdCR3NuiZXo9JuHrn8qKvUIaWxZVzzMCAy.jpg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="โฟร์ซีซั่นส์ กรุงเทพฯ จัดกิจกรรมวิ่งเพื่อการกุศล ครั้งที่ 21"
                        description="กิจกรรมวิ่งเพื่อระดมทุนหารายได้มอบให้แก่ศูนย์วิจัยโรคโลหิตวิทยาและศูนย์พันธุศาสตร์มะเร็งและโรคของมนุษย์ โรงพยาบาลจุฬาลงกรณ์ สภากาชาดไทย"
                      />
                    </p>
                    <p class="title">
                      <Button type="primary" block>
                        ดูรายละเอียดข่าวสาร
                      </Button>
                    </p>
                  </Card>
                </Col>
              </Row>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Content>
          
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <a name="Activity" />
            <h3>กิจกรรม</h3>
            <div
              className="site-layout-background"
              style={{ padding: 24, textAlign: "center" }}
            >
              <Row gutter={16}>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://storage.googleapis.com/s.race.thai.run/files/a4dfd80c-68f4-4753-9a0c-4a2d42ba8072.jpeg"
                      />
                    }
                  >
                    <p>
                      <Meta class="subtitle" title="STAYING ALIVE VR2020" />
                    </p>
                    <p class="title">
                      <RangePicker
                        defaultValue={[
                          moment("2020-06-10", dateFormat),
                          moment("2020-06-20", dateFormat),
                        ]}
                        disabled
                      />
                    </p>
                    <p>
                      <Link to="/activity1">
                        <Button type="primary" block>
                          สมัครกิจกรรมนี้
                        </Button>
                      </Link>
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://storage.googleapis.com/s.race.thai.run/files/6c0bd1f2-9ad3-4b72-baff-869d0a4a9983.jpeg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="Idemitsu ฉลามชล  Virtual Run 2020"
                      />
                    </p>
                    <p class="title">
                      <RangePicker
                        defaultValue={[
                          moment("2020-04-15", dateFormat),
                          moment("2020-05-09", dateFormat),
                        ]}
                        disabled
                      />
                    </p>
                    <p>
                      <Button type="primary" block>
                        สมัครกิจกรรมนี้
                      </Button>
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://storage.googleapis.com/s.race.thai.run/files/65108896-fe9b-4155-9966-2dd7a7d39dac.jpeg"
                      />
                    }
                  >
                    <p>
                      <Meta
                        class="subtitle"
                        title="THAILAND SERIES 2020  ปี2"
                      />
                    </p>
                    <p class="title">
                      <RangePicker
                        defaultValue={[
                          moment("2020-06-06", dateFormat),
                          moment("2020-07-06", dateFormat),
                        ]}
                        disabled
                      />
                    </p>
                    <p>
                      <Button type="primary" block>
                        สมัครกิจกรรมนี้
                      </Button>
                    </p>
                  </Card>
                  ,
                </Col>
                <Col span={6}>
                  <Card
                    hoverable
                    style={{ width: 300, height: 400 }}
                    cover={
                      <img
                        style={{ width: 300, height: 200 }}
                        alt="example"
                        src="https://storage.googleapis.com/s.race.thai.run/files/6bc9f72c-99ee-4d74-a578-1d2a3574e2fb.jpeg"
                      />
                    }
                  >
                    <p>
                      <Meta class="subtitle" title="Happy Songkran Run 2020 " />
                    </p>

                    <p class="title">
                      <RangePicker
                        defaultValue={[
                          moment("2020-10-05", dateFormat),
                          moment("2020-10-10", dateFormat),
                        ]}
                        disabled
                      />
                    </p>
                    <p>
                      <Button type="primary" block>
                        สมัครกิจกรรมนี้
                      </Button>
                    </p>
                  </Card>
                  ,
                </Col>
              </Row>
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design Layout example Created by Shrideep
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
