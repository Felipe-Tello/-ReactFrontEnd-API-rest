import {BrowserRouter, Route, Switch} from "react-router-dom";
import AllPets from "./components/AllPets";
import Error from "./components/Error";
import NewPet from "./components/NewPet";
import UpdatePet from "./components/UpdatePet";
import ViewPet from "./components/ViewPet";

  const App = () =>{
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <AllPets />} />
          <Route path="/new" render={() => <NewPet />} />
          <Route path="/pets/edit/:id" render={() => <UpdatePet />}/>
          <Route path="/error" render={() => <Error />}/>
          <Route path="/pets/view/:id" render={() => <ViewPet />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
