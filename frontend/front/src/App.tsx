import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./components/pages/Home"
import { Statistics } from "./components/pages/Statistics"
import { NotFound } from "./components/pages/NotFound"
import { MessageSuccess } from "./components/pages/MessageSuccess"
import { Navbar } from "./components/base/Navbar"
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <Router>
      <Navbar/>
      <Box 
        py={{
          base:"30px", 
        }}
      />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/statistics" element={<Statistics/>} />
        <Route path="/message_success" element={<MessageSuccess/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Box h="50px"/>
    </Router>
  );
}

export default App;
