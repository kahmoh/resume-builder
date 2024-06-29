import { useState } from 'react'
import React from "react";
import ResumePage from "./views/resume-page.jsx";
import './App.css'
import InformationForm from "./views/information-form.jsx";

function App() {
    return (
        <div className={'content'}>
            <InformationForm></InformationForm>
            <ResumePage></ResumePage>
        </div>
    )
}

export default App
