import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from '../axiosConfig'
const ProjectChart = ({ projectId }) => {

    const [stats, setstats] = useState([])
    const getProjectStats = async () => {
        await axios.get(`projectstatus?pro_id=${projectId}`)
            .then((res) => {
                console.log(res, "stats 1")
                if (res.data.status === 200) {
                    setstats(res.data.data)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProjectStats()
    }, [projectId])

    useEffect(() => {
        if (stats?.completed > 0 || stats?.inprogress > 0 || stats?.review > 0 || stats?.todo > 0) {
            setSeries([stats.completed, stats.inprogress, stats.review, stats.todo])
        }
        else {
            setSeries([1])
        }
    }, [stats])

    const [series, setSeries] = useState([]);
    const [options, setOptions] = useState({
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: stats?.completed > 0 || stats?.inprogress > 0 || stats?.review > 0 || stats?.todo > 0 ? ['completed', 'inprogress', 'review', 'todo'] : ['no task available'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    });

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="pie" width={380} />
        </div>
    );
};

export default ProjectChart;
