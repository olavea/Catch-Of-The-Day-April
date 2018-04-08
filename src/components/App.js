import React from "react";
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';


class App extends React.Component {
    state = {          // object,
        fishes: {}, //empty object, could use string and... or...//empty state of fishes
        order: {} //empty object, use what you will end up using
    };
    addFish = (fish) => { // how do you get a an item / fish into state console.log(adding a fish);
   // takes in a fish. console.log("add a fish");
//you cannot pdate dirkctley from this addFish form because
//the methods that update state and the actual state always needs to live in the same component
// video 7 state is the datas home props is the vw bus
// we create this secondary method here addFish = (fish) => { 16:07
// How do I actually call this method right?
// Weird we wanna call it two levels deeper
// we want to run it in add fish form
// How does anything get into an component props and inventory
      // this.setState


    };
      //1 take a copy of the existing state, non-mutation, non-deep-clone
      const fishes = { ...this.state.fishes};

      //2 add our new fish to that fishes variable
      fishes[`fish${Date.now()}`] = fish;
      //... overwrite our exixting state and that will trigger a change in react

      //3 set the neew fishes object to state

      this.setState({
          fishes: fishes
      });
    };

        //pleaseUpdateThisPieceOfState
      console.log
    render() {
      return (
          <div className="catch-og-the-day">
            <div className="menu">
                <Header tagline="A Midsummer Night's Dream" />
            </div>
            <Inventory addFish={this.addFish} />
            <Order />
          </div>
      )
  }
}

export default App;

