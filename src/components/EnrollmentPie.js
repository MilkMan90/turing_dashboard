import React, { Component } from 'react';
import {VictoryPie, VictoryLabel} from 'victory';
import PieLabel from './PieLabel.js'

class EnrollmentPie extends Component {
  constructor(props) {
  super(props);
    this.state =  {
        data: props.data
    };
  }
  render() {
    return (
        <div className="pie-chart">
          <p className="pie-title">{this.props.data.programID}</p>
          <VictoryPie
            className="pie-svg "
            data={this.props.data.counts}
            height={400}
            x="label"
            y="count"
            padding={30}
            innerRadius={100}
            style={{
              data: {
                fill: (d) => {
                  return d.x == 1 ? "#05BACB" : "darkgrey"
                  }
              },
              labels: {
                padding: -50
                }
              }
            }
            animate={
              {
                duration: 500,
                easing: "poly",
              }
            }
            labelComponent =
              {
                <VictoryLabel
                  text={(datum)=>{
                    return Math.ceil(datum.y)
                  }}
                  style={{
                    fontSize: "30px",
                    fill:"white"
                    }
                  }
                />
              }
            // labelComponent = {<PieLabel/>}
          />
          <p className="pie-date">Start Date: {this.props.data.startDate}</p>
        </div>
    );
  }
}

export default EnrollmentPie;
