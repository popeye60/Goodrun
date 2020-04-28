import React, { Component } from "react";
import "./Info.css";
import "antd/dist/antd.css";
import {
  Layout,
  Menu,
  Carousel,
  Typography,
  Statistic,
  Row,
  Col,
  Drawer,
  Button,
} from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const { Header, Content } = Layout;

class Info extends Component {
  state = { visible: false, childrenDrawer: false };

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

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <Layout>
        <div>
          <Button type="primary" block onClick={this.showDrawer}>
            ดูรายละเอียดข่าวสาร
          </Button>
          <Drawer
            title="วิ่งหมาหมา RUN DOG DOG"
            width={520}
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <div>
              <img
                style={{ width: 500, height: 200 }}
                alt="example"
                src="https://storage.googleapis.com/s.race.thai.run/files/065ca1a5-1e90-4afa-9b48-27fb5de49021.jpeg"
              />
            </div>

            <Typography>
              <hr />
              <Title>วิ่งหมาหมา RUN DOG DOG </Title>{" "}
              <Row gutter={8}>
                <Col span={6}>
                  <Statistic
                    title="คนถูกใจ"
                    value={1128}
                    prefix={<LikeOutlined />}
                  />
                </Col>
                <Col span={12}>
                  <Statistic title="คนลงวิ่ง" value={93} suffix="/ 100" />
                </Col>
              </Row>
              <hr />
              <Title level={3}>🐶 ถ้าหนูไม่น่ารัก จะยังรักหนูไหม !!! 🐶</Title>
              <Text strong>
                งานวิ่งเวอร์ช่วลรันสุดน่ารัก #วิ่งหมาหมา Run Dog Dog ซีรีย์ที่ 2
                จากโครงการ #วิ่งแมวแมว วิ่งที่ไหนก็ได้ วิ่งบนลู่วิ่งก็ได้เช่นกัน
                ด้วยการสะสมระยะ 10 กิโลเมตร
                และยังได้บริจาคเพื่อช่วยเหลือน้องหมาที่ถูกทอดทิ้ง
                รายได้จากค่าสมัครทุกรายการ 5% ของยอดขาย
              </Text>
              <Title level={4}>
                มอบให้กับ มะหมาบ้านป้ามณี ด้วยจำนวนน้องหมากว่า 500 ตัว
                ที่ถูกนำมาทิ้ง
              </Title>
              <Paragraph>
                ซีรีย์ที่ 1 โครงการ #วิ่งแมวแมว สมัครได้ที่
                https://race.thai.run/runcatcat
              </Paragraph>
              <Paragraph>
                🎉 งานวิ่งจัดวันอาทิตย์ที่ 16 กุมภาพันธ์ 2563​ (วิ่งตอนเย็น)​
                🎉เปิดรับสมัครตั้งแต่วันนี้ -​ 31 มกราคม 2563 รับจำนวนจำกัด
                1,000 ท่านเท่านั้น 🏞️ สถานที่วิ่ง สนามกอล์ฟค่ายเสนาณรงค์ (
                บรรยากาศดีมากกกกกกก ) ⏰ งานเริ่มเวลา 15.00 น. ถึง 19.00 น. ⏱️🏃
                ออกสตาร์ทวิ่งเวลา 17.00 น.
              </Paragraph>
            </Typography>

            <p>
              <div>
                <img
                  style={{ width: 500, height: 200 }}
                  alt="example"
                  src="https://storage.googleapis.com/s.race.thai.run/events/5dae838186af9769501dcb8d/media/779628c5-22de-49f4-873b-02269b5aa478.jpg"
                />
              </div>
            </p>
            <p>
              <Text strong>
                แล้วมาสนุกด้วยกันเยอะๆนะคะ #วิ่ง #กีฬา #น้องหมา
                #ร้านสมาร์ทเพ็ทมาร์ท #บ้านหมายิ้ม
                #โรงพยาบาลสัตว์หมอสุรศักดิ์และเพื่อน #เดินวิ่ง #การกุศล
              </Text>
            </p>
            <p>
              <Text strong>
                แม้ปี 2020 เราจะพบเจอแต่เรื่องยากลำบาก แต่เราอยากให้สมาชิกไทยรัน
                ลุกขึ้นมาออกกำลังกายด้วยกัน ไม่ว่าจะด้วยวิธี วิ่ง นอน กินและเวท
                ดูแลร่างกายเราให้แข็งแรง สลายความเครียด สลายความกลัว
                ให้จิตแจ่มใส เราจะฝ่าฟันปีนี้ไปด้วยกัน
              </Text>
              <Paragraph>
                #stayingalive2020 #stayingalive #Thailand2020 #fightcovid19
                #กองทุนเทใจสู้โควิด19
              </Paragraph>
            </p>
            <p>
              <div>
                <img
                  style={{ width: 500, height: 200 }}
                  alt="example"
                  src="https://storage.googleapis.com/s.race.thai.run/events/5dae838186af9769501dcb8d/media/edfa6740-3dc2-4248-ab92-711d987fa672.jpg"
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

            {/* <Button type="primary" onClick={this.showChildrenDrawer}>
              Two-level drawer
            </Button> */}
            <Drawer
              title="Two-level Drawer"
              width={320}
              closable={false}
              onClose={this.onChildrenDrawerClose}
              visible={this.state.childrenDrawer}
            >
              This is two-level drawer
            </Drawer>
          </Drawer>
        </div>
      </Layout>
    );
  }
}
export default Info;
