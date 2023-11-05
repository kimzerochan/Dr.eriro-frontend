import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from "react";
import Home from "./pages/Home";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

export const PatientStateContext = React.createContext();
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const getPaitent = () => {
    const res = [
      {
        patientName: "김영찬",
        gender: "남",
        age: 25,
        reservationDate: "2023-09-30T11:00:00",
        symptoms: "두통",
      },
      {
        patientName: "이지은",
        gender: "여",
        age: 30,
        reservationDate: "2023-10-15T14:30:00",
        symptoms: "복통",
      },
    ];

    const initData = res.map((it) => {
      return {
        name: it.patientName,
        gender: it.gender,
        age: it.age,
        date: it.reservationDate,
        symptoms: it.symptoms,
      };
    });

    dispatch({ type: "INIT", data: initData });
  };
  useEffect(() => {
    getPaitent();
  }, []);

  return (
    <PatientStateContext.Provider value={data}>
      <div className="App">
        <Home />
        <></>
      </div>
    </PatientStateContext.Provider>
  );
}

export default App;
