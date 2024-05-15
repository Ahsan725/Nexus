import React from "react";
import { Grid } from '@mui/material';
import MultiActionAreaCard from '../components/MultiActionAreaCard'; 
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";

function GalleryViewPage() {
  const hardcodedCardData = [
    {
      description: "Small Office with Private Desks",
      capacity: "23",
      price: "$2000",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action1: {
        label: "View",
        onClick: () => {

        }
      },
      action2: {
        label: "Book",
        onClick: () => {

        }
      }
    },
    {
      description: "Private Corporate Office with a balcony",
      capacity: "23",
      price: "$2000",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action1: {
        label: "View",
        onClick: () => {
         
        }
      },
      action2: {
        label: "Book",
        onClick: () => {

        }
      }
    },
    {
      description: "Private Working Room with Attached Bathroom",
      capacity: "23",
      price: "$2000",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action1: {
        label: "View",
        onClick: () => {
    
        }
      },
      action2: {
        label: "Book",
        onClick: () => {

        }
      }
    },
    {
      description: "Private Office overseeing the New York Skyline",
      capacity: "23",
      price: "$2000",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action1: {
        label: "View",
        onClick: () => {
          
        }
      },
      action2: {
        label: "Book",
        onClick: () => {
         
        }
      }
    },
    {
      description: "Medium Office for Startups",
      capacity: "23",
      price: "$2000",
      image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      action1: {
        label: "View",
        onClick: () => {
     
        }
      },
      action2: {
        label: "Book",
        onClick: () => {
       
        }
      }
    },
  ];

    return (
        <>
            <NavBar />
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <div className="text-center mt-8">
                        <h1 className="text-6xl font-bold text-slate-600">Available Workspaces</h1>
                        <InputBase className="w-1/2 bg-slate-100 p-4 rounded-2xl"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search By Location (City, State)"
                            inputProps={{ 'aria-label': 'search through the best workspaces' }}
                        />
                        <IconButton type="button" color="p" sx={{ p: '40px' }} aria-label="search">
                            <SearchIcon className=" text-blue-700 text-4xl" />
                        </IconButton>
                        {/* <SearchBar /> */}
                    </div>
                </Grid>
            
                {hardcodedCardData.map((cardInfo, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <MultiActionAreaCard {...cardInfo} />
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </>
    );  
}

export default GalleryViewPage;
