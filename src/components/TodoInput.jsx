import React, { useState } from "react";
// Importing Ant Design
import { Modal, Button, Form, Input, DatePicker } from "antd";
import moment from "moment";
// Importing styles sass
import "./../styles/components/todoInput.scss";

const TodoInput = () => {
  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //Form
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  // const validateMessages = {
  //   required: "${label} es requerido!",
  // };
  // const onFinish = (values) => {
  //   console.log(values);
  // };

  //Botón date
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";

  return (
    <>
      <div className="inputs__container">
        <Button type="primary" onClick={showModal} className="btn--modal">
          Add Project
        </Button>

        <Modal
          title="New Project"
          visible={isModalVisible}
          onOk={handleOk}
          okText="Add"
          onCancel={handleCancel}
        >
          <p>New Project</p>
          <Form
            {...layout}
            name="projects"
            // onFinish={onFinish}
            // validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Nombre del Proyecto"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name={["user", "description"]} label="Description">
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="DatePicker">
              <RangePicker
                defaultValue={[
                  moment("2022/01/01", dateFormat),
                  moment("2022/01/31", dateFormat),
                ]}
                format={dateFormat}
              />
            </Form.Item>

            {/* <Form.Item name={["user", "linkHelp"]} label="Enlaces de ayuda">
              <Input />
            </Form.Item> */}
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default TodoInput;

