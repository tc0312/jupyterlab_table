import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

export default class JSONTable extends React.Component {
    
  state = {
    columnWidths: {}
  }

  on

  render() {
    const { schema, data, ...options } = this.props;
    /*
    console.error("UFO", this.props, data);
    for(var i = 0; i < data.length; i++) {
      data[i]["id"] = i;
    }
    */
    return (
      <BootstrapTable data={ data } striped hover bordered>
        <TableHeaderColumn dataField='id' isKey autoValue disableSort={ false } hidden>ID</TableHeaderColumn>
        {
          schema.fields.map(function(field) {
            return <TableHeaderColumn dataField={ field.name } disableSort={ false } dataSort>{ field.name }</TableHeaderColumn>;
          })
        }
      </BootstrapTable>
    );
  }

}
