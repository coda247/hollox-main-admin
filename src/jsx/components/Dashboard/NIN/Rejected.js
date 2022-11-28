import React, { Fragment } from "react";
import { Dropdown, Tab, Nav, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NumericFormat } from 'react-number-format';

import Avatar from 'react-avatar';

import { useEffect,Suspense,useState } from "react";
import axiosInstance from "../../../../services/AxiosInstance";
import { da } from "date-fns/locale";

const Rejected = () => {
   const [show, setShow] = useState(false);
   const [msgT, setMsgT] = useState("Loading");
   const [msg, setMsg] = useState("Loading, please wait...");
   const [userData, setUserData] = useState([]);
   const [userCount, setUserCount] = useState(0);
   const [page, setPage] = useState(1);
   const [dataCount, setDataCount] = useState(10);
   useEffect(() => {
    CallData(1,10);
    }, []); 
    const CallData =  async (page, limit)  => {
       
        setMsgT("Loading");
        setMsg("Fetching data please wait...");
        setShow(true);
        axiosInstance.get("/api/admin/nin/get/"+limit+"/"+page+"/REJECTED").then((rs) => {
          //console.log(rs);
          setShow(false);
         setUserCount(rs.data.data.count)
          setUserData(rs.data.data.rows);
          setDataCount(rs.data.data.rows.length);
        });
    }
    

  const changeState = async e => {
   try {
    setMsgT(e.target.getAttribute("state"));
        setMsg("please wait...");
    setShow(true);
    e.preventDefault();
    let state = e.target.getAttribute("state");
    let email = e.target.getAttribute("userEmail");
   let rs = await axiosInstance.post("/api/admin/nin/change/state", {
        "email": email,
       "state": state
    
    });
    setShow(false);
    CallData(1,10);

    // param is the argument you passed to the function
    // e is the event object that returned
   } catch (error) {
   
    if(typeof error.response !== "undefined"){
        
        setMsg(error.response.data.errorMessage);
        setMsgT("Failed");
       
    }else{
        setMsg("Network error. Please try again later!");
        setMsgT("Failed");
    }
   }
    };
    const next = async (e)  => {
        setShow(true);
      e.preventDefault();
      setUserData([]);
      let nextPage  = page + 1;
      CallData(nextPage,10);
    
    }
    
    const handleClose = async (e)  => {
        setShow(false);
    }
    const pre = async (e)  => {
        setShow(true);
      e.preventDefault();
      setUserData([]);
      let nextPage  = page - 1;
     
      CallData(nextPage,10);
    }
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
                <Modal show={show}  animation={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{msgT}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
      
      </Modal>
         <div className="col-12">
            <div className="row">
            <div className='col-xl-4 col-xxl-4 col-lg-6 col-sm-6'>
          <div className='widget-stat card'>
            <div className='card-body p-4'>
              <div className='media ai-icon'>
                <span className='mr-3 bgl-primary text-primary'>
                  <img  src="/images/symbols/users-relation-svgrepo-com.svg"  width='30'
                    height='30' />
                </span>
                <div className='media-body'>
                  <p className='mb-1'>Total <small>(users)</small></p>
                  <h4 className='mb-0'>{userCount}

</h4>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
       
        
            </div>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Pending NIN Users</h4>
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
                    <th className="sorting_asc" style={{ width: "177px" }}>
                     NIN Name
                    </th>
                    <th className="sorting" style={{ width: "278px" }}>
                      Email
                    </th>
                    <th className="sorting" style={{ width: "128px" }}>
                      Phone
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                     Active
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                     Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                
              
             
                 {
                  userData.map((i,e) => {

                    

                   return (
                     <tr className="even" role="row">
                     <td className="sorting_1"> <Avatar name={i.User.firstName} size="40" round={true} /> {i.User.firstName} {i.User.lastName}</td>
                    
                     <td className="sorting_1"> <Avatar name={JSON.parse(i.meta).firstname} size="40" round={true} /> {JSON.parse(i.meta).firstname} {JSON.parse(i.meta).middlename} {JSON.parse(i.meta).lastname}</td>
                     <td>
  
                     {i.email}
                     </td>
                     <td>
                      ({i.User.countrycode}) 
                     {i.User.phone}
                        </td>
                     <td>
                     <span className={ i.User.isVerified ? "badge badge-success" : "badge badge-danger"}>{ i.User.isVerified ? "Active" : "Inactive"}</span>
                    </td>
                     <td>
                    
                     
                     <Dropdown className='dropdown'>
                        <Dropdown.Toggle
                          variant='primary light'
                          className='i-false sharp'
                        >
                          <svg
                            width='18px'
                            height='18px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g
                              stroke='none'
                              strokeWidth='1'
                              fill='none'
                              fillRule='evenodd'
                            >
                              <rect x='0' y='0' width={24} height={24} />
                              <circle fill='#000000' cx='5' cy='12' r='2' />
                              <circle fill='#000000' cx='12' cy='12' r='2' />
                              <circle fill='#000000' cx='19' cy='12' r='2' />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu'>
                          <Dropdown.Item
                            state="REJECTED"
                            userEmail= {i.email}
                            className='dropdown-item'
                            to='/'
                            onClick={changeState}
                          >
                            Reject
                          </Dropdown.Item>
                          <Dropdown.Item
                           state="VERIFIED"
                           userEmail= {i.email}
                            className='dropdown-item'
                            to='/'
                            onClick={changeState}
                          >
                            Approve
                          </Dropdown.Item>
                        
                         
                        </Dropdown.Menu>
                      </Dropdown>
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
					
          {page > 1 ? (
            <Link className="paginate_button previous disabled" onClick={pre} >
						Previous
					</Link>
           ) : (<span></span>)}
					<span>
						{/* {paggination.map((number, i) => (
							<Link key={i} to="/table-datatable-basic" className={`paginate_button  ${ activePag.current === i ? "current" : ""} `}onClick={() => onClick(i)}>
								{number}
							</Link>
						))} */}
					</span>
               {/* onClick={() => activePag.current + 1 < paggination.length && onClick(activePag.current + 1)} */}
					
               {dataCount >= 10 ? (
            <Link className="paginate_button previous disabled" onClick={next} >
						Next
					</Link>
           ) : (<span></span>)}
          
         
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
export default Rejected;
