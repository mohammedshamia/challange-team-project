import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { IColumn } from "../../@types/table.types";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface IProps {
  columns: IColumn[];
  data: any[];
}

export default class Table extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    return (
      <div className="ag-theme-alpine" style={{ height: "100%" }}>
        <AgGridReact rowData={this.props.data}>
          {this.props.columns.map((column: IColumn) => (
            <AgGridColumn
              field={column.name}
              sortable={column.sortable}
              filter={column.filter}
              checkboxSelection={column.checkboxSelection}
            ></AgGridColumn>
          ))}
        </AgGridReact>
      </div>
    );
  }
}
