import React, { useState, useEffect } from "react";
import BoardTable from "../components/BoardTable";
import Api from "../utils/Api";

function Notice() {
  const [lists, setLists] = useState([]);

  const fetchLists = () => {
    const apiParams = {
      company: 1,
      page: 1,
      limit: 10,
      keyword: "",
    };
    Api.get("/costs", { params: apiParams })
      .then(({ data }) => {
        setLists(data.list);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchLists();
  }, []);
  return (
    <div>
      <BoardTable lists={lists} title="타이틀<br/>입니다" />
    </div>
  );
}

export default Notice;
