import React from 'react';

class Home extends React.Component {
    render(){
        return(
            <section>
                <div>
                    <h1>Ux Research Project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, harum. Pariatur aperiam id aliquid architecto possimus nesciunt amet ipsum, corporis vitae vel. Esse ducimus in doloremque, officia facilis saepe voluptate?</p>
                </div>
                <div>
                    <img src={require(`./images/minimal-one.jpg`)} placeholder='alt-text' />
                </div>
            </section>
        )
    }
}

export default Home