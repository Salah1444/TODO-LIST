import Header from "./Components/Header";
import List from "./Components/list";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [order, SetOrder] = useState("");
  const [orders, SetOrders] = useState(() => {
  const saved = localStorage.getItem("orders");
  return saved ? JSON.parse(saved) : [];
});
  return (
    <div className="App">
      <Header />
      <List
        order={order}
        SetOrder={SetOrder}
        orders={orders}
        SetOrders={SetOrders}
      />
      {useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
      }, [orders])}
    </div>
  );
}

export default App;
