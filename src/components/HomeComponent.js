import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function RenderReward(rewardList, key) {
    
    return (
        <div className="col-12 col-md m-1"> 
            <Card>
            <CardImg width="259" height="194" src={require('../images/'+key+'.jpg')} alt="#" />                    
                <CardBody>
                    <CardTitle>{key}</CardTitle>
                    <CardSubtitle>
                    <CardSubtitle>{rewardList[key]["available"] == true ? "Disponible": "No Disponible"}</CardSubtitle> 
                    </CardSubtitle>
                    <CardText>{rewardList[key]["name"]} , points: {rewardList[key]["points"]}</CardText>
                </CardBody>
            </Card> 
        </div>


        
    );
}
function rewards(rewardList) {
    return (      
            Object.keys(rewardList).map((i) => {
                return(    
                    RenderReward(rewardList, i)
                );
                
            })
    )
}

function Home(props) {
    const getRewards = () => {

        return rewards(props.rewards);
    }
    return (
        <div className="container">
            <div className="row align-items-start">
           
            {getRewards()}
            
            </div>
            
        </div>
    );
}

export default Home;