import { Chart } from "react-google-charts";
import { useEffect, useContext, useState } from "react";
import { CountryInfoContext } from "./providers/CountryInfoProviders";
import { Box } from "@chakra-ui/react"


export const WorldMap = () => {
    console.log('WorldMap')
    const { countryInfo, dispatch } = useContext(CountryInfoContext)
    const [ data, setData ] = useState<(string|number)[][]>()
    const options = {
      colorAxis : {Values: [0],  colors: ["#f58d05"]},
    }
    useEffect(()=>{ 
        const data = [
            ["Country", "Check"],
            [`${countryInfo!.map}`, 0],
        ]
        setData(data)
    }, [countryInfo])
    return (
      <Box
        w={{
          base : '100%', 
          sm:'80%'
        }}
      >
        <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data![selection[0].row + 1];
                console.log("Selected : " + region);              },
            },
          ]}
          chartType="GeoChart"
          width="100%"
          height="300px"
          data={data}
          options={options}
        />
      </Box>
    );
  }