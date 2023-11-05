const Patientdetails = () => {
  const data = {
    patientName: "김영찬",
    gender: "남",
    age: 25,
    reservationDate: "2023-09-30T11:00:00",
    symptoms: "의료기기 교체",
    height: 170,
    weight: 70,
    Accumulatednumber: 3,
    distance: "13km",
    callnumber: "010-1234-5667",
    birthday: "2000-01-01",
  };
  return (
    <div className="Patientdetails">
      <header className="patientdetailsheader">
        <span>{data.patientName}</span>
        <span>
          {data.gender}
          {data.age}({data.birthday})
        </span>
        <span>
          키:{data.height} 체중:{data.weight}
        </span>
      </header>
      <body className="patientdetailsbody">
        <div className="patientbodyfirstdiv">
          <section className="pastrecord">
            <h4>과거진료기록</h4>
            <div>블록</div>
          </section>
          <section className="patientreason-distance">
            <div>
              <h4>방문진료 사유</h4>
              <p>{data.symptoms}</p>
            </div>
            <div>
              <h4>이동거리편도</h4>
              <p>{data.distance}</p>
            </div>
          </section>
          <section className="patientmoney">
            <h4>캘린더</h4>
            <div>
              <p>캘린더 고민중</p>
            </div>
          </section>
          <section className="patientmoney">
            <h4>예상수가</h4>
            <div>
              <p>비슷한 유형의 환자로 예측한 수가는123,456원 예상됩니다.</p>
            </div>
          </section>
          <div className="confirm-button">
            <button>예약 확정</button>
            <button>에약 취소/ 전화</button>
          </div>
        </div>
        <div className="patientbodyseconddiv">
          <section className="patientside">
            <h4>팔수 작성</h4>
            <div>
              <button>본인 부담 </button>
              <button>전액 지원</button>
            </div>
          </section>
          <section className="patientside">
            <h4>거동불편 유형</h4>
            <div>
              <button>마비</button>
              <button>수술 직후</button>
              <button>말기질환</button>
            </div>
            <div>
              <button>의료기기 부착</button>
              <button>욕창 및 궤양</button>
            </div>
            <div>
              <button>정신과적 질환</button>
              <button>신경계 퇴행성 질환</button>
            </div>
          </section>
          <section className="pastrecord">
            <h4>자동 메모</h4>
            <div>블록</div>
          </section>
        </div>
      </body>
    </div>
  );
};
export default Patientdetails;
