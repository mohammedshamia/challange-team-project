import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { IColumn } from "../../@types/table.types";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { styled } from "@mui/material";
import { GridReadyEvent } from "ag-grid-community";

interface IProps<T> {
  columns: IColumn[];
  data: T[];
  frameworkComponents?: {
    [key: string]: any;
  };
  paginationPageSize?: number;
}

const TableAg = styled("div")((props) => ({
  "& .ag-center-cols-container": {
    width: "auto !important",
  },
  "& .ag-center-cols-clipper": {
    background: `${props.theme.palette.background.paper} !important`,
  },
  "& .ag-overlay": {
    color: `${props.theme.palette.text.primary} !important`,
  },
  "& .ag-header ": {
    backgroundColor: `${props.theme.palette.background.paper} !important`,
  },
  "& .ag-header-row": {
    color: `${props.theme.palette.text.primary} !important`,
  },
  "& .ag-row": {
    backgroundColor: `${props.theme.palette.background.default} !important`,
    color: `${props.theme.palette.text.primary} !important`,
  },
  "& .ag-row-odd": {
    backgroundColor: `${props.theme.palette.background.paper} !important`,
    color: `${props.theme.palette.text.primary} !important`,
  },
  "& .ag-paging-panel": {
    backgroundColor: `${props.theme.palette.background.paper} !important`,
    color: `${props.theme.palette.text.primary} !important`,
  },
  "& .ag-paging-button": {
    color: `${props.theme.palette.text.primary} !important`,
  },
}));

export default class Table<T> extends React.PureComponent<IProps<T>> {
  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }

  render(): React.ReactNode {
    return (
      <TableAg
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
          frameworkComponents={this.props.frameworkComponents}
          onGridReady={this.onGridReady.bind(this)}
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
      </TableAg>
    );
  }
}
