import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const expenceCon = createContext(null);

const initial = [
  { id: 1, title: "trip", amount: 2000, type: "expence" },
  { id: 2, title: "salary", amount: 4000, type: "income" },
  { id: 3, title: "food", amount: 1000, type: "expence" },
];

const ExpenceContext = ({ children }) => {
  const [history, setHistory] = useState(initial);
  const [balance, setBalance] = useState({ income: 0, expence: 0, total: 0 });

  useEffect(() => {
    const income = history
      .filter((tranc) => tranc.type === "income")
      .map((tranc) => tranc.amount)
      .reduce((acc, cur) => acc + cur, 0);

    const expence = history
      .filter((tranc) => tranc.type === "expence")
      .map((tranc) => tranc.amount)
      .reduce((acc, cur) => acc + cur, 0);

    const total = income - expence;
    setBalance({ income, expence, total });
  }, [history]);

  const addToHistory = useCallback(
    (tranc) => {
      setHistory([...history, tranc]);
    },
    [history]
  );

  return (
    <expenceCon.Provider value={{ addToHistory, history, balance }}>
      {children}
    </expenceCon.Provider>
  );
};

export default ExpenceContext;

export const useAuth = () => useContext(expenceCon);
