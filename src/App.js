
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
 import { useStateValue, initialState } from './Context/Context';

function App() {
  const [{  }, dispatch] = useStateValue();

  useEffect(() => {
    //ONLY loads when the app component loads..
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      // basically will store the login details of the user in the data layer
      if (authUser) {
        //the user is or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
  }, []);

  return (
<>
<Router> 
    <div className="App">
<Routes> 

<Route element= {[<Header/>,<Checkout/>]} path="/checkout"/> 

<Route element={[<Login/>]} path="/login"/>

{/*Make sure that the default route is at the bottom */}
<Route element= {[<Header/>,<Home/>]} path="/"/> 

 </Routes>
</div>

  </Router>
  </>
  );
}

export default App;
