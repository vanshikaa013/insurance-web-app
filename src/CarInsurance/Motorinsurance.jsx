import React from 'react';
import { useState, useEffect } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import './Motorinsurance.css';

export const Motorinsurance = () => {
  const [open, setOpen] = useState(false);

  // Page load hone par modal open karne ke liye
  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          BackdropProps={{
            onClick: () => {}, // Disables closing the modal when clicking outside
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <div className='mtml-auto'>
              <h4>Motor Insurance</h4>
              <Link to='/'>
                <i className="fa-solid fa-xmark mycolor"></i>
              </Link>
            </div>
            <Link to='/car'>
              <Typography className='text-center car-modal-box' id="modal-title" variant="h6" component="h2">
                <img src="https://i.ibb.co/xgJ5ky4/Group-23753.png" alt="" />
                {/* <img src="https://i.ibb.co/hcVgdwP/Group-23749.png" alt="" /> */}
                {/* <img src="https://i.ibb.co/F4CgZdx/Group-74.png" alt="" /> */}
                <Button to='/car' className='butn-car-modal' style={{ color: '#003d2b' }}>Car Insurance</Button>
              </Typography>
            </Link>
            <Link to='/bikein'>
              <Typography className='text-center mt-3 car-modal-box' id="modal-title" variant="h6" component="h2">
                <img src="https://i.ibb.co/9gGK6Rf/Group-23754.png" alt="" />
                {/* <img src="https://i.ibb.co/gVjgPjq/Group-23750.png" alt="" /> */}
                {/* <img src="https://i.ibb.co/NF6Z6Bq/Group-77.png" alt="" /> */}
                <Button to='/bikein' className='butn-car-modal' style={{ color: '#003d2b' }}>Bike Insurance</Button>
              </Typography>
            </Link>
          </Box>
        </Modal>
      </div>
    </>
  );
};
