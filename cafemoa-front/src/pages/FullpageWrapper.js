import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactFullpage from "@fullpage/react-fullpage";
import LatteNavbar from "../headers/LatteNavbar";
// import LatteNavbarPC from "../headers/LatteNavbarPC";

const FullpageWrapper = () => {
  // render() {
      console.log('fullpage에도 렌더링이 되는거야?')
      return (
          <>
              <div className="top-fixed">
                {/* 로그인 하지 않은 상태에서의 헤더 나타내기 */}
                <LatteNavbar></LatteNavbar>
              </div>
              <ReactFullpage
                  navigation
                  scrollOverflow={true}
                  sectionsColor={["#F8C027", "brown", "green"]}
                  licenseKey='OPEN-SOURCE-GPLV3-LICENSE'
                  render={({ fullpageApi }) => {
                      return (
                          <div id="fullpage-wrapper">
                              <div className="section section1" style={{ backgroundImage:"url(/img/cafemoamain1.jpg)" }}>
                              </div>
                              <div className="section" style={{ backgroundImage:"url(/img/cafemoamain2.jpg)" }}>
                                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                                      Move top
                                </button>
                              </div>
                          </div>
                      );
                  }}
              />
          </>
      );
}

export default FullpageWrapper;