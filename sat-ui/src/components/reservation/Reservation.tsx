import React, { Component } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import AsyncSelect from 'react-select/async';
import * as FaIcons from 'react-icons/fa';
export class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          building: null,
          floor: null,
          bookingDate: null
        };
      }
      componentDidMount(){
        
      }
  render() {
    return (
        <div className='container-div'>
        <div className="d-flex">
        <div className="me-auto p-2">
            <h6>
                <strong>New Reservation</strong>                 
            </h6>
        </div>
        </div>
        <form>
        <div className="row">
            <div className="col-12">      

                <div className="row">
                    <div className="form-group col-md-3">
                        <label htmlFor="officeId">Building</label>
                        <AsyncSelect
          cacheOptions
          onInputChange={() => {}}
        />
                  
                    </div> 
                    
                    <div className="form-group col-md-3">
                        <label htmlFor="floor">Floor </label>
                        <AsyncSelect
          cacheOptions
          onInputChange={() => {}}
        />
                    </div>                     
                </div>

        
                <div className="row">                   
                    <div className="form-group col-md-3">
                        <label htmlFor="officeId">Date</label>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DesktopDatePicker
          inputFormat="MM/DD/YYYY"
          onChange={(newValue) => {
            console.log('newValue', newValue);
          }}
          value= ''
          renderInput={(params) => <TextField {...params} />}
        />
</LocalizationProvider>
                    </div>                                         
                </div>

                <button type="submit" className="btn btn-info primary mt-5"><FaIcons.FaSearch/> Search</button>                    

            </div>       
        </div>    
            
        </form>        
    </div>
    )
  }
}

export default Reservation