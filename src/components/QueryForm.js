import {
  Button,
  Form,
  Input,
  Checkbox,
  Col,
  Row,
  theme,
  DatePicker,
} from "antd";
import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const fieldsConfig = [
  {
    key: "MeanClosingDuration",
    value: "MeanClosingDuration",
    label: "Mean closing duration",
  },
  {
    key: "CoeficientOfVarianceOfClosing",
    value: "CoeficientOfVarianceOfClosing",
    label: "Coeficient of variance of closing",
  },
  {
    key: "MeanTappingFrequency",
    value: "MeanTappingFrequency",
    label: "Mean tapping frequency",
  },
  {
    key: "CoeficientOfVarianceOfTapping",
    value: "CoeficientOfVarianceOfTapping",
    label: "Coeficient of variance of tapping",
  },
  {
    key: "CoeficientOfVarianceOfAmpliude",
    value: "CoeficientOfVarianceOfAmpliude",
    label: "Coeficient of variance of ampliude",
  },
  {
    key: "TotalTapCount",
    value: "TotalTapCount",
    label: "Total tap count",
  },
  {
    key: "MeanInterTapInterval",
    value: "MeanInterTapInterval",
    label: "Mean inter tap interval",
  },
  {
    key: "IntraIndiidualVariance",
    value: "IntraIndiidualVariance",
    label: "Intra indiidual variance",
  },
  {
    key: "MaxSpeed",
    value: "MaxSpeed",
    label: "Max speed",
  },
  {
    key: "DecrementOnSpeed",
    value: "DecrementOnSpeed",
    label: "Decrement on speed",
  },
  {
    key: "DecrementOnAltitude",
    value: "DecrementOnAltitude",
    label: "Decrement on altitude",
  },
];
export const QueryForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { token } = theme.useToken();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const getFields = () => {
    if (expand) {
      const children = [];
      for (let i = 0; i < fieldsConfig.length; i++) {
        children.push(
          <Col key={fieldsConfig[i].key}>
            <Checkbox value={fieldsConfig[i].value}>
              {fieldsConfig[i].label}
            </Checkbox>
          </Col>
        );
      }
      return (
        <Col span={24}>
          <Form.Item name="selectFields" label="Fields">
            <Checkbox.Group style={{ display: "block" }}>
              <Row>{children}</Row>
            </Checkbox.Group>
          </Form.Item>
        </Col>
      );
    }
    return [];
  };
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        padding: "16px 0",
        background: colorBgContainer,
      }}
    >
      <Form
        form={form}
        name="advanced_search"
        style={formStyle}
        onFinish={onFinish}
      >
        <Row gutter={8}>
          <Col span={6}>
            <Form.Item name="CandidateID" label="Candidate ID">
              <Input placeholder="please enter" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="Source" label="Source">
              <Input placeholder="please enter" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="TestType" label="Test Type">
              <Input placeholder="please enter" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="StartDate" label="Start Date">
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>{getFields()}</Row>
        <Row>
          <Col
            span={24}
            style={{
              textAlign: "right",
            }}
          >
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => {
                form.resetFields();
              }}
            >
              Clear
            </Button>
            <Button
              type="link"
              style={{
                fontSize: 12,
              }}
              onClick={() => {
                setExpand(!expand);
              }}
            >
              {expand ? <UpOutlined /> : <DownOutlined />} Collapse
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
