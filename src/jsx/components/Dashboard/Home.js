import React, { Fragment } from "react";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NumericFormat } from 'react-number-format';

import { useEffect,Suspense,useState } from "react";
import axiosInstance from "../../../services/AxiosInstance";
import { da } from "date-fns/locale";

const Home = () => {
   const [data, setData] = useState([]);
   const [nairaRate, setNairaRate] = useState(0.00);
   const [dollarBalance, setDollarBalance] = useState(0.00);
   const [btcRate, setBTCRate] = useState(0.00);
   useEffect(() => {
      axiosInstance.get("/api/admin/portfolio/all").then((rs) => {
         let totalDollarValue = 0.00;
         let naira = parseFloat(rs.data.data[0].cr.split("-")[0].split(",")[0]);
         
         rs.data.data.forEach(element => {
            if(element.symbol == "BTC"){
               setBTCRate(parseFloat(element.current_price));
            }

            totalDollarValue += parseFloat(element.current_price) * parseFloat(element.totalValue);
         });
         setNairaRate(naira);
         setDollarBalance(totalDollarValue);
         setData(rs.data.data);
      });
    }, []); 
   return (
      <Fragment>
         <>
         {/* <div className="vh-100">
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                  }
                >
                    
                </Suspense>
			</div> */}
         <div className="col-12">
            <div className="row">
            <div className='col-xl-4 col-xxl-4 col-lg-6 col-sm-6'>
          <div className='widget-stat card'>
            <div className='card-body p-4'>
              <div className='media ai-icon'>
                <span className='mr-3 bgl-primary text-primary'>
                  <img  src="/images/symbols/nigeria-naira-icon.svg"  width='30'
                    height='30' />
                </span>
                <div className='media-body'>
                  <p className='mb-1'>Balance <small>(Naira)</small></p>
                  <h4 className='mb-0'><NumericFormat  thousandSeparator=","   displayType="text"
 value={parseFloat(nairaRate * dollarBalance).toFixed(2)} />

</h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-xxl-4 col-lg-6 col-sm-6'>
          <div className='widget-stat card'>
            <div className='card-body p-4'>
              <div className='media ai-icon'>
                <span className='mr-3 bgl-primary text-primary'>
                  $
                </span>
                <div className='media-body'>
                  <p className='mb-1'>Balance <small>(USD)</small></p>
                  <h4 className='mb-0'>
               
                     <NumericFormat  thousandSeparator=","   displayType="text"
 value={parseFloat(dollarBalance).toFixed(2)} />
                     </h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-xxl-4 col-lg-6 col-sm-6'>
          <div className='widget-stat card'>
            <div className='card-body p-4'>
              <div className='media ai-icon'>
                <span className='mr-3 bgl-primary text-primary'>
                <img  src="/images/symbols/bitcoin.png"  width='30'
                    height='30' />
                </span>
                <div className='media-body'>
                  <p className='mb-1'>Balance <small>(BTC)</small></p>
                  <h4 className='mb-0'>
                  <NumericFormat  thousandSeparator=","   displayType="text"
 value={parseFloat(dollarBalance / btcRate).toFixed(2)} />
                    
                  </h4>
                
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Portofolio</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="job_data" className="dataTables_wrapper ">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" style={{ width: "177px" }}>
                      Name
                    </th>
                    <th className="sorting" style={{ width: "278px" }}>
                      Amount
                    </th>
                    <th className="sorting" style={{ width: "128px" }}>
                      Price
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                      Amount $
                    </th>
                   
                  </tr>
                </thead>

                <tbody>
                
              
             
                 {
                  data.map((i,e) => {

                    

                   return (
                     <tr className="even" role="row">
                     <td className="sorting_1"> <img src={i.image} height="40" width="40" /> {i.name} ({i.symbol})</td>
                     <td>
                     <NumericFormat  thousandSeparator=","   displayType="text"
 value= {parseFloat(i.totalValue)} />
                        
                     </td>
                     <td>
                       
                        <NumericFormat  thousandSeparator=","   displayType="text"
 value=  {parseFloat(i.current_price)} />
                        </td>
                     <td>
                     <NumericFormat  thousandSeparator=","   displayType="text"
 value= {parseFloat(i.totalValue) * parseFloat(i.current_price)} />
                       
                     </td>
                    
                   </tr>
                   )
                  })
                 }
                </tbody>
                
              </table>
              <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                <div className="dataTables_info">
                  {/* Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries */}
                </div>
                {/* onClick={() => activePag.current > 0 && onClick(activePag.current - 1)} */}
                <div className="dataTables_paginate paging_simple_numbers" id="example5_paginate">
					<Link className="paginate_button previous disabled" to="/table-datatable-basic" >
						Previous
					</Link>
					<span>
						{/* {paggination.map((number, i) => (
							<Link key={i} to="/table-datatable-basic" className={`paginate_button  ${ activePag.current === i ? "current" : ""} `}onClick={() => onClick(i)}>
								{number}
							</Link>
						))} */}
					</span>
               {/* onClick={() => activePag.current + 1 < paggination.length && onClick(activePag.current + 1)} */}
					<Link className="paginate_button next" to="/table-datatable-basic" >
						Next
					</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
         </>
      </Fragment>
   );
};

export default Home;
