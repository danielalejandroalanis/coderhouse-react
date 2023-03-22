import React, { useState, useEffect } from "react";
// import styles from "./App.module.css";
import { MainLayout } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";
function App() {

  return (
    <MainLayout>
      <MainRoutes />
    </MainLayout>
  );
}

export default App;
