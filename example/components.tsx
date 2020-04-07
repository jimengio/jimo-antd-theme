import React, { FC } from "react";

import {
  Button,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Rate,
  Radio,
  Switch,
  Slider,
  Select,
  TimePicker,
  Tag,
  Tabs,
  Table,
  Alert,
  Progress,
  Pagination,
  Row,
  Col,
} from "antd";
import { css } from "emotion";

const PreCard: FC<{ title?: string }> = props => {
  const { title, children } = props;

  return (
    <div className={styleCard}>
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

const AntdComponents: FC = () => {
  return (
    <Row>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"Button"}>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
          <Button type="primary" icon="d" />
          <Button type="primary" shape="circle" icon="d" />
          <Button type="primary" shape="round" icon="d" />
          <Button type="primary" shape="round" icon="d">
            Download
          </Button>
          <Button type="primary" icon="d">
            Download
          </Button>
          <br />
          <Button.Group>
            <Button type="primary">Backward</Button>
            <Button type="primary">Forward</Button>
          </Button.Group>
        </PreCard>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"Checkbox"}>
          <Checkbox>Checkbox</Checkbox>
          <Checkbox indeterminate>indeterminate</Checkbox>
        </PreCard>
        <PreCard title={"Radio"}>
          <Radio.Group name="radiogroup" defaultValue={1}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
          </Radio.Group>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button value="a">Hangzhou</Radio.Button>
            <Radio.Button value="b">Shanghai</Radio.Button>
            <Radio.Button value="c">Beijing</Radio.Button>
          </Radio.Group>
        </PreCard>
        <PreCard title={"Switch"}>
          <Switch defaultChecked />
        </PreCard>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"DatePicker"}>
          <DatePicker />
          <br />
          <DatePicker.MonthPicker placeholder="Select month" />
          <br />
          <DatePicker.RangePicker />
          <br />
          <DatePicker.WeekPicker placeholder="Select week" />
        </PreCard>
        <PreCard title={"TimePicker"}>
          <TimePicker />
        </PreCard>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"InputNumber"}>
          <InputNumber />
        </PreCard>
        <PreCard title={"Input"}>
          <Input />
          <Input.TextArea />
          <Input.Group compact>
            <Input style={{ width: "20%" }} defaultValue="0571" />
            <Input style={{ width: "30%" }} defaultValue="26888888" />
          </Input.Group>
        </PreCard>
        <PreCard>
          <Select defaultValue="lucy" style={{ width: 120 }}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
          <br />
          <br />
          <Select defaultValue="lucy" mode={"multiple"} style={{ width: 320 }}>
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="disabled" disabled>
              Disabled
            </Select.Option>
          </Select>
        </PreCard>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"Rate"}>
          <Rate />
        </PreCard>
        <PreCard title={"Slider"}>
          <Slider defaultValue={20} />
        </PreCard>
        <PreCard title={"Progress"}>
          <Progress percent={30} status="active" />
          <Progress percent={50} />
          <Progress percent={70} status="exception" />
          <Progress percent={100} />
        </PreCard>
        <PreCard title={"Tag"}>
          <Tag>Tag 1</Tag>
          <Tag closable>Tag 2</Tag>
          <Tag color="red">Tag 3</Tag>
        </PreCard>
      </Col>
      <Col xs={24} md={12} lg={8}>
        <PreCard title={"Alert"}>
          <Alert message="Success Text" type="success" />
          <Alert message="Info Text" type="info" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </PreCard>
      </Col>
      <Col lg={24}>
        <PreCard title={"Tabs"}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
          <br />
          <Tabs defaultActiveKey="1" type="card">
            <Tabs.TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </Tabs.TabPane>
          </Tabs>
        </PreCard>
      </Col>
      <Col lg={24}>
        <PreCard title={"Table"}>
          <Table
            dataSource={[
              {
                key: "1",
                name: "John Brown",
                age: 32,
                address: "New York No. 1 Lake Park",
              },
              {
                key: "2",
                name: "Jim Green",
                age: 42,
                address: "London No. 1 Lake Park",
              },
              {
                key: "3",
                name: "Joe Black",
                age: 32,
                address: "Sidney No. 1 Lake Park",
              },
            ]}
          >
            <Table.Column title="Name" dataIndex="name" key="lastName" />
            <Table.Column title="Age" dataIndex="age" key="age" />
            <Table.Column title="Address" dataIndex="address" key="address" />
          </Table>
        </PreCard>
        <PreCard title={"Pagination"}>
          <Pagination
            size="small"
            total={500}
            showSizeChanger
            showQuickJumper
          />
          <br />
          <Pagination showSizeChanger defaultCurrent={3} total={500} />
        </PreCard>
      </Col>
    </Row>
  );
};

export default AntdComponents;

const styleCard = css`
  padding: 8px;

  .ant-btn,
  .ant-calendar-picker,
  .ant-input,
  .ant-switch,
  .ant-radio-group {
    margin-right: 8px;
    margin-bottom: 8px;
  }

  .ant-alert,
  .ant-pagination {
    margin-bottom: 8px;
  }

  .ant-btn-group > .ant-btn {
    margin-right: 0;
  }
`;
