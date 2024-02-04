import React from 'react'

class CompMount extends React.Component {

    //componentDidMount() is in the legacy section of the react api
    //it belongs to class components, and we are moving toward all functional components. 
    //componentWillUnmount() was used to remove any connections componentDidMount is doing
    //https://react.dev/reference/react/Component

    changeText = () => {
        document.getElementById('mount').innerText = 'I was changed by the function';
    }

    // componentDidMount() {
    //     console.log('mounted');
    //     this.changeText()
    // }

    // componentWillUnmount() {
    //     alert('hello');
    // }
    
    render() {
        return (
            <>
            {
            //called here, component hasnt rendered, the div doesnt exist on the DOM
            //this.changeText()
            }
            <div id='mount' className='pages'>I am the comp mount</div>
            </>
        )
    }

}

export default CompMount