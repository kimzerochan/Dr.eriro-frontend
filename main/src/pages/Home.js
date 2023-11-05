import { useContext } from "react";
import Navbar from "../components/NavbarC";
import Patient from "../components/PatientC";
import { PatientStateContext } from "../App";
import Patientdetails from "../components/Patientdetail";

const Home = () => {
  const patientlist = useContext(PatientStateContext);

  return (
    <div className="container">
      <Navbar />
      <div className="chart">
        <header className="chartheader">
          <span>차트</span>
        </header>
        <body>
          <div className="patient-list">
            <h3>환자 리스트</h3>
            <button>예약 신청 {patientlist.length}</button>
            <button>예약 완료</button>
            <button>진료 완료</button>
            <div>
              {patientlist.map((it) => (
                <Patient {...it} />
              ))}
            </div>
          </div>
          <div className="patient-detail-info">
            <Patientdetails />
          </div>
        </body>
      </div>
    </div>
  );
};

export default Home;
