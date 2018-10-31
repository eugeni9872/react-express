import React, {  Component} from 'react';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        component: null
      }
    }


    render() {
        return(
          <div dangerouslySetInnerHTML={{__html: (this.props.currentView)}}></div>
        )
    }
  }


  export default App;



