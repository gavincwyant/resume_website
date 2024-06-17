"use client"
import Header from "../header"
import Background from "../background_image"
import * as React from 'react'
import { Box } from "@mui/material"


import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Projects = () => {
    const [tabIndex, setTabIndex] = useState(1)

    const handleChange = (index:number) => {
        setTabIndex(1)
    }


    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            <Box>
            
            <Tabs value={tabIndex}>
                    <Tab label="YoutubeNoShorts"/>
                    <Tab label="FG Website" />
                    <Tab label="gavinwyant.com" />
            </Tabs>
            </Box>
        </div>

    )


}

export default Projects