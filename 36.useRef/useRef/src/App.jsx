import { useEffect, useState } from "react";
import { getData } from "./services/products";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState([]);
  const [oldData, setoldData] = useState([])
  const [query, setQuery] = useState("");
  useEffect(() => {
    getData().then((res) => {
      setData(res);
      setoldData(res)
    });
  }, []);

  useEffect(() => {
    setData(
      oldData.filter((product) => {
        if (product.title.toLowerCase().includes(query.toLowerCase())) {
          return product;
        }
      })
    );
  }, [query]);

  return (
    <div>
      <Header setQuery={setQuery} />
      <div className="flex flex-wrap justify-center">
        {data.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
