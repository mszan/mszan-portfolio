import {Home} from "../Home/Home";
import {Work} from "../Work/Work";
import {Contact} from "../Contact/Contact";
import {Col, Row} from "antd";
import {Sider} from "../Sidebar/Sidebar";
import {About} from "../About/About";

function App() {
  return (
    <div className="container">
        <Sider />
        <Row>
            <Col span={24}>
                <Home />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <About />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Work />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Contact />
            </Col>
        </Row>
    </div>
  );
}

export default App;
