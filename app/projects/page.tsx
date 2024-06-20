"use client"
import Header from "../header"
import Background from "../background_image"
import { useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Card from "../card";

const body = `I made this project for myself because of all the time I can waste watching short form content online.
                I wrote a python script that calls the Youtube API and requests the latest video url from each subscription of a given account.
                With that url, the script uses a Python library called Pytube to download the new youtube videos locally. All currently stored videos are held in a hashmap using subscription IDs as keys and vid IDs as values.
                These new videos are downloaded locally and then uploaded to Dropbox using the dropbox API. The new videos will always replace their predecessor on Dropbox because I wanted to utilize Dropbox's free plan with limited storage.
                After the locally stored mp4 is uploaded, it will be deleted locally, the hashmap is updated and the script is finished.
                This allowed me to see only the newest YouTube videos from my subscriptions without subjecting myself to shorts.
`

const header1 = "Python, Youtube and Dropbox APIs"
const header2 = "Next.js, Strapi"
const header3 = "Next.js, OAuth, Typescript, React, Tailwind, MailGun"

const Projects = () => {
    const [tabIndex, setTabIndex] = useState(1)

    const handleChange = (index:number) => {
        setTabIndex(1)
    }


    return (
        <div >
            <div className="sticky z-50"><Header/></div>
            <Background/>
            <div className="flex justify-center">
                <Tabs className="absolute mt-28 w-3/4 flex flex-col justify-center pt-6 rounded-lg">
                    <TabList className=" flex flex-row justify-center md:space-x-10">
                        <div className="flex flex-row border-b-4 text-sm border-white md:space-x-10">
                        <Tab className=" border-white text-white cursor-pointer p-2">YoutubeNoShorts</Tab>
                        <Tab className=" border-white text-white cursor-pointer p-2">FG Website</Tab>
                        <Tab className=" border-white text-white cursor-pointer p-2">gavinwyant.com</Tab>
                        </div>
                    </TabList>
                    <div className="flex flex-row justify-center items-center">
                    <TabPanel className="text-center">
                        <Card body={body} header={header1}/>
                    </TabPanel>
                    <TabPanel className="text-center">
                        <Card body={body} header={header2}/>
                    </TabPanel>
                    <TabPanel className="text-ce nter">
                        <Card body={body} header={header3}/>
                    </TabPanel>
                    </div>
                </Tabs>
            </div>
            

        </div>

    )


}

export default Projects