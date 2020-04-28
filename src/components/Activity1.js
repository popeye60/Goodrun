import React, { Component } from "react";
import "./Activity.css";
import { Layout, Menu, Carousel, Typography, Alert } from "antd";
import {
  EnvironmentFilled,
  ScheduleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Apply from "./Apply";
import { Link } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const { Header, Content } = Layout;

class Activity1 extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">
            <Title style={{ color: "white" }} level={3}>
              GOODRUN
            </Title>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item>
              <Link to="/">หน้าหลัก</Link>
            </Menu.Item>
            <Menu.Item key="2">ข่าวสาร</Menu.Item>
            <Menu.Item key="3">กิจกรรม</Menu.Item>
          </Menu>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 60 }}
        >
          <Carousel>
            <div>
              <img
                style={{ width: 1500, height: 400 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/a4dfd80c-68f4-4753-9a0c-4a2d42ba8072.jpeg"
              />
            </div>
          </Carousel>

          <Typography>
            <hr />
            <Title level={2}>รายละเอียด</Title>
            <hr />
            <Title level={4}>
              <EnvironmentFilled /> วิ่งที่ไหนก็ได้ .<ScheduleOutlined /> 02
              เมษายน - 30 พฤศจิกายน 2020
            </Title>
            <p>
              <Text strong>เปิดรับสมัคร 1 เม.ย. 2020 เวลา 10.00 น.</Text>
            </p>
            <p>
              <Text strong>ปิดรับสมัคร 30 พ.ย. 2020 เวลา 23.59 น.</Text>
            </p>
            <p>
              <Text strong>
                <ExclamationCircleOutlined />{" "}
                หรือปิดรับสมัครทันทีเมื่อมีผู้สมัครครบเต็มจำนวน
              </Text>
            </p>

            <Alert message="วิ่งกินนอนฟิต (บริจาค+เสื้อ+หน้ากาก)....................................................380 บาท" />
            <Alert message="ซื้อเสื้อเปล่า (บริจาค+เสื้อ+หน้ากาก)......................................................480 บาท" />
            <hr />
            <Title>STAYING ALIVE VR2020</Title>
            <Text strong>
              STAYING ALIVE VR2020 กิจกรรมที่อยากให้คุณแข็งแรง
              และไม่จำกัดเฉพาะการวิ่งเพียงอย่างเดียว ไทยรันชวนออกกำลังกาย
              ชวนทำบุญ........รับเสื้อ หน้ากาก และรวมพลังกันวิ่งสู้ COVID-19
              ไปด้วยกัน!!!
            </Text>
            <Paragraph>
              กิจกรรม STAYING ALIVE VR2020
              การออกกำลังกายแบบเวอร์ชวลที่ออกแบบให้คุณสามารถส่งผลได้ถึง 4 รูปแบบ
              คือ ผลวิ่ง ผลนอน ผลกินและผลการฝึกบริหารกล้ามเนื้อ (เวท โยคะ หรือจะ
              Bodyweight ก็ได้) เป็นกิจกรรม VR ที่มีมากกว่าการวิ่ง
              ให้สมาชิกไทยรันได้ออกกำลังกาย ได้ดูแลสุขภาพตัวเอง
              และได้ร่วมทำบุญสู้ไข้หวัด Covid-19 ไปด้วยกัน
            </Paragraph>
            <Paragraph>
              ทุกการสมัคร บริจาค 50 บาททันที
              เพื่อสมทบทุนจัดหาอุปกรณ์ทางการแพทย์ที่สำคัญ อย่างเช่น
              หน้ากากอนามัย เจลล้างมือและถุงมือเป็นต้น
              มอบให้กับโรงพยาบาลที่ขาดแคลน เพื่อมอบให้บุคลการทางการแพทย์
              ผู้เป็นแนวหน้ารับมือกับไข้หวัด Covid-19
            </Paragraph>
          </Typography>

          <p>
            <div>
              <img
                style={{ width: 1500, height: 600 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/events/5e7d9592caa959c319eee857/media/6417feeb-72da-4862-a8ca-6a593d2ee84e.jpg"
              />
            </div>
          </p>
          <p>
            <Text strong>
              มอบให้......กองทุนเทใจสู้โควิด19
              กองทุนช่วยเหลือบุคลากรทางแพทย์ด้วยการจัดซื้ออุปกรณ์ป้องกันการแพร่ระบาดของไวรัส
              COVID-19 เช่น หน้ากากอนามัย หน้ากาก N95 ชุด PPE เป็นต้น
            </Text>
          </p>
          <p>
            <Text strong>
              แม้ปี 2020 เราจะพบเจอแต่เรื่องยากลำบาก แต่เราอยากให้สมาชิกไทยรัน
              ลุกขึ้นมาออกกำลังกายด้วยกัน ไม่ว่าจะด้วยวิธี วิ่ง นอน กินและเวท
              ดูแลร่างกายเราให้แข็งแรง สลายความเครียด สลายความกลัว ให้จิตแจ่มใส
              เราจะฝ่าฟันปีนี้ไปด้วยกัน
            </Text>
            <Paragraph>
              #stayingalive2020 #stayingalive #Thailand2020 #fightcovid19
              #กองทุนเทใจสู้โควิด19
            </Paragraph>
          </p>
          <p>
            <div>
              <img
                style={{ width: 1500, height: 600 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/events/5e7d9592caa959c319eee857/media/363a68df-a2f2-4298-a660-962915884038.png"
              />
            </div>
          </p>
          <Title level={4}>ทำไมต้องมีมากกว่าการวิ่ง </Title>
          <Paragraph>
            การวิ่งไม่ใช่วิธีเดียวที่จะทำให้คุณสุขภาพแข็งแรง
            แต่ยังมีองค์ประกอบอื่นๆ ด้วย อย่างเช่น การนอนของคนวัยทำงาน (26-64
            ปี) ควรนอนวันละ 7-9 ชั่วโมง การรับประทานอาหาร
            ผู้ชายก็ควรรับปริมาณแคลอรีต่อวันอยู่ที่ 1,800-2,500 กิโลแคลอรี่
            ผู้หญิง 1,500-2,000 กิโลแคลอรี/วัน หากมากว่านั้น
            ร่างกายก็จะสะสมเป็นไขมันส่วนเกินและเป็นโรคอ้วนได้
            หรือแม้แต่การฝึกบริหารกล้ามเนื้อ ไม่ว่าจะเวท จะ Bodyweight
            ก็จะช่วยรักษาและสร้างมวลกล้ามเนื้อ เพิ่มความแข็งแรง
            ช่วยลดการบาดเจ็บกล้ามเนื้อจากการวิ่ง
            ช่วยโทนร่างกายให้ดูสมสวยสวยงามและช่วยลดการเกิดโรค office syndrome
            เป็นต้น
          </Paragraph>

          <p>
            <Apply showDrawer />
            {/* <Button type="primary" onClick={this.showDrawer}>
              <PlusOutlined /> สมัครกิจกรรมนี้
            </Button> */}
          </p>
        </Content>
      </Layout>
    );
  }
}
export default Activity1;
