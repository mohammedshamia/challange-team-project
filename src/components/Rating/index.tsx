import Rating from '@mui/material/Rating';

type Name='disabled'|'read-only'|'no-value'|'simple-controlled'|'half-rating'|'half-rating-read';
interface  Iprops{
value:number
precision:number
isReadOnly:boolean
isDisabled :boolean
name:Name

}
 

 function RatingComponent({value,precision,isReadOnly,isDisabled,name}:Iprops) {
  return (
    <>
      <Rating name={name} defaultValue={value} precision={precision}  readOnly={isReadOnly} disabled ={isDisabled}/>
    </>
  );
}
export default RatingComponent;

