import React from "react";

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    imageRef = React.createRef();
//pull out ... what?
    createFish = (event) => {
      //1stop from subnitting
      event.preventDefault()
      const fish = {
        name: this.nameRef.value.value,
        image: this.imageRef.value.value
      };
      this.props.addFish(fish); // ...and we'll pass it our fish
      //refresh
      event.currentTarget.reset();
    };
      // 1
      event

    render() {
      return (
        <form className="fish-edit" onSubmit={this.createFish}>

        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="image" alt="Fish image" ref={this.imageRef} type="image" placeholder="Name" />

          <button type="submit">+ Add Fish</button>
        </form>
      );
  }
}
export default AddFishForm;


// import React from "react";

// class AddFishForm extends React.Component {
//   nameRef = React.createRef();
//   imageRef = React.createRef();

//   createFish = event => {
//     // 1.  stop the form from submitting
//     event.preventDefault();
//     const fish = {
//       name: this.nameRef.value.value,
//       image: this.imageRef.value.value
//     };
//     this.props.addFish(fish);
//     // refresh the form
//     event.currentTarget.reset();
//   };
//   render() {
//     return (
//       <form className="fish-edit" onSubmit={this.createFish}>
//         <input name="name" ref={this.nameRef} type="text" placeholder="Name" />

//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Image"
//         />
//         <button type="submit">+ Add Fish</button>
//       </form>
//     );
//   }
// }

// export default AddFishForm;




// import React from "react";


// class AddFishForm extends React.Component{
//     nameRef
//     priceRef
//     statusRef
//     descRef= React.createRef();
//     imageRef
// //pull out ... what?
//     createFish = (event) => {
//       //1stop from subnitting
//       event.preventDefault()
//       const fish = {
//         name: this.nameRef.value.value,
//         price: parseFloat(this.priceRef.value.value), //cents
//         status: this.statusRef.value.value,
//         desc: this.descRef.value.value,
//         image: this.imageRef.value.value


//       };
//       this.props.addFish(fish); // ...and we'll pass it our fish
//       //refresh
//       event.currentTarget.reset();
//     };
//       // 1
//       event

//     render() {
//       return (
//         <form className="fish-edit" onSubmit={this.createFish}>

//         <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
//         <input name="price" ref={this.nameRef} type="text" placeholder="Name" />
//         <select name="name" ref={this.nameRef} type="text" placeholder="Name" />
//           <
//           <
//         </select>
//         <textarea
//         <input name>




//         <input
//           name="price"
//           ref={this.priceRef}
//           type="text"
//           placeholder="Price"
//         />



//           <textarea
//           <input
//           <button type="submit">+ Add
//         </form>
//       );
//   }
// }
// export default Inventory;


// import React from "react";

// class AddFishForm extends React.Component {
//   nameRef = React.createRef();
//   priceRef = React.createRef();
//   statusRef = React.createRef();
//   descRef = React.createRef();
//   imageRef = React.createRef();

//   createFish = event => {
//     // 1.  stop the form from submitting
//     event.preventDefault();
//     const fish = {
//       name: this.nameRef.value.value,
//       price: parseFloat(this.priceRef.value.value),
//       status: this.statusRef.value.value,
//       desc: this.descRef.value.value,
//       image: this.imageRef.value.value
//     };
//     this.props.addFish(fish);
//     // refresh the form
//     event.currentTarget.reset();
//   };
//   render() {
//     return (
//       <form className="fish-edit" onSubmit={this.createFish}>
//         <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
//         <input
//           name="price"
//           ref={this.priceRef}
//           type="text"
//           placeholder="Price"
//         />
//         <select name="status" ref={this.statusRef}>
//           <option value="available">Fresh!</option>
//           <option value="unavailable">Sold Out!</option>
//         </select>
//           <option value

//         <textarea name="desc" ref={this.descRef} placeholder="Desc" />
//         <input
//           name="image"
//           ref={this.imageRef}
//           type="text"
//           placeholder="Image"
//         />
//         <button type="submit">+ Add Fish</button>
//       </form>
//     );
//   }
// }

// export default AddFishForm;