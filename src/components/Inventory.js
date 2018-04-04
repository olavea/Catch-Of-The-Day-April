import React from "react";
import AddFishForm from "./AddFishForm"

class Inventory extends React.Component{
  render() {
      return (
        <div className="inventory">
          <h2>Inventory!</h2>
          <form>
          <AddFishForm addFish={this.props.addFish} />
          </form>
        </div>  
      );        
  }
}
export default Inventory;