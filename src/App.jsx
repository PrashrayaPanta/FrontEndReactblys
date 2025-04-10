import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register} from "./Pages";
import Homepage from "./components/HomePage";
import Profile from "./Pages/Profile";
import AddTaskForm from "./components/AddTaskForm";






function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/addtask" element={<AddTaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
