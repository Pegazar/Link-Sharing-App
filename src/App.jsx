import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PreviewPage from "./pages/PreviewPage";
import ProfilePage from "./pages/ProfilePage";
import LinksPage from "./pages/LinksPage";
import EditorLayout from "./layout/EditorLayout";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="bg-[#F3F4F6]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/links" />} />

          <Route path="/preview" element={<PreviewPage />} />

          <Route element={<EditorLayout />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/links" element={<LinksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}
export default App;
