import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

//state is a singel source of truth
// a data attribute on a
// don't tuch the DOM
// just updating our data and let react take care of it
// inside ogf
// I would need to update the price and ..
// here here and here nightmare
// you simply keep your data in state and whenever
//I updatet my state and react wait for it... reacted <ta en et lydklipp>

// we will create the add fish form
//let's make tha

//Yeah the addFishForm is

//Not pages or pieces but components
//keep state the shape it will be at a later time
//How do you get an item


//Oppskriftene henger som lapp på veggen
class App extends React.Component {
    state = {
        fishBook: {}, //fishList, fishLedger paperFishes
        orderBook: {}
    };
    storeAddFish = (fish) => {
        //Object spread ...
        // How does Annie ake in a fish from the red fish boat?
        // => because we are going to access this inside it
      //1 take a copy of the existing state, You never want to reach into state and grab the fish ...  mutation reach into object     performance, things updating out of order non-mutation. Object spread non-deep-clone
      const newFishDisplayCounter = { ...this.state.fishBook };

      //2 add our new fish to that fishes variable
      newFishDisplayCounter[`fish${Date.now()}`] = fish;
      //... overwrite our exixting state and that will trigger a change in react

      //3 set the new fishes object to state. call the setState method.    pass it the piece of state we want to update, that will take our copied old fishes + our new fish and overwrite fishesAndFishDisplayCounter: {},

      this.setState({ fishBook : newFishDisplayCounter });
      // på fishDisplayCounter plassen skal newFishDisplayCounter være
      // property = plass
      // Objektet er byen
      //pleaseUpdateThesePiecesOfStatePlease
      //event.currentTarget.removeEventListener();

    };
    loadSampleFishes = () => {
        this.setState({ fishBook: sampleFishes });
    };


    render() {
      return (
          <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="Sea food – A New Fish" />
            </div>
            <Order />
            <Inventory
              inventoryAddFish={this.storeAddFish}
              loadSampleFishes={this.loadSampleFishes}
            />
          </div>
      );
  }
}






export default App;

