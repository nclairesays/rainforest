import React, { Component } from 'react'

export default class ProductCard extends Component {
   
    // previous code when I was saving state in the product card. 

    // constructor(){
    //     super()
    //     this.state = {
    //         purchased: false
    //     }
    // }

    // purchased = () => {
    //     this.setState({ purchased: true })
    // }


  render() {

   
    return (
        <div className='column'>

            <div className="ui card">
                <div className="image">
                        <img src={this.props.image_url} alt='card' />
                </div>
                
                <div className="content">
                
                    <header className="header">{this.props.brand} - ${this.props.price}</header>
                    <div className="description">
                        {this.props.title}
                    </div>


                    
                    <div className="ui bottom attached button" onClick={ () => {
                        if (this.props.purchased === false) { this.props.addToCart2(this.props) }
                        }}>

                        { (this.props.purchased === false) 
                            ? (<p><i className="cart plus icon"></i> Add to Cart </p>)
                            : (<p><i className="check circle outline icon"></i> Added to Cart </p>)
                        }
                    </div>


                    {/* THE CODE BELOW WORKS, BUT IS SETTING STATE INSIDE CARD INSTEAD OF CONTAINER */}

                    {/* <div className="ui bottom attached button" onClick={ () => {
                    if (this.state.purchased === false) {
                        this.props.addToCart2(this.props)
                        this.purchased()
                    }}}>  */}
                    {/* end of opening div for button*/}

                    {/* { (this.state.purchased === false) 
                    ? (<p><i className="cart plus icon"></i> Add to Cart </p>)
                    : (<p><i className="check circle outline icon"></i> Added to Cart </p>)
                    }
                    </div> */}

                </div>


               
            </div>
        </div> 
    )
  }
}
