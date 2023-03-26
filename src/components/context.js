import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}

function DataProvider({ children }) {
  const [totalRegistered, setTotalRegistered] = useState(0);
  const [leftSpot, setLeftSpot] = useState(0);
  const [openAmount, setOpenAmount] = useState(0);
  const [data, setData] = useState([
    {
      firstName: "Leon",
      lastName: "Kennedy",
      telNumber: "5862549023",
      order: 3,
    },
    {
      firstName: "Ada",
      lastName: "Wong",
      telNumber: "9036453316",
      order: 2,
    },
    {
      firstName: "Ashley",
      lastName: "Graham",
      telNumber: "7346993116",
      order: 4,
    },
    {
      firstName: "Ethan",
      lastName: "Winters",
      telNumber: "2312380942",
      order: 1,
    },
  ]);

  function storeTotal(_totalRegis) {
    setTotalRegistered(_totalRegis);
  }

  const setSpot = (_spot) => {
    setLeftSpot(_spot);
  };

  const setAmount = (_amount) => {
    setOpenAmount(_amount);
  };

  const dataPassVal = {
    totalRegistered,
    leftSpot,
    openAmount,
    data,
    dataAction: {
      storeTotal,
      setSpot,
      setAmount,
      setData,
    },
  };

  return (
    <DataContext.Provider value={dataPassVal}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
