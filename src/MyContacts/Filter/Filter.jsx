import { FilterLabel,FilterInput } from "./Filter.styled"
import PropTypes from "prop-types"
import { useDispatch,useSelector } from "react-redux";
import { setFilter } from "redux/contacts/contacts-sclice";
import { getFilter } from "redux/contacts/contacts-selectors";

export const Filter = () => {
        const dispatch = useDispatch()
        const filter = useSelector(getFilter)
        
        const onSetFilter = ({target}) => {
                dispatch(setFilter(target.value))
        }

        return(
            <>
            <FilterLabel>Find contacts by name</FilterLabel>
            <FilterInput type="text" value={filter} onChange={onSetFilter}/>
            </>
        )
    }
 

export default Filter

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}