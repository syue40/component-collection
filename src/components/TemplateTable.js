import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import DownloadCSV from "./DownloadCSV";
import "../../styles/table.css";
import "../../styles/index.css";

/**
 * Takes in an API endpoint on the backend as a string as a prop
 * ALso takes an array of headers as a prop
 */
function Table(props) {
  const [tableData, setTableData] = useState([]);
  const [order, setOrder] = useState("0DSC");

  useEffect(() => {
    let vals = props.data;
    for (let i = 0; i < vals.length; i++) {
      if (Array.isArray(vals[i])) {
        for (let j = 0; j < vals[i].length; j++) {
          if (vals[i][j] == "NaN") {
            vals[i][j] = "-";
          }
        }
      }
    }
    setTableData(props.data);
  }, [props.data]);

  const parseCSV = (tableData) => {
    return tableData.map((row) => row);
  };

  //generate the table data to columns
  const generateTableData = () => {
    return tableData.map((building) => (
      <tr key={building[0]} className="row">
        {building.map((data, index) => {
          if (props.skipRows === false) {
            if (!isNaN(data)) {
              if (props.addLocale === true) {
                return (
                  <td
                    key={index}
                    className="columnItem font-mukta align-middle"
                  >
                    {parseFloat(data).toLocaleString("en-us")}
                  </td>
                );
              } else {
                return (
                  <td
                    key={index}
                    className="columnItem font-mukta align-middle"
                  >
                    {data}
                  </td>
                );
              }
            } else {
              return (
                <td key={index} className="columnItem font-mukta align-middle">
                  {data}
                </td>
              );
            }
          } else {
            if (index !== 0) {
              if (!isNaN(data)) {
                if (props.addLocale === true) {
                  return (
                    <td
                      key={index}
                      className="columnItem font-mukta align-middle"
                    >
                      {parseFloat(data).toLocaleString("en-US")}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={index}
                      className="columnItem font-mukta align-middle"
                    >
                      {data}
                    </td>
                  );
                }
              } else {
                return (
                  <td
                    key={index}
                    className="columnItem font-mukta align-middle"
                  >
                    {data}
                  </td>
                );
              }
            }
          }
        })}
      </tr>
    ));
  };

  //sort by columns function, takes column index and state to determine which column to sort
  const sorting = (col) => {
    if (props.skipRows === false) {
      if (order.substring(1) === "ASC") {
        const sorted = [...tableData].sort((a, b) =>
          a[col].localeCompare(b[col], "en", {
            numeric: true,
            sensitivity: "base",
          })
        );
        setTableData(sorted);
        setOrder(col + "DSC");
      }

      if (order.substring(1) === "DSC") {
        const sorted = [...tableData].sort((a, b) =>
          b[col].localeCompare(a[col], "en", {
            numeric: true,
            sensitivity: "base",
          })
        );
        setTableData(sorted);
        setOrder(col + "ASC");
      }
    } else {
      col = col + 1;
      if (order.substring(1) === "ASC") {
        const sorted = [...tableData].sort((a, b) =>
          a[col].localeCompare(b[col], "en", {
            numeric: true,
            sensitivity: "base",
          })
        );
        setTableData(sorted);
        setOrder(col - 1 + "DSC");
      }

      if (order.substring(1) === "DSC") {
        const sorted = [...tableData].sort((a, b) =>
          b[col].localeCompare(a[col], "en", {
            numeric: true,
            sensitivity: "base",
          })
        );
        setTableData(sorted);
        setOrder(col - 1 + "ASC");
      }
    }
  };
  return (
    <div className="overflow-y-scroll h-full">
      <table id="portfolio" className="rounded-lg text-sm w-full table">
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <thead>
          <tr>
            <th colSpan={"100%"} className="table-title">
              <div className="flex justify-between items-center font-mukta">
                <p className="">{props.title}</p>
                <DownloadCSV
                  headers={props.id_col ? ["identifier"].concat(props.headers) : props.headers}
                  data={parseCSV(tableData)}
                  filename={props.filename}
                />
              </div>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            {props.headers.map((value, index) => {
              if (order === index + "ASC") {
                return (
                  <th key={index} className="sticky top-0 ">
                    <div className="flex justify-between items-center font-mukta">
                      {value}
                      <span
                        className="material-symbols-outlined"
                        onClick={() => sorting(index)}
                      >
                        expand_more
                      </span>
                    </div>
                  </th>
                );
              }
              return (
                <th className="sticky top-0" key={index}>
                  <div className="flex justify-between items-center font-mukta ">
                    {value}
                    <span
                      className="material-symbols-outlined"
                      onClick={() => sorting(index)}
                    >
                      expand_less
                    </span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="mt-12">{generateTableData()}</tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
};

export default Table;
