
import {BrowserRouter,Router,Route, Routes} from 'react-router-dom';
import CreateUser from './component/CreateUser';
import UpdateUser from './component/UpdateUser';
import ReadUser from './component/ReadUser';



function App() {


  return (
    <>
    {/* <CreateUser/> */}
    {/* <UpdateUser/> */}
     {/* <ReadUser/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ReadUser/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
