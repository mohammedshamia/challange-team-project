import Review from './Review';
import { ContainerReviewsCard } from './ReviewsCard.styled'
import FormReview from './ReviewForm';
import React from 'react';
interface  reviewer{
    nameReviewer:string;
    valueRating:number;
    optionsReviewer:string;
    timeOfReview:string;
}
interface Iprops {
    reviewer:reviewer[]
}
type IState = {
    name:string
    time:string
    discriptions:string
    valueRating:number
  };
 export  default class ReviewsCard extends React.Component<Iprops, IState> {
    state: IState = {
    name:'',
    time:'',
    discriptions:'',
    valueRating:0,
    };

    
     handleSubmit=(  e: React.FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
        this.props.reviewer.push({
           nameReviewer:this.state.name,
           valueRating:this.state.valueRating,
           timeOfReview:this.state.time,optionsReviewer:this.state.discriptions})
        }
        handleChange=(  e: React.ChangeEvent<HTMLInputElement>)=>{
            this.setState({...this.state,[e.target.name]:e.target.value} )
            }
          
  

    render() {
        return (
            <ContainerReviewsCard>
              {this.props.reviewer.map((reviewer,index)=>(
                <Review key={index}
                    nameReviewer={reviewer.nameReviewer}
                    valueRating={reviewer.valueRating}
                    optionsReviewer={reviewer.optionsReviewer} 
                    timeOfReview={reviewer.timeOfReview}/>))}
                 <FormReview  handleSubmit={this.handleSubmit}  handleChange={this.handleChange}/>
            </ContainerReviewsCard>
       )
    }
  }