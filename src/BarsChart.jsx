import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import "./BarsChart.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


var levels = [63, 45, 40, 25, 35, 30];
var tecnos = ["HTML5/CSS3", "JavaScript", "React", "Node.js", "Git/GitHub", "Bootstrap"];
var backcolor = ["rgba(224,95,0,0.9)" , "rgba(218,255,0,0.9)" , "rgba(66,207,193,0.9)", "rgba(0,160,0,0.9)", "rgba(255,255,248,0.9)", "rgba(128,23,201,0.9)"]


var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100
        },
        x: {
            ticks: { 
                color: '#ffff'
            }
        }
    }
};

var midata = {
    labels: tecnos,
    datasets: [
        {
            label: 'Experience',
            data: levels,
            backgroundColor: backcolor,
        }
    ]
};

export function Bars() {
    return (
        <div className='bars-chart'>
            <Bar data={midata} options={misoptions} />
        </div>
        )
}
