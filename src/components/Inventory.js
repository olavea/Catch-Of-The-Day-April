import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component{
  render() {
      return (
        <div className="inventory">
          <h2>Inventory!</h2>

          <AddFishForm addFish={this.props.addFish} /> // the fishes doesnt live in inventory, but it has been passed in via props. We have access to this function(?) which really lives two levels higher.

        </div>
      );
  }
}
export default Inventory;