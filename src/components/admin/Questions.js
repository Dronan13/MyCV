import React, { Component } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter, dateFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cfg from '../config/cfg'

class Questions extends Component {
    constructor() {
   
        super();

        const selectOptions = {
            'pending': 'pending',
            'answered': 'answered'
          };

        this.state = {
            questions:[],
            columns: [{
                dataField: '_id',
                text: 'Question ID',
                sort: true
              },
              {
                dataField: 'createdDate',
                text: 'Date added',
                filter: dateFilter()
              },
              {
                dataField: 'firstname',
                text: 'Firstname'
              },
              {
                dataField: 'lastname',
                text: 'Lastname'
              }, 
              {
                dataField: 'email',
                text: 'E-mail',
                filter: textFilter(),
                sort: true
              }, 
              {
                dataField: 'status',
                text: 'Status',
                filter: selectFilter({
                    options: selectOptions
                  }),
                sort: true
              },
              {
                dataField: 'question',
                text: 'Question',
                filter: textFilter()
              }]          
        };
      }

      

      componentDidMount() {
        axios.get(cfg.baseURL+'api/question')
          .then(response => {
            this.setState({
              questions: response.data
            });
          });
      }
    
     render() {

        return (
                <div className='box-text'>
                    <div style={{ marginTop: 50 }}>
                        <BootstrapTable 
                        striped
                        hover
                        keyField='_id' 
                        data={ this.state.questions } 
                        columns={ this.state.columns } 
                        filter={ filterFactory() }
                        pagination={ paginationFactory() }/>
                    </div>
                </div>

        );
    }
}


export default Questions