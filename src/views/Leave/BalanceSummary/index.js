import React from "react";
import LeavesListing from "../Listing";
import { Col, DatePicker, Row, Select } from "antd";
import InputField from "../../../components/fields/TextField";

const BalanceSummary = () => {
  return (
    <div className="mx-16">
      <LeavesListing />

      <div className="my-10">
        {/* Leave Type */}
        <Row gutter={[16, 16]} align="middle">
          <Col span={6}>Leave Type</Col>
          <Col span={18}>
            <Select
              className="mb-4 w-[270px]"
              showSearch
              placeholder="Select Leave Type"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "Sick Leave" },
                { value: "2", label: "Casual Leave" },
                { value: "3", label: "Annual Leave" },
                { value: "4", label: "Short Leave" },
                { value: "5", label: "Half Leave" },
                { value: "6", label: "Full Leave" },
              ]}
            />
          </Col>
        </Row>

        {/* From Date */}
        <Row gutter={[16, 16]} align="middle" className="mb-4">
          <Col span={6}>From Date</Col>
          <Col span={18}>
            <DatePicker style={{ width: 270 }} />
          </Col>
        </Row>

        {/* To Date */}
        <Row gutter={[16, 16]} align="middle">
          <Col span={6}>To Date</Col>
          <Col span={18}>
            <DatePicker style={{ width: 270 }} />
          </Col>
        </Row>

        {/* Reason */}
        <Row gutter={[16, 16]} align="middle">
          <Col span={6}>Reason</Col>
          <Col span={18}>
            <InputField
              variant="auth"
              extra="mb-3 w-[270px]"
              label=""
              placeholder="Reason"
              id="reason"
              type="text"
            />
          </Col>
        </Row>

        <Row gutter={[16, 16]} align="middle">
          <Col span={6}></Col>
          <Col span={18}>
            {/* Submit Button */}
            <button className="linear mt-8 h-12 w-[270px] rounded-xl bg-brand-500 py-[0px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
              Submit
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BalanceSummary;
