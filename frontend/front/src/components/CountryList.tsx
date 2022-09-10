import { countryNames, countries } from "../utils/countryNames"
import { Box, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react' 
import { useContext } from "react"
import { CountryInfoContext } from "./providers/CountryInfoProviders"
import { ChevronDownIcon } from '@chakra-ui/icons'


export const CountryList = () => {
    console.log('CountryList')
    const { countryInfo, dispatch } = useContext(CountryInfoContext)
    
    const onClickFunc = (e:React.MouseEvent<HTMLButtonElement>) => {
        const api = e.currentTarget.dataset.api
        const map = e.currentTarget.dataset.map
        dispatch!({type:"set", value:{api:api!, map:map!}})
    }

    console.log(countryInfo)
    return(
        <>  
        <Box
            textAlign="right"
        >
        <Box 
            display={{base:"none", sm:"block"}} 
            h={{sm:"350px"}} 
        />
        <Menu 
            closeOnSelect={false}
            flip={false}
            matchWidth={false}
            placement="top-end"
            isLazy={true}
        >
            <MenuButton 
                as={Button}
                float="right"
                w={{
                    base:"150px",
                    md:"200px"
                }}
                rightIcon={<ChevronDownIcon/>}
                bg="yellow"
                border="solid 1px #d6d6d4"
                _hover={{bg:"#f7ea52"}}
                _active={{bg:"#f7ea52"}}
                mb="3%"
            >
                Country
            </MenuButton>
            <MenuList
                h={{
                    base:"150px", 
                    sm:"350px"
                }}
                w={{
                    base:"100px"
                }}
                overflowY="scroll"
            >
            {countries.map((country) => (
                <MenuItem 
                    onClick={onClickFunc} 
                    key={`${country.api}`} 
                    data-api={`${country.api}`}
                    data-map={`${country.map}`}
                >
                    {country.api}
                </MenuItem>
            ))}
            </MenuList>
        </Menu>
        </Box>
        </>
    )
}

