import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { NextPage } from "next";
import React from "react";

const Detail: NextPage = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <div title="lectureDetail">
        <h1>강의 목록 디테일</h1>
      </div>
    </div>
  );
};

export default Detail;
