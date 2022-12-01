import Labs from "./labs";
import './App.css';
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb+srv://nick:<password>@cluster0.opkc5eh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_STRING);



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/*"
                         element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter"
                         element={<Tuiter/>}/>
              </Routes>

          </div>
      </BrowserRouter>
  );
}
export default App;

