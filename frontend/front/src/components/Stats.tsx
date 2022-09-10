import { useContext, useEffect, useState } from "react"
import { CountryInfoContext } from "./providers/CountryInfoProviders"
import axios from "axios"
import type { statsType } from "../types/statsType"
import  { statsInitial }  from "../types/statsType"
import { TableContainer, Table, Thead,
    Tbody, Tr, Th, Td,
TableCaption, } from "@chakra-ui/table"
import { Box } from "@chakra-ui/layout" 
import { countryInfoUrl } from "../urls"

export const Stats = () => {
    const { countryInfo, dispatch } = useContext(CountryInfoContext)
    const [ stats, setStats ] = useState<statsType>(statsInitial)
    const [ noData, setNoData ] = useState(false)
    useEffect(() => {
        const config = {params:{country:countryInfo!.api}}
        axios.get(countryInfoUrl, config)
            .then(res => {
                setStats(res.data)
            })
            .catch(e => {
                setNoData(true)
            })
    }, [countryInfo])
    console.log(stats)
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            { true &&
            <TableContainer
                w="70%"
                border="solid 2px #f7ea52"
                borderRadius="10px"
            >
                <Table size="sm">
                    <Thead>
                        <Tr>
                            <Th>Description</Th>
                            <Th>Data</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Country</Td>
                            <Td>{stats.Country_text}</Td>
                        </Tr>
                        <Tr>
                            <Td>total Covid cases</Td>
                            <Td>{stats["Total Cases_text"]}</Td>
                        </Tr>
                        <Tr>
                            <Td>new cases</Td>
                            <Td>{stats["New Cases_text"]}</Td>
                        </Tr>
                        <Tr>
                            <Td>total death cases</Td>
                            <Td>{stats["Total Deaths_text"]}</Td>
                        </Tr>
                        <Tr>
                            <Td>new death cases</Td>
                            <Td>{stats["New Deaths_text"]}</Td>
                        </Tr>
                        <Tr>
                            <Td>active cases</Td>
                            <Td>{stats["Active Cases_text"]}</Td>
                        </Tr>
                        <Tr>
                            <Td>total recovery cases</Td>
                            <Td>{stats["Total Recovered_text"]}</Td>
                        </Tr>                    
                    </Tbody>
                </Table>
            </TableContainer>
            }
            {false && 
            <div>
                Data is currently unavailable.
            </div>
            }
        </Box>
    )
}