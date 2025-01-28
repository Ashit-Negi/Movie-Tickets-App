import { Button, Col, Form, Input, Modal, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function TheaterFormModel({isModalOpen , setIsModalOpen}) {
  const handleCancel =()=>{
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal open={isModalOpen}>
        <Form layout="vertical" style={{ width: "100%", padding: "20px" }}>
          <Row
            gutter={{
              xs: 6,
              sm: 10,
              md: 12,
              lg: 16,
            }}
          >
            <Col span={24}>
              <Form.Item
                label="Theater Name"
                htmlFor="name"
                name="name"
                style={{ marginBottom: "16px" }} // Applied margin spacing
                rules={[
                  {
                    required: true,
                    message: "Theater name is required",
                  },
                ]}
              >
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter the theater name"
                  style={{ padding: "10px", borderRadius: "5px" }} // Styled input field
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Theater Address"
                htmlFor="address"
                name="address"
                style={{ marginBottom: "16px" }}
                rules={[
                  { required: true, message: "Theatre address is required" },
                ]}
              >
                <TextArea
                  id="address"
                  rows={3}
                  placeholder="Enter the Theater address please!"
                  style={{ padding: "10px", borderRadius: "5px" }} // Styled textarea
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Row
                gutter={{
                  xs: 6,
                  sm: 10,
                  md: 12,
                  lg: 16,
                }}
              >
                <Col span={12}>
                  <Form.Item
                    label="Email"
                    htmlFor="email"
                    name="email"
                    style={{ marginBottom: "16px" }}
                    rules={[{ required: true, message: "Email is required" }]}
                  >
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter the Email"
                      style={{ padding: "10px", borderRadius: "5px" }}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label="Phone Number"
                    htmlFor="phone"
                    name="phone"
                    style={{ marginBottom: "16px" }}
                    rules={[
                      { required: true, message: "Phone Number is required" },
                    ]}
                  >
                    <Input
                      id="phone"
                      type="number"
                      placeholder="Enter the Phone Number"
                      style={{ padding: "10px", borderRadius: "5px" }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button
              block
              type="primary"
              htmlType="submit"
              style={{ fontSize: "1rem", fontWeight: "600", padding: "12px" }}
            >
              Submit the Data
            </Button>
            <Button block style={{ marginTop: "10px", padding: "12px" }} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default TheaterFormModel;
