import React from "react";
// Importing Ant Design
import { Steps, Divider } from "antd";

const TodoList = () => {
  const { Step } = Steps;
  return (
    <>
      <div className="step__container">
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
        <Divider />
        <Steps progressDot current={1} direction="vertical">
          <Step
            title="Finished"
            description="This is a description. This is a description."
          />
          <Step
            title="Finished"
            description="This is a description. This is a description."
          />
          <Step
            title="In Progress"
            description="This is a description. This is a description."
          />
          <Step title="Waiting" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    </>
  );
};

export default TodoList;
