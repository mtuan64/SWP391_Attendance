
import './App.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from './pages/Home';
import { Lecture } from './pages/Lecture';
import { Attendence } from './pages/AttendenceCheck';
import { AppLayout } from './layouts/AppLayout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
      >
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route
            path="lecture"
            element={<Lecture />}
          />
          <Route
            path="attendence/:id"
            element={<Attendence />}
          />
          
        </Route>
      </Route>
    ))

  return (
    <>
          <RouterProvider router={router} />
    </>
  )
}

export default App
