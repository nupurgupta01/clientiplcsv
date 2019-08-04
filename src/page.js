import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Header from './App';

// import { render } from 'react-dom';



class Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      b_id: []
    };
  }

  // callAPI() {
  //   fetch(`http://localhost:9000/${id}`)
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }
  // var id={this.props.match.params.id}
  //  callAPI() {
  //       fetch('http://localhost:9000/id',{
  //         method:'GET',
  //         data: {
  //           id:'id'
  //        }

  //       })
  //         .then(res => res.text())
  //         .then(res => this.setState({ apiResponse: res }));
  //     }
  callAPI(id) {
    console.log("callapi id " + id)
    fetch('http://localhost:9000/api?season=' + id)
      .then(res => res.json())
      .then(res => {
        // res = res.filter((i,index)=>index<=res.length/2)
        const xAxis = res.map(({ economy }) => economy)
        const yAxis = res.map(({ Pname }) => Pname)
        console.info("economy" + xAxis)
        console.info("id" + yAxis)
        this.setState({ data: xAxis })
        this.setState({ b_id: yAxis })
      })

    console.info(this.state.data.map(({ economy }) => economy))
  }
  //   callAPI(id) {
  //     fetch('http://localhost:9000/api?season='+id)
  //       .then(res => res.json())
  //       .then(res => {
  //         const result=res.map(function(obj) {
  //   return Object.keys(obj).sort().map(function(key) { 
  //     return obj[key];
  //     this.setState({ data: result })
  //   });
  // });})}
  componentDidMount() {
    var id = this.props.match.params.id
    id = Number(id)


    console.log("com mount id .." + typeof id)
    // const id = `{props.match.params.id}`,
    this.callAPI(id);
  }
  componentWillReceiveProps(newProps) {
    const newId = newProps.match ? newProps.match.params ? newProps.match.params.id : false : false
    if (this.props.match.params.id !== newId) this.callAPI(newId)
  }
  render() {
    const options = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'My chart'
      },
      xAxis: {
        title: {
          text: 'Bowler Name'
        },
        categories: this.state.b_id,


      },
      yAxis: {
        title: {
          text: 'economy'
        },
        min: 0,
        max: 25,
      },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        },

      },

      series: [
        {
          data: this.state.data,
          //b_id:this.state.b_id,

          // b_id:this.state.b_id

        }
      ]
    }
    //
    return (
      <div>
        <Header />


        <h1>Bowler Economy Season {this.props.match.params.id}</h1>
        <HighchartsReact highcharts={Highcharts} options={options} />
       



      </div>
    );
  }
}
export default Page