import React from 'react';
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder={'Searching...'}
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Sorting'}
                options={[
                    {value: 'title', name: 'By title'},
                    {value: 'body', name: 'By description'},
                ]}
            />
        </div>
    );
};

export default PostFilter;