import { Checkbox, Col, Row } from "antd";
import React from "react";

const TaskDetail = () => {
  return (
    <div>
      <Row justify="center" align="middle" style={{ height: "100px" }}>
        <Col>
          <div className="text-4xl">Johar Town</div>
        </Col>
      </Row>

      <Row justify="space-between" align="middle" className="h-[100px] px-4">
        <Col>
          <div className="text-2xl">Status</div>
        </Col>
        <Col>
          <div className="text-2xl">Due date</div>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <div className="text-lg">
            Johar Town is a historic town located in the capital city of Sindh,
            Pakistan. It was founded by the Mughal Emperor Shah Jahan in 1632
            and is known for its rich history, architectural achievements, and
            cultural heritage. Johar Town is a historic town located in the
            capital city of Sindh, Pakistan. It was founded by the Mughal
            Emperor Shah Jahan in 1632 and is known for its rich history,
            architectural achievements, and cultural heritage. Johar Town is a
            historic town located in the capital city of Sindh, Pakistan. It was
            founded by the Mughal Emperor Shah Jahan in 1632 and is known for
            its rich history, architectural achievements, and cultural heritage.
          </div>
        </Col>
      </Row>

      <Row className="mt-6 px-4" gutter={[16, 16]}>
        <Col span={4} className="text-xl">
          Glass:
        </Col>
        <Col span={20}>
          <Checkbox />
        </Col>

        <Col span={4} className="text-xl">
          Tube Light:
        </Col>
        <Col span={20}>
          <Checkbox />
        </Col>

        <Col span={4} className="text-xl">
          Mobile:
        </Col>
        <Col span={20}>
          <Checkbox />
        </Col>
      </Row>

      <Row>
        <Col span={24} className="text-end">
          <button className="linear h-12 w-[270px] rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            Generate Task
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default TaskDetail;
