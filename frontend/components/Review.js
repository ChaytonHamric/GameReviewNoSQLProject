import React, { Component } from 'react'
 
export default class Review extends Component {
    state = {
        stars: []
    }
    componentDidMount() {
        for(var i = 0; i < this.props.stars; ++i){
            this.setState(prevState =>({
                stars: [
                    ...prevState.stars,
                    <img className="star-image" src="">

                    </img>
                ]
            }));
        }
    }
    render() {
        return(
        <div>
            <div>
                {{this.state.stars}}    
            </div>
            <p>
                {{this.props.review}}
            </p>
            <ul>
                <li>
                    {{this.props.hours}}
                </li>
            </ul>
        </div>
        )
    }
}