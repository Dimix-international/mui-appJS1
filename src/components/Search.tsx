import React from "react";
import {TextField} from "@mui/material";

type SearchType = {
    value:any,
    onChange:any
}

const Search:React.FC<SearchType> = React.memo( (props) => {
    const { onChange, value } = props;
    //input
    return <TextField
        label={'search'}
        variant="standard"
        fullWidth
        type='search'
        value={value}
        onChange={onChange}
        sx={{
            mb: '1.5rem'
        }}
    />;
});

export default Search;