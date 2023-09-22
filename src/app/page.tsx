import Banner from "../components/Banner";
import Menu from "../components/Menu";

export default function Page() {
  return (
    <div>
      <Menu />
      <Banner />
      <div title="lectureList">
        <h1>강의 목록</h1>
      </div>
    </div>
  );
}
