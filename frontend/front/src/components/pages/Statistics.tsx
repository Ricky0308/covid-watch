import axios from 'axios';
import { CountryList } from "../CountryList"
import { WorldMap } from '../WorldMap';
import { Stats } from '../Stats';
import { useEffect, useContext, useState } from 'react';
import { CountryInfoContext } from "../providers/CountryInfoProviders"
import { Box } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/react'

export const Statistics = () => {
    const { countryInfo, dispatch } = useContext(CountryInfoContext)
      
    return (
        <>
            <Box
                display="flex"
                flexDirection={{
                    base:"column",
                    sm:"row"
                }}
                px={{
                    base:"5%",
                    lg:"7%"
                }}
            >
                <WorldMap/>
                <CountryList/>
            </Box>
            <Stats/>
            
        </>
    )
}