import React,{ useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Result(props) {
    const [appState, setAppState] = useState( {
        message : ''
    })
    useEffect(() => {
        if(props.isBooked) {
            setAppState({
                message : 'Success'
              })
        }
        else {
            setAppState({
                message : 'Failed'
              })
        }
      }, [props.isBooked]);
    return (
      <div  className="container">
            <h2>{appState.message}</h2>
      </div>
    );
  }
  const mapStateToProps = state => ({
    isBooked: state.flightReducer.isBooked,
})

  export default connect(mapStateToProps)(Result)

  
