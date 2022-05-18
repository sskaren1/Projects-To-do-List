import React, { useState } from "react";
// Importing Ant Design
import {
  Timeline,
  Card,
  Progress,
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import moment from "moment";
// Importing styles sass
import "./../styles/components/todoList.scss";

const TodoList = () => {
  // Modal Edit
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false);
  const showModalEdit = () => {
    setIsModalVisibleEdit(true);
  };
  const handleOkEdit = () => {
    setIsModalVisibleEdit(false);
  };
  const handleCancelEdit = () => {
    setIsModalVisibleEdit(false);
  };
  // Modal Agregar item del proyecto
  const [isModalVisibleItem, setIsModalVisibleItem] = useState(false);
  const showModalItem = () => {
    setIsModalVisibleItem(true);
  };
  const handleOkItem = () => {
    setIsModalVisibleItem(false);
  };
  const handleCancelItem = () => {
    setIsModalVisibleItem(false);
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
  //Botón date
  const { RangePicker } = DatePicker;
  const dateFormat = "YYYY/MM/DD";

  return (
    <>
      <div className="cardProjectsList__container">
        <Timeline mode="left">
          <Timeline.Item color="green" label="2022-09-01">
            <Card className="card-project">
              <div className="card__heading">
                <h3>UX Research</h3>
                <Progress type="circle" percent={100} width={40} />
              </div>
              <div className="card__content">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  tempore vitae maxime ea nostrum.
                </p>
                <div className="startDate">
                  <p className="heading">Start date:</p>
                  <p>Tue, April 05, 2022</p>
                </div>
                <div className="dueDate">
                  <p className="heading">Due date:</p>
                  <p>Tue, April 12, 2022</p>
                </div>
                <div className="card__buttons">
                  <Button
                    className="btn--edit"
                    size="small"
                    onClick={showModalEdit}
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    className="btn--add"
                    size="small"
                    onClick={showModalItem}
                  >
                    <AppstoreAddOutlined />
                  </Button>
                  <Button className="btn--delete" size="small">
                    <DeleteOutlined />
                  </Button>
                </div>
              </div>
            </Card>
            <Modal
              title="Actualizar Proyecto"
              visible={isModalVisibleEdit}
              onOk={handleOkEdit}
              okText="Actualizar"
              onCancel={handleCancelEdit}
            >
              <Form
                {...layout}
                name="projects"
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
              </Form>
            </Modal>

            <Modal
              title="New Project"
              visible={isModalVisibleItem}
              onOk={handleOkItem}
              okText="Add"
              onCancel={handleCancelItem}
            >
              <Form
                {...layout}
                name="projects"
                // onFinish={onFinish}
                // validateMessages={validateMessages}
              >
                <Form.Item name={["user", "linkHelp"]} label="Enlaces de ayuda">
                  <Input />
                </Form.Item>
              </Form>
            </Modal>
          </Timeline.Item>
          <Timeline.Item color="green" label="2022-09-01">
            <Card className="card-project">
              <div className="card__heading">
                <h3>UX Research</h3>
                <Progress type="circle" percent={100} width={40} />
              </div>
              <div className="card__content">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  tempore vitae maxime ea nostrum.
                </p>
                <div className="startDate">
                  <p className="heading">Start date:</p>
                  <p>Tue, April 05, 2022</p>
                </div>
                <div className="dueDate">
                  <p className="heading">Due date:</p>
                  <p>Tue, April 12, 2022</p>
                </div>
              </div>
            </Card>
          </Timeline.Item>
          <Timeline.Item color="red" label="2022-09-01">
            <Card className="card-project">
              <div className="card__heading">
                <h3>Wireframe</h3>
                <Progress type="circle" percent={30} width={40} />
              </div>
              <div className="card__content">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  tempore vitae maxime ea nostrum.
                </p>
                <div className="startDate">
                  <p className="heading">Start date:</p>
                  <p>Tue, April 05, 2022</p>
                </div>
                <div className="dueDate">
                  <p className="heading">Due date:</p>
                  <p>Tue, April 12, 2022</p>
                </div>
              </div>
            </Card>
          </Timeline.Item>
          <Timeline.Item label="2022-09-01">
            <Card className="card-project">
              <div className="card__heading">
                <h3>Wireframe</h3>
                <Progress type="circle" percent={30} width={40} />
              </div>
              <div className="card__content">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  tempore vitae maxime ea nostrum.
                </p>
                <div className="startDate">
                  <p className="heading">Start date:</p>
                  <p>Tue, April 05, 2022</p>
                </div>
                <div className="dueDate">
                  <p className="heading">Due date:</p>
                  <p>Tue, April 12, 2022</p>
                </div>
              </div>
            </Card>
          </Timeline.Item>
          <Timeline.Item color="gray" label="2022-09-01">
            <Card className="card-project">
              <div className="card__heading">
                <h3>Wireframe</h3>
                <Progress type="circle" percent={30} width={40} />
              </div>
              <div className="card__content">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  tempore vitae maxime ea nostrum.
                </p>
                <div className="startDate">
                  <p className="heading">Start date:</p>
                  <p>Tue, April 05, 2022</p>
                </div>
                <div className="dueDate">
                  <p className="heading">Due date:</p>
                  <p>Tue, April 12, 2022</p>
                </div>
              </div>
            </Card>
          </Timeline.Item>
          <Timeline.Item color="#cbea17" label="2022-09-01">
            <p>Custom color testing</p>
          </Timeline.Item>
        </Timeline>
      </div>
    </>
  );
};

export default TodoList;
