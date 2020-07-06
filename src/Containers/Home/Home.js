import React from "react";
import { Backdrop, Toolbar, SideDrawer, Wheel } from "./../../Components/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from 'react-rangeslider'
import { MdShuffle } from "react-icons/md";
import { AiOutlineSortAscending } from "react-icons/ai"
// To include the default styles
import 'react-rangeslider/lib/index.css'

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      sideDrawerOpen: false,
      places: "",
      duration: 5,
      value: 5,
      reverseValue: 8
    };
  }


  handleChange = (value) => {
    this.setState({
      value: value
    })
  }

  handleChangeReverse = (value) => {
    this.setState({
      reverseValue: value
    })
  }

  remove = (remove)=> {
console.log(remove)

remove = remove.join("\n");
console.log(remove);
this.setState({
  places: remove,
});
localStorage.setItem("allData", JSON.stringify(remove.split("\n")));

  }

  dataSort = () => {
    console.log(this.state.places);
    let allData = this.state.places.split("\n");
    let sortArray = allData.sort();
    sortArray = sortArray.join("\n");

    console.log(this.state.places);
    this.setState({
      places: sortArray,
    });
    localStorage.setItem("allData", JSON.stringify(sortArray.split("\n")));
  };

  shuffle = async () => {
    let allData = this.state.places.split("\n");
    let shuffleData = await allData.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    shuffleData = shuffleData.join("\n");
    console.log(shuffleData);
    this.setState({
      places: shuffleData,
    });
    localStorage.setItem("allData", JSON.stringify(shuffleData.split("\n")));
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  addData = (e) => {
    let { places } = this.state;
    // console.log(this.state.places)
    this.setState({
      places: e.target.value,
    });
    let data = e.target.value;
    localStorage.setItem("allData", JSON.stringify(data.split("\n")));
  };

  componentDidMount = () => {
    let getAllData = localStorage.getItem("allData");
    if (getAllData) {
      getAllData = JSON.parse(getAllData);
      getAllData = getAllData.join("\n");

      this.setState({
        places: getAllData,
      });
    }
  };

  
 
  render() {
    const { value, reverseValue } = this.state
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = (
        <SideDrawer
          path={this.props.history}
          close={this.backdropClickHandler}
        />
      );
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    console.log("Home page=======>", value);
    return (
      <div>
        <div className="navbar">
          <Toolbar
            drawerToggleClickHandler={this.drawerToggleClickHandler}
            color="#FFC600"
            menuItemColor="#000"
            toggleButtonColor="black"
            path={() => this.props.history}
          />
          {sideDrawer}

          {backdrop}
        </div>
        <div>
          <Grid container>
            <Grid item xs={12} sm={12} lg={3}>
              <div style={{padding: '5%'}}>
                <br />
                <br />
             
              <Typography id="discrete-slider-always">Speed in Seconds</Typography>
              <br />
                <br />
                <Slider
          min={0}
          max={60}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className='value'>{value}</div>

        </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <div>
                <br />
                <br />
                <Wheel items={this.state.places.split("\n")} length={this.state.places} duration={value} remove = {this.remove}/>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} lg={3}>
              <br />
              <br />
              <button
                onClick={() => {
                  this.shuffle();
                }}
                style={{border: 'none', marginRight: '2px', padding: '5px', width: '80px', fontWeight: '600'}}
              >
               <MdShuffle /> Shuffle
              </button>
              <button
                onClick={() => {
                  this.dataSort();
                }}
                style={{border: 'none', marginRight: '2px', padding: '5px', width: '80px', fontWeight: '600'}}
              >
               <AiOutlineSortAscending /> Sort
              </button>
              <br />
              <textarea
                rows="30"
                style={{ width: "90%" }}
                onChange={(e) => this.addData(e)}
                value={this.state.places}
              ></textarea>
              <br />
              {/* <span>{this.state.places.length}</span> enteries */}
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
