import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as API from '../API';
import { mergeTasks } from '../Store/actions';


const WithTasksData:React.FC = (props) => {

    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(()=> {
        API.getTasks()
            .then(res => dispatch(mergeTasks(res)))
            .finally(() => setIsLoading(false))
    }, [])

    if(isLoading) {
        return <div>...Loading</div>
    }
    return <div>{props.children}</div>
}

export default WithTasksData;