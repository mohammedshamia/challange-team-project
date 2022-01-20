/*import { ReactNode } from "react";
import styled from "styled-components";
import { Card } from '@mui/material';
import CardComponent from './index';
import { Card } from '@mui/material';

interface Iprpos {
  width: string;
  borderRadius?:string;
  background?:string;
  height?:string;
  img?:string;
}

export const CardContiner= styled.div<Iprpos>((props: Iprpos) => ({
  width: props.width,
  borderRadius:props.borderRadius||'none',
  backgroundColor:props.background||"white",
}));

export const CardIamge= styled.div<Iprpos>((props: Iprpos) => ({
    width: props.width,
    height: props.height,
    borderRadius:props.borderRadius||'none',
    backgroundImage:'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREhUQERIQEhEREhISERISDxIQERISGBQaGhgUGBgcIC4lHB44HxgYJjwmKy8xNTY1GiRIQDszPy40NTEBDAwMEA8QGhISHDQjJSs0NDQ0MTE0NDE4Njc0NDE2PzQxMTY2NDQ0NDc2NjcxMTE1NDY0PTQ0MT80ND80NDE1NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBAYIBwP/xABLEAACAQIBBwUMBgYJBQAAAAAAAQIDEQQFBhIhMVFzNHGRsbMHEyIyMzVBYXKBstIWF0JUlKEjUmLB0/AUJFNjdJKToqMlw9Hh8f/EABoBAQEBAAMBAAAAAAAAAAAAAAABAgMEBQb/xAAuEQEAAQMCAwYFBQEAAAAAAAAAAQIDESExBEHwElFhkcHRMnGBobEFE2LC4SL/2gAMAwEAAhEDEQA/APZgAAAAAAACExedGBpNxniaWlF2lGDdWSe5qCdmaNn3nROpOWGpSaoQk4SUXbv04u09J/qJpx0fS1K91Y0icZ2vKSirals1epbi4HtH02yb95/4K/yD6bZN+8/8Ff5Dw2Un6JNlsXKT0U3vezUhge5Sz6yYtTxKu9i7zXu/9hX6cZN+8P8AD4j5DmrH5RlKbUJyjBOy0W1petvbL3/kR0pt7W3ztsg6m+m+TfvD/D4j5B9N8m/eH+HxHyHLF+cXA6n+m+TfvD/D4j5B9OMm/eH+HxHyHLFxcDqf6c5N+8P8PiPkKfTjJv3h/h8R8hy1d730lNJ730gdTfTjJv3h/h8R8g+nGTfvD/D4j5DlnSe99JW73vpA6rw+eGTptRWLpRbaS745Ubt7EnNK7J2Mk1dNNPWmtaaOO6eJqR8Wc480mj0vub56VMM4wqzcsNpqNaL2UlLZWivspa20tTSlqvbSD3sFCoAAAAAAAAAAAAAAPhjK3e6c5/qQnP8Ayxb/AHH3MHLXJcRwK3wSA8Fi9KdJTel+jpuTe2TeuT53r6TW8tV51sQ4SlaKcUo7I60npPp6LGx5Qioqm46v0cHt9RCY7DKctNLX6nZm+aMPAzlB6N3bV6b21pW/Mloz0aGImvGVKSi/SruMb9E2YNDDta3ZW9F7697ZlS5JiH+w/jpElWogus9z6BZ7n0GRafeioa9K97eDbefKz3PoFnufQBWGjfwtK37Nr3959P0f95/tPlZ7n0Cz3PoA+j73Z207+i+ja58S6z3PoFnufQBaC6z3PoFnufQBaTma0/0s4PXGdCo2vXBaa/OJC2e59BL5sL9PLgYjspAdNZpV5VMBhZzd5PD0tJ75KCTfSiZIHMfzbheDHrZPAAAAAAAAAAAAAAAwctclxHArfBIzjBy1yXEcCt8EgPBMqeLT4cOojJEllTxafDh1EZI2i2R9sRBLB1bemipP1t1Kes+Ei6TbwmIv6INL1LTpaiSrU57XzstuVntfOyhkLi4AC4uAAuLgALi4AC5NZseWfBxHZMhSazX8s+DiOyYHSmZHm7DcJdbJ4gcyPN2G4Uetk8AAAAAAAAAAAAAACLzkqOGDxMkk3HDVnr2eTkShEZ18gxf+Fr9nIDwzKysqa3U4dRFSZK5Z+x7EOoimzaLJM+9alo4Os7+PS0+a9Wmrf7THkzNxnI5/4ZdvEzKtKntfOyhWe187KEAAAAAAAAAAACazX8s+DiOyZCk1mv5Z8HEdkwOj8wpuWTcO3bVGcVbdGpKK/JI2M1vufebMN7NTtZmyAAAAAAAAAAAAAAAjc4KanhMRFtpSw9ZXVr+JLeSRg5a5LiOBW+CQHgOVndU+HDqIpknlXZT4cOoi2zaLJMyHNywde/2abjH2e+U31tmNJmfiuRT/AMMu3iSVaXPa+dlCs9r52UMgCqVzcM3cxcRjPCl+igpaLUl4d09at6P51FiJnZuiias4acD3DAdxzCtXq1sS/VDQil72nfoRTH9xfD6N6GJr05f3sIVY/lotCYOzGcZj7+zxAG15z5jYzJ70pwVWk3ZVaV3HmaetPnNUIlVM07gADITWa/lnwcR2bIUms1/LPg4jsmB0hmHT0cnYZXbvTctdr+HOUravQr2XqRsRA5kebsLwY9bJ4AAAAAAAAAAAAAAGDlrkuI4Fb4JGcYOWuS4jgVvgkBz/AJW2U+HDqImTJXK71U+HDqImTNotkzMq1FLB1LfYoaD51Wg/3owpH3hyPEew/jpElWqz2vnZQrPa+dlDI2vNiOGoU3jcXCdWLm6FGlGWhFy0G5zcrNqykrWs7+nUeqZpVak6ffqEP6uo3lVreAo6MfFUlFKaSVtJX2a7s8tzczip4NaFfC08VRk4SdOoou3gyTtdPbpR/wAvPfbM7+6E8XQWGwse805xSklZO1vE1akjcXIxFMU6zz5O1TaqqnETGI62/Hkk6HdTqqu6cqNOVLT0VOEpKTje11dWl+R6tgsR3yEZ21SSev1nOmQsmyxGKpQim4xcVJ21WvdntGXs7cNk5Kk06lVRT73G0Uk1q0pPUtmzW9hu7FMYwk2K5q7FEZn0TWUMJGcXGUYyjNNSjKKlGSfoaZ5Jnh3OYzcquBsp626Mne/sN7eZ6/W9SNtw/dLw01aph6sfZcJ9eifHF52YKr4rqwfo04JdTZIpzpMOWng+KpzE25mPOPtnXxjXxeAV6MqcnCcXCcW1KMk1JNbU16GfE9I7o+EhiIwx9K0pK1OtJKzkvsSl61s2Xaa3Hm5xzGJw6t23NurExjr3CazX8s+DiOzZCk1mv5Z8HEdmyON0pmR5uwvBj1sniBzI83YXgx62TwAAAAAAAAAAAAAAMHLXJcRwK3wSM4wctclxHArfBIDnzK+ynw4dREyZKZXeqnw4dREyZtFJMyYcjxHsP46RitmVT5HiPYl8dIkq1We187KFZ7XzsoZElh6em4aWzvbfRJo2HNvI39Kq2TtSgtKc90b2SXrevoZr9Oi5YdVIpt0qko1LfqzSceqXSiaoY50ML3iDcXWelVtqaprVGHv1t/8As1TMRGu3Wj1LcziIiNZiJz9I1+mv1eiU8tYDJ8H3rRnUinoqCutJb5Hn+Lx08RLv9RtzqylU0n63+StZJbrEPiJSktBeNOSj0sk6sNF2Xix8Bc0TFdyano8HappmuqnM6RmZ8Z2+mNfnHcysLrJ3KOSXQVKWlGUa1KNVSjsWldSi/WmmiCwZPYjHzqUqVGWjahpKLt4VpO7T99+k7dmJmIe1apqmKZjbn5T6482Oq6UXSn5GranVvsjfVGp6rN6/U3uR57j8LKjVnRmmp05uEl61qN9q01OMoP7UZR6TWs7o3qUKv2q2FoVJb3LQs2+gxfoxOXjfr3DxERdjrl7eXi10ms1/LPg4js2QpNZr+WfBxHZs4HzLpTMjzdheDHrZPEDmR5uwvBj1sngAAAAAAAAAAAAAAYOWuS4jgVvgkZxg5a5LiOBW+CQHPGVnqp8OHURUmSmVnqp8OPURUmbRa2ZdLkeI9h/HTMJmZR5FiPZl8dIkq1ee187KFZ7XzsoZE7mzje8zqJrShUp2lFq6aXpt6tb9xOYjJtarh1X0IOnpSjCcdTp1Nve5r0XVmnzGn4OooVIylfRu1P2JK0vybNlpZw4rB1XGChJOChUho3hVgl9pbJc7V16LGJ1qxM6b+ns9rheJi3wnw5xOJ03pnM6841zjfWEfQherRv8AryfvjFMkcQtZ8oLSrU5rVpyqTtu06TZkV1rJjm9ixb7NFyP5f1pfTBEmiPwaM97Dv8Ps9OxpQqpWu92s1fOyq3VhSdrUKVKmt91TjpJvnubTThpOnBuynUhFvck9KT6Is0PK1fvlepO1nKpOTW5ylexniJ1iHh/r9z/iijrr2lgk1mv5Z8HEdmyFJrNfyz4OI7JnWfLOlMx/NuF4Metk8QOY/m3C8GPWyeAAAAAAAAAAAAAABg5a5LiOBW+CRnGDlrkuI4Fb4JAc65Veqnw49RFSZJZVfg0/Yj1EXJm0WtmdR5HiPYl2lIj2SFHkeI9mXaUiSrV57XzsoVntfOyhkEbBh33+hGzSr0PA1/bpyfgx/d/9NfMrB4h056XjR2Sj+tF+j+dxmrONN3b4K/TauTFfw1RifSfnE68+eN0/gU494Ulotaas9viVEjKnrZHRnJVNNydSNoVKUmrOcIy1rn2qxM0sNKbtFaV9ltd0/SZt5l9Xw8x+3NMcp8O6Iz3a4zmOUwuwkTN0W7LeyYwWbUqdJ4nEeBRjZKMbd9qyb1RgnqXO9ltjNfytnSqOnTpQp3dtCKSl3tJWu5W277a3b0LUd+3VTRGrnnjbNu1NWYxGkzyz3RpOZ8IYeXse6CcVqqShKEEnrV2lUk/ctH3y3Gk3PtWqynJzm3KUtcm/SfE4Llfbqy+O47i54q7+5MYjaP8Aeu6NcZCazX8s+DiOyZCk1mv5Z8HEdkzjdN0pmP5twvBj1sniBzH824Xgx62TwAAAAAAAAAAAAAAMHLXJcRwK3wSM4wctclxHArfBIDnDKj8Gnw49RGSZI5Tfg0+HHqI2RtFrM/D8ixHsy7SmR7JDD8ixHsy7SkSVaxPa+dlCs9r52UMgAAMzC4ydJ3ja172avG+/nNwyTn9DDw0f6BhpyWyTqVV0q5oYHyc9HEXaI7NNWnd1+Nm15x574vHvwmqVNPwKVPxYLcv/ADt9ZqgAiMOO5cquY7U7bd0fKI0jxAAGAms1/LPg4jsmQpNZr+WfBxHZMDpTMfzbheDHrZPEDmP5twvBj1sngAAAAAAAAAAAAAAYOWuS4jgVvgkZxg5a5LiOBW+CQHNuUn4NPhrqI6RIZQfg0+GuojZG0UZIYfkWI9iXaUiOZI4fkWI9iXaUiSrWJ7XzsoVntfOyhkAAAAAAAAAAAJrNfyz4OI7JkKTWa/lnwcR2TA6UzH824Xgx62TxA5j+bcLwY9bJ4AAAAAAAAAAAAAAGDlrkuI4Fb4JGcYOWuS4jgVvgkBzXlDxafDXUR0iRx/i0+HHqI6RtFrJHD8ixHsS7SkRzJHD8ixHsS7SkSVaxPa+dlCs9r52UMgAAAAAAAAAABNZr+WfBxHZMhSazX8s+DiOyYHSmY/m3C8GPWyeIHMfzbheDHrZPAAAAAAAAAAAAAAAwctcmxHArfBIzjGx9F1KVSmts6c4LnlFr94HMmNd4w9iPUYLMms24xumnoRunqadtaMZm0Wsz8O/6niPYfaUzAZIYJaWFxMVt73N89pQl1RkSVazpveNJ7y0GRdpPeNJ7y0AXaT3n1S3zSe6zfUffJVOMpy0tsaVacVvnGnJxXSr+4wQPvOEopO94vZJa1zep+o+Wk95mYWDlSr6rxjCE77pd9jFe+0pfmYIF2m9403vLQBdpveS+bL/Tu/8AYYjspEMTea0L1Zy9EaFVN+1HQX5yQHSeY7/6bheDHrZPEHmbScMnYSMlZ/0ak2ntWlFSs+knAAAAAAAAAAAAAAAAAPCe6PmtPCV514Rbwleo5wmk2qVSbvKlLd4Tbi9lnbatejTg0dVVacZxcZxjOMk1KMkpRkntTT1NGpY7ub5MqtyjRnRb/sa04R90HeMfckXKOf3Fn1wOJ71N38Sa0Zarpei9t2tp+pnuH1VZO/Xxf+tD5Cku5Rk57Z4v/Vp/IMq59xuFdOT1PQbvCW2LXotL0/zsMM6PpdyvJ8PFqY1J7V3+FujQsXvuXZO9LxD55UX/ANsg5tB0l9VuTv7/AKaPyD6rcnb6/TR/hgc40qrhJTi7Si009zR9as4SekouDe2MbOF/2b60vVrOifqsydvr9ND+GU+qzJ2+v00P4YHPE8U+996itGDkpS9LnJXUW3uSbsvWzFOkfqsydvxHTR/hj6rMnb6/TR+QDm4HSP1WZO31+mj/AAx9VmTt9fpo/wAMDnCKbdkm29iWtnoHc7zVq4upoOEo0XKLxU2mlGnHWqS/ae7arpu1lpes4Puc5OptN06lSzvaVaUY++MNFNep3NpwuGp0oRp0oQpwgrRhCCjCK3JLUgPrCKSSSskkklsSXoLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/Z)'
    
}));

import styled from "styled-components";
import { Card, Typography } from '@mui/material';

interface Iprpos {
  width:string,
  height?:string,
  backgroundcolor?:string,
  borderradius?:string,
  padding?:string,

}



export const CardContainer = styled(Card)<Iprpos>((props: Iprpos) => ({
  width: props.width,
  height: props.height,
  background:'red',
  borderRadius: props.borderradius || "0px",
  padding:props.padding,
  boxSizing: 'border-box',
}));

export const ImgContainer = styled.div<Iprpos>((props: Iprpos) => ({
  width: props.width,
  height: props.height,
  backgroundColor: props.backgroundcolor,
  borderRadius: props.borderradius || "0px",
  padding:props.padding,
  boxSizing: 'border-box',
}));


export const TypograpyComponent = styled(Typography)<Iprpos>((props: Iprpos) => ({
  padding:props.padding,
}));

export const SittingContainer = styled.div`
width:70%;
display:flex;
align-items:center;
justify-content:space-between;
margin-left:10%;

`;*/

import { Card } from "@mui/material";
import styled from "styled-components";

interface Iprpos {
  width: string;
  borderRadius?: number;
  background?: string;
  height?: string;
  padding?: string;
  boxshadow?: string;
}

export const CardContainer = styled(Card)<Iprpos>((props) => ({
  width: props.width,
  height: props.height,
  background: props.background,
  padding: props.padding,
  boxSizing: "border-box",
  boxShadow: props.boxshadow,
}));

export const SittingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: "16px";
  
`;

export const SalaryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  gap: 14px;
  margin-block:16px;
  
`;

interface IdiscountValue{
  discountValue?:number
}
export const DiscountValue = styled.span<IdiscountValue>`
   text-decoration: ${props => props.discountValue ? "solid line-through black 4px" : "none"};

  
`;
