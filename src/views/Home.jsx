/* eslint-disable react-hooks/rules-of-hooks */
import { Outlet } from "react-router-dom";
import Top from "../components/Top";
import Bottom from "../components/Bottom";
const View = () => {
  // const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Top />
      {/* 窗口部分 */}
      <Outlet />
      <Bottom />
    </>
  );
};

export default View;
