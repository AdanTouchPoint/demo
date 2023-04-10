import React,{useState} from "react";

import DefaultList from "payload/dist/admin/components/views/collections/List/Default.js";
import { useAuth } from "payload/components/utilities";

const CustomList = (props) => {
  const user = useAuth();
  const clientId = user.user.id;
  const fetchData = async () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const data = await fetch(
      `http://localhost:8080/xls-process?clientId=${clientId}`,
      requestOptions
    );
    const res = await data.json();
    console.log(res);
    return res;
  };
  const Click = async (e) => {
   e.preventDefault()
   window.open( `https://payload-demo-tpm.herokuapp.com/xls-process?clientId=${clientId}`);
  };
  return (
    <>
      <div class="gutter--left gutter--right collection-list__wrap">
        <form id="myForm">
        <h5>descarga los leads en formato xls </h5>
      { /* <button
          onClick={Click}
          class="btn btn--style-secondary btn--icon btn--icon-style-none btn--size-medium"
        >
          Request Data
  </button> */}
        </form>
      </div>
      <DefaultList {...props} />
    </>
  );
};

export default CustomList;
