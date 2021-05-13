import {Route, Switch} from "react-router-dom";
import Characters from '../components/characters_page/characters/Characters'
import CharactersDetails from '../components/characters_page/charactersDetails/CharactersDetails'
import Inventory from '../components/inventory_page/inventory/Inventory'
import InventoryDetails from '../components/inventory_page/invetoryDetails/InventoryDetails'

export default function Routes (){
  return (
      <div>
          <Switch>
              <Route exact path={'/'} render={()=><div>Homeee</div>}/>
              <Route exact path={'/characters'} component={Characters}/>
              <Route path={'/characters/:id'} component={CharactersDetails}/>
              <Route exact path={'/inventory'} component={Inventory}/>
              <Route path={'/inventory/:id'} component={InventoryDetails}/>
          </Switch>
      </div>
  );
}