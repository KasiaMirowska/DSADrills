import React from 'react';
import data from './data';

export default class LinearSearch extends React.Component {

    linearSearch = (array, value) => {
        let count = 0
        for (let i = 0; i < array.length; i ++) {
            count = i
            if(array[i] === value) {
                return count;
            }
        }
        return `${value} is not found. it took ${count} steps`;
    }
    render() {
       console.log('DATA',data)
        let steps = this.linearSearch(data, Number(this.props.num))
      
        return(
            <div>
                
                  <h2>Linear Search = steps: {steps}</h2>
                    
            </div>
        )
    }
}