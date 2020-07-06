import React from "react";
import Swal from "sweetalert2";
import "./Wheel.css";
import TirTir from "./../../assests/ding.mp3"

const sounds = {
  green: new Audio(TirTir),
}
export default class Wheel extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      result: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  

  selectItem() {
    console.log(this.props.items.length)
    if (this.props.length !==  ""){
      sounds.green.play()
      var selectedItem = "";
      this.setState({ lodaing: "..............", result: null });
      if (this.state.selectedItem === null) {
        selectedItem = Math.floor(Math.random() * this.props.items.length);
        this.setState({ selectedItem });
        if (this.props.onSelectItem) {
          this.props.onSelectItem(selectedItem);
        }
        
        setTimeout(() => {
          this.setState({ lodaing: "" });
          this.setState({ result: selectedItem });
          let winner = this.props.items[this.state.result];
          Swal.fire({
            title: "Winner",
            text: winner,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "REMOVE",
          }).then((result) => {
            if (result.value) {
              alert("data removed")
              console.log(this.state.selectedItem )
            this.props.items.splice(this.state.selectItem,1)
            this.props.remove(this.props.items)           
           }
          })
        }, (`${this.props.duration}000`));
      } else {
        console.log(selectedItem);
        this.setState({ selectedItem: null });
        setTimeout(this.selectItem, 2000);
      }
    }
    }
    render() {
      const { selectedItem } = this.state;
      const { items } = this.props;
      
      console.log(items.length);
      const wheelVars = {
        "--nb-item": items.length,
        "--selected-item": selectedItem,
        "--spinning-duration": `${this.props.duration}s`,
       " --nb-turn": this.props.duration * 2,
      };
      const spinning = selectedItem !== null ? "spinning" : "";
    return (
      <div className="wheel-container">
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={this.selectItem}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index }}
            >
              <h5>{item}</h5>
              {/* <img
                                src={item.image}
                                style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                            /> */}
            </div>
          ))}
        </div>
   
      </div>
    );
  }
}

