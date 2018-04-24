import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component{
  render() {
      return (
        <div className="inventory">
          <h2>inventory</h2>

          <AddFishForm formAddFish={this.props.inventoryAddFish} />
          <button onClick={this.props.loadSampleFishes}>
            Load Sample Fishes
          </button>

        </div>
      );
  }
}
export default Inventory;

// the fishes doesnt live in inventory, but it has been passed in via props. We have access to this function(?) which really lives two levels higher.