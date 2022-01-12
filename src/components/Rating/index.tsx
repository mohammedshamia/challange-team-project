import Rating from '@mui/material/Rating';

interface  Iprops{
value:number
precision:number
}
 

 function HalfRating({value,precision}:Iprops) {
  return (
    <>
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </>
  );
}
export default HalfRating;