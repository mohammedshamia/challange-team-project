import { Typography } from '@mui/material'
import { categroyCard } from '..'
import { CardContainer } from '../../Card/Card.style'

interface IProps extends categroyCard {}

export default function CategroyCard({img,name}:IProps) {
    return (
     
      <CardContainer width='98%' height='250px' sx={{borderRadius:0, background:'white' ,boxShadow:'none',}}>
          <CardContainer width='100%' height='89%'  sx={{borderRadius:'20px',background:'#F7F8FC'}} >
           <img  src={img} alt=''  width='80%' height='70%' style={{margin:'10% 12%'}}/>
          </CardContainer>
        <Typography sx={{textAlign:'center', marginTop:'3%'}}>{name}</Typography>
      </CardContainer>
    )
}


