import React, { useState } from 'react'
import Header from '../components/Header'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,MenuItem, Select, FormControl, InputLabel
  } from '@mui/material';
import AddJobModal from '../components/AddJobModal';
import EditModal from '../components/EditModal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
  

function Dashboard() {
    const [selectedRowIndex, setSelectedRowIndex] = useState(null);
    const [selectedRole, setSelectedRole] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [dialogopen, setDialogopen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleDialogOpen = () => {
    setDialogopen(true);
  };

  const handleDialogClose = () => {
    setDialogopen(false);
  };
    const jobs = [
        {
          name: "Lead Compliance Officer",
          reqId: "1224",
          country: "Qatar",
          location: "Doha",
          date: "20-10-2024"
        },
        {
          name: "HSE Officer",
          reqId: "1340",
          country: "Qatar",
          location: "Doha",
          date: "20-10-2024"
        },
        {
          name: "Project Coordinator",
          reqId: "1228",
          country: "Qatar",
          location: "Doha",
          date: "20-10-2024"
        },
        {
            name: "Lead Compliance Officer",
            reqId: "1224",
            country: "Qatar",
            location: "Doha",
            date: "20-10-2024"
          }
    ]    

    const handleRowClick = (index) => {
        setSelectedRowIndex(index);
      };
      const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
      };
    
      // Filter jobs based on selected role
      // Reorder jobs based on the selected role
const sortedJob = jobs
.filter((job) => selectedRole === "" || job.name === selectedRole)
.concat(jobs.filter((job) => selectedRole !== "" && job.name !== selectedRole));

    
      // Sort jobs to move selected role to the top
     
    
  return (
    <>
     <Header/> 
     <div className="p-8 mt-5 container">
      <div className="flex justify-between items-center mb-6">
        <div className='d-flex justify-content-between'>
            <div><h1 className="text-3xl font-normal text-black">Careers</h1></div>
        
        <div className='d-flex '>
        <FormControl variant="outlined" className='me-3' style={{ minWidth: 150 }}>
        <InputLabel id="job-role-select-label">Select Job Role</InputLabel>
        <Select
          labelId="job-role-select-label"
          value={selectedRole}
          onChange={handleRoleChange}
          label="Select Job Role"
          sx={{ 
            border: '1px solid green',
            borderRadius: '6px',
            color: 'black',
            textTransform: 'none',
            backgroundColor: 'white',
            
            '&:hover': {
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
            }
          }}
        
        >
          {/* Assuming job roles are known and predefined */}
          <MenuItem value="">All</MenuItem>
          {Array.from(new Set(jobs.map((job) => job.name))).map((uniqueRole, index) => (
      <MenuItem key={index} value={uniqueRole}>
        {uniqueRole}
      </MenuItem>
    ))}
        </Select>
      </FormControl>
          <Button 
          
            variant="contained" 
            sx={{ 
              backgroundColor: '#10b981',
              borderRadius: '6px',
              textTransform: 'none',
             
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#059669',
                boxShadow: 'none',
                
              }
            }}
            onClick={() => setShowModal(true)}
          >
            Add Job Role
          </Button></div>
        </div>
      </div>
      <table class="table table-bordered mt-5" style={{ borderCollapse: 'collapse' }} >
  <thead >
    <tr>
      <th scope="col"style={{backgroundColor:"#0EA5E9",color:"white"}} >Name</th>
      <th scope="col" style={{backgroundColor:"#0EA5E9",color:"white"}}>Req ID</th>
      <th scope="col" style={{backgroundColor:"#0EA5E9",color:"white"}}>Country</th>
      <th scope="col" style={{backgroundColor:"#0EA5E9",color:"white"}}>Location</th>
      <th scope="col" style={{backgroundColor:"#0EA5E9",color:"white"}}>Date</th>
      <th scope="col" style={{backgroundColor:"#0EA5E9",color:"white"}}>Action</th>
    </tr>
  </thead>
  <tbody>
        {sortedJob.map((job, index) => (
          <tr key={index} onClick={() => handleRowClick(index)}
         >
            <td scope="row">{job.name}</td>
            <td>{job.reqId}</td>
            <td>{job.country}</td>
            <td>{job.location}</td>
            <td>{job.date}</td>
            <td>
            <Button 
                    sx={{ 
                      color: '#22c55e',
                      textTransform: 'none',
                      minWidth: 'auto',
                      padding: '0 8px',
                      fontSize: '15px',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                    onClick={()=>setShowEditModal(true)}
                  >
                    <u>Edit</u> 
                  </Button>
                  <Button 
                    sx={{ 
                      color: '#ef4444',
                      textTransform: 'none',
                      minWidth: 'auto',
                      padding: '0 8px',
                      fontSize: '15px',
                      '&:hover': {
                        backgroundColor: 'transparent'
                      }
                    }}
                    onClick={()=>setDialogopen(true)}
                  >
                   <u>Remove</u> 
                  </Button>
            </td>
          </tr>
        ))}
      </tbody>
</table>
    </div>
    <Dialog
        fullScreen={fullScreen}
        open={dialogopen}
        onClose={handleDialogClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Remove Job Role
        </DialogTitle>
        <DialogContent className='text-center'>
          <DialogContentText>
          Are you sure to remove this Job Role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <div className='d-flex justify-content-between '>
            <Button 
        className='me-3'
            variant="outlined" 
            sx={{ 
              border: '1px solid green',
              borderRadius: '6px',
              color: 'black',
              textTransform: 'none',
              backgroundColor: 'white',
              
              '&:hover': {
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
              }
            }}
            onClick={()=>setDialogopen(false)}
          >
            Cancel
          </Button>
          <Button 
          
            variant="contained" 
            sx={{ 
              backgroundColor: '#10b981',
              borderRadius: '6px',
              textTransform: 'none',
             
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#059669',
                boxShadow: 'none',
                
              }
            }}
           
          >
            Remove
          </Button></div>
        </DialogActions>
      </Dialog>
    <AddJobModal 
        show={showModal}
        onHide={() => setShowModal(false)}
      />
       <EditModal 
        showEdit={showEditModal}
        onEditHide={() => setShowEditModal(false)}
      />
    </>
    
  )
}

export default Dashboard
