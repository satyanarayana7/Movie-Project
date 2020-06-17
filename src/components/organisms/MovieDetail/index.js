// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default class MovieDetail extends React.Component{
  constructor(props) {
    super(props);
    this.state = { checked: true,
      searchresults:[]
    
    
    
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    console.log("this.props", this.props)
    fetch(`http://www.omdbapi.com/?i=${this.props.clickedrow.imdbID}&plot=full&apikey=b892d1fe`).then((Response) => Response.json()).
    then((findresponse) => {
      console.log("findresponse value for incident table", findresponse)
      this.setState({
        searchresults: findresponse,

      })
    })
  }
 
  // handleChange(checked) {
  //   console.log("checked", checked)
  //   this.setState({ checked });
  // }
  render(){
  const {searchresults} = this.state;
    return(
      <section>
        <div>
        <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
    <div>{searchresults.Title}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Actors</label>
    <div class="col-sm-10">
    <div>{searchresults.Actors}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Awards</label>
    <div class="col-sm-10">
    <div>{searchresults.Awards}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">BoxOffice</label>
    <div class="col-sm-10">
    <div>{searchresults.imdbRating > 7 ? <div>Hit</div> : <div>Flop</div>}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Country</label>
    <div class="col-sm-10">
    <div>{searchresults.Country}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Director</label>
    <div class="col-sm-10">
    <div>{searchresults.Director}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Genre</label>
    <div class="col-sm-10">
    <div>{searchresults.Genre}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Language</label>
    <div class="col-sm-10">
    <div>{searchresults.Language}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Plot</label>
    <div class="col-sm-10">
    <div>{searchresults.Plot}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Writer</label>
    <div class="col-sm-10">
    <div>{searchresults.Writer}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Year</label>
    <div class="col-sm-10">
    <div>{searchresults.Year}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Released</label>
    <div class="col-sm-10">
    <div>{searchresults.Released}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Runtime</label>
    <div class="col-sm-10">
    <div>{searchresults.Runtime}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Type</label>
    <div class="col-sm-10">
    <div>{searchresults.Type}
      </div></div>
  </div>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Rated</label>
    <div class="col-sm-10">
    <div>{searchresults.Rated}
      </div></div>
  </div>
 

 
</div>
      </section>
    )
  }
}
