// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { MovieDetail } from 'components'
export default class Hero extends React.Component{
  constructor(props) {
    super(props);
    this.state = { checked: true,
      movietitle:'',
      releaseyear:'',
      searchresults:[],
      tablevisible: false,
      modalopen: false,
      clickedrow:[]
    
    
    
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  movietitle(event){
    console.log("esclation contact", event.target.value)
    this.setState({
      movietitle: event.target.value
    })
  }
  onCloseModal = () => {
    // console.log("on close modal")
    this.setState({
      modalopen: false
    })
  };
  releaseyear(event){
    console.log("esclation contact", event.target.value)
    this.setState({
      releaseyear: event.target.value
    })
  }
  movielink=(result) =>{
    console.log("esclation contact", result)
    this.setState({
      modalopen: true,
      clickedrow: result
    })
  }
  moviesearch(event){
    var movie = this.state.movietitle;
    var year = this.state.releaseyear;
    console.log("esclation contact", event.target.value)
    fetch(`http://www.omdbapi.com/?s=${movie}&y=${year}&apikey=b892d1fe`).then((Response) => Response.json()).
    then((findresponse) => {
      console.log("findresponse value for incident table", findresponse.Search)
      this.setState({
        searchresults: findresponse.Search,
        tablevisible:true
      })
    })
 
  }
  // handleChange(checked) {
  //   console.log("checked", checked)
  //   this.setState({ checked });
  // }
  render(){
  const {movietitle, releaseyear, searchresults, tablevisible, modalopen, clickedrow} = this.state;
    return(
      <Tabs>
      <TabList>
        <Tab>Movie with full Details</Tab>
        <Tab>Movie with Poster</Tab>
      </TabList>
   
      <TabPanel>
      <div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-1 col-form-label">Movie Title</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="movietitle" placeholder="Enter Movie Title" value={movietitle} onChange={event => this.movietitle(event)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-1 col-form-label">Release year</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="movieyear" placeholder="Enter Movie Release year" value={releaseyear} onChange={event => this.releaseyear(event)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-1 col-form-label"></label>
    <div class="col-sm-10">
    <button class="btn btn-primary mb-2" onClick={event => this.moviesearch(event)}>Search</button>
    </div>
  </div>
 
</div>
{tablevisible &&
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Year</th>
        <th>imdbID</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
                      searchresults != '' ? searchresults.map((result, i) => { 
                        return <tr>
        <td>{result.Title}</td>
        <td>{result.Type}</td>
        <td>{result.Year}</td>
        <td>{result.imdbID}</td>
        <td><a href="#" onClick={this.movielink.bind(this, result)}>More Info</a></td>
      </tr>
        }) : ''
           }
    </tbody>
  </table>
  }

    <Modal open={modalopen} onClose={this.onCloseModal} center width="600" style={{ maxWidth: '1600px', width: '1600px' }}>
<MovieDetail clickedrow={clickedrow}/>
    {/* <Swiftroaster grouplistnames= {this.props.grouplistnames} swiftvalues={createswiftvalues} editswift={editswiftvalue} /> */}
    </Modal>

 </TabPanel>
      <TabPanel>
      <div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-1 col-form-label">Movie Title</label>
    <div class="col-sm-10">
    <input type="text" class="form-control" id="movietitle" placeholder="Enter Movie Title" value={movietitle} onChange={event => this.movietitle(event)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-1 col-form-label">Release year</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="movieyear" placeholder="Enter Movie Release year" value={releaseyear} onChange={event => this.releaseyear(event)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-1 col-form-label"></label>
    <div class="col-sm-10">
    <button class="btn btn-primary mb-2" onClick={event => this.moviesearch(event)}>Search</button>
    </div>
  </div>
 
</div>
{tablevisible &&
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Title</th>
        <th>Type</th>
        <th>Year</th>
        <th>imdbID</th>
        <th>Poster</th>
      </tr>
    </thead>
    <tbody>
    {
                      searchresults != '' ? searchresults.map((result, i) => { 
                        return <tr>
        <td>{result.Title}</td>
        <td>{result.Type}</td>
        <td>{result.Year}</td>
        <td>{result.imdbID}</td>
        <td><img src={result.Poster} class="img-fluid" alt="No Poster for this Movie" /></td>
      </tr>
        }) : ''
           }
    </tbody>
  </table>
  }

      </TabPanel>
    </Tabs>
    )
  }
}
