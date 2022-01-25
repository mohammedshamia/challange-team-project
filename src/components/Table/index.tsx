import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { IColumn } from "../../@types/table.types";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

interface IProps<T> {
  columns: IColumn[];
  data: T[];
  frameworkComponents?: {
    [key: string]: any;
  };
  paginationPageSize?: number;
  onPaginationChanged?: Function;
}

const onFirstDataRendered = (params: any) => {
  params.api.sizeColumnsToFit();
};

export default class Table<T> extends React.PureComponent<IProps<T>> {
  render(): React.ReactNode {
    return (
      <div
        className="ag-theme-alpine"
        style={{
          marginTop: "1em",
          height: "500px",
        }}
      >
        <AgGridReact
          rowData={this.props.data}
          pagination={true}
          paginationPageSize={this.props.paginationPageSize || 10}
          onPaginationChanged={(e) => console.log(e)}
          frameworkComponents={this.props.frameworkComponents}
          onFirstDataRendered={onFirstDataRendered}
        >
          {this.props.columns.map((column: IColumn) => (
            <AgGridColumn
              field={column.name}
              sortable={column.sortable}
              filter={column.filter}
              checkboxSelection={column.checkboxSelection}
              cellRenderer={column.cellRenderer}
            ></AgGridColumn>
          ))}
        </AgGridReact>
      </div>
    );
  }
}
