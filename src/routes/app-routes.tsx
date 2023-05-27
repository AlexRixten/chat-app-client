import React from "react";
import { Route, Routes } from "react-router-dom";
import RoomPage from "../pages/room";
import ChatPage from "../pages/chat";
import { ERoutes } from "../enums/routes.enum";

function AppRoutes() {
  return (
    <Routes>
      <Route path={ERoutes.Room} element={<RoomPage />} />
      <Route path={ERoutes.Chat} element={<ChatPage />} />
    </Routes>
  );
}

export default AppRoutes;
