import React , { useState } from "react";
// Importing Ant Design
import { Timeline, Card, Progress, Modal, Button } from "antd";
// Importing styles sass
import "./../styles/components/todoList.scss";

const TodoStep = () => {
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
              </div>
            </Card>
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

export default TodoStep;
