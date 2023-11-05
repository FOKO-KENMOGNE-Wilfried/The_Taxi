import styled from "styled-components";
import { country } from "./country";
import {Link} from "react-router-dom"
import colors from "../../utils/style/styles";
import PropTypes from "prop-types"

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    padding: 10px;
    width: 125px;
    border-radius: 5px;
    border: 1px solid #DBDBDB;
    position: absolute;
        right: 90px;
        top: 80px;
`
const FormatList = styled(Link)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    gap: 10px;
    color: ${colors.third};
    width: 125px;
`

function Selection({onSelect, setShow}){

    return (
        <Box>
            {
                country.map((list) => {
                    return(    
                        <FormatList key={list.id} id={list.id} onClick={() => {onSelect(list.name,list.flag); setShow(false);}}>
                            <img src={list.flag} alt={`${list.name}-flag`} width={"30px"} height={"22px"}/>
                            {list.name}
                        </FormatList>
                    )
                })
            }
        </Box>
    )
}

Selection.propTypes = {
    onSelect : PropTypes.func,
    setShow : PropTypes.func
}

export default Selection;