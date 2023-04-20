import React from "react";

import DefaultList from "payload/dist/admin/components/views/collections/List/Default.js";
import { useAuth } from "payload/components/utilities";

const CustomList = (props) => {
  const user = useAuth();
  const clientId = user.user.id;
  const reg = user.user.region;
  const Click = async (e) => {
    e.preventDefault();
    window.open(
      `http://app.overton.services/dashboardServices/xls-process?clientId=${clientId}`
    );
  };
  return (
    <>
      <div class="gutter--left gutter--right collection-list__wrap">
        <form id="myForm">
          {reg == "MX" ? (
            <h5 class="collection-list__sub-header">
              Descarga los leads en formato xlsx
            </h5>
          ) : (
            <h5 class="collection-list__sub-header">
              Download leads in xlsx file
            </h5>
          )}
          {reg == "MX" ? (
            <div class="view-description">
              Aqui puedes descargar las conversiones de tu pagina (hasta 5mil
              registros)
            </div>
          ) : (
            <div class="view-description">
              Here you can download the leads from your page(up to 5k registers)
            </div>
          )}
          <button
            onClick={Click}
            class="btn btn--style-secondary btn--icon btn--icon-style-none btn--size-medium"
          >
            {reg == "MX" ? "Descargar" : "Download"}
          </button>
        </form>
      </div>
      <DefaultList {...props} />
    </>
  );
};

export default CustomList;
