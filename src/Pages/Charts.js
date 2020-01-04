import React,{ Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend , PieChart, Pie, Sector, Cell} from 'recharts';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, },
  {name: 'Page B', uv: 3000, pv: 1398, },
  {name: 'Page C', uv: 2000, pv: 9800, },
  {name: 'Page D', uv: 2780, pv: 3908, },
  {name: 'Page E', uv: 1890, pv: 4800, },
  {name: 'Page F', uv: 2390, pv: 3800, },
  {name: 'Page G', uv: 3490, pv: 4300, },
];

class Charts extends Component {

  state = {
    chartData: null,
    compoundData: null,
    comparisonData: null,
    etfData: null,
    awpData: null,
    awpPie: null,
  }
  componentDidMount(){
    // this.getDataCompound();
    // this.getEtfData();
    this.getAWP();
    this.getDataComparison();
  }

  
  async getDataCompound() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/compound`);
    
    const data = await res.json();
    this.setState({
      compoundData: data
    })
  }

  
  async getDataComparison() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/comparison/2019-12`);
    //const res = await fetch(`http://localhost:3999/charts/comparison/2019-12`);
    
    const data = await res.json();
    this.setState({
      comparisonData: data
    })
  }

  async getData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/stock/VTI/monthly/chart`);
    const data = await res.json();
    this.setState({
      chartData: data.reverse()
    })
  }

  async getEtfData() {
    const res = await fetch(`https://pie-protocol-api.herokuapp.com/charts/etf`);
    
    const data = await res.json();
    this.setState({
      etfData: data.reverse()
    })
  }

  async getAWP() {
    // const res = await fetch(`https://pie-protocol-api.herokuapp.com/portfolio/awp`);
    // const data = await res.json();

    this.setState({
      awpPie: [{"ratio":0.3,"ticker":"VTI","initial_allocation":3000},{"ratio":0.4,"ticker":"TLT","initial_allocation":4000},{"ratio":0.15,"ticker":"IEI","initial_allocation":1500},{"ratio":0.075,"ticker":"GLD","initial_allocation":750},{"ratio":0.075,"ticker":"GSG","initial_allocation":750}],
    })
  }

  renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
    const {awpPie} = this.state;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    const single = awpPie[index].ticker;
    // {`${single} ${(percent * 100).toFixed(0)}%`}
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${single}`}
      </text>
    );
  };

  renderAwpPie() {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const {awpPie} = this.state;
    if(!awpPie) {
      return null;
    }
    return (
      <PieChart width={400} height={400}>
        <Pie
          data={awpPie}
          cx={200}
          cy={200}
          labelLine={false}
          label={this.renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="ratio"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }

  renderCompoundChart() {
    const {compoundData} = this.state;
    return (
      <div>
        {!compoundData ? 'Loading' :
          <LineChart width={600} height={300} data={compoundData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="rate" stroke="#8884d8" activeDot={{r: 8}}/>
          </LineChart>
        }
      </div>
    );
  }

  renderComparisonChart() {
    const {comparisonData} = this.state;

    return (
      <div>
        {!(comparisonData) ? 'Loading' :
          <LineChart width={600} height={300} data={comparisonData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="awp" stroke="#00C49F" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="awpPlus" stroke="#EC774C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="rate" stroke="#0088FE" activeDot={{r: 8}}/>
          </LineChart>
        }
      </div>
    );
  }

  renderAWPChart() {
    const {awpData, compoundData} = this.state;
    return (
      <div>
        {!(awpData || compoundData) ? 'Loading' :
          <LineChart width={600} height={300} data={awpData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="roi" stroke="#EC774C" activeDot={{r: 8}}/>
          </LineChart>
        }
      </div>
    );
  }

  renderEtfChart() {
    const {etfData} = this.state;
    return (
      <div>
        {!etfData ? 'Loading' :
          <LineChart width={600} height={300} data={etfData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="VTI" stroke="#EC774C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="TLT" stroke="#FCAC50" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="IEI" stroke="#ECC74C" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="GLD" stroke="#4CE5EC" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="GSG" stroke="#9F4CEC" activeDot={{r: 8}}/>
            {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
          </LineChart>
        }
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Rates comparison</h3>
        {this.renderComparisonChart()}
        {this.renderAwpPie()}
        {/* <h3>AWP</h3>
        {this.renderAWPChart()}
        

        <h3>Compound APR for SAI</h3>
        {this.renderCompoundChart()}
        <h3>ETF prices comparison</h3>
        {this.renderEtfChart()} */}

        
      </div>
    );
  }
}

export default Charts;