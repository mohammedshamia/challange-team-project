


import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import RatingComponent from '../../../Rating';
import { Reviewer } from '../../Review';
import Input from '@mui/material/Input';
import { RatingContiner } from '../../Review/Review.styled';
import {  TextareaAutosize, Typography } from '@mui/material';
import { AddReviewButton, FormContiner } from './Form.styled';
import { typography } from '@mui/system';
import { Button } from '../../../Button/Button.style';



const SignupSchema = Yup.object().shape({
  nameReviewer: Yup.string()

    .required('Required'),
    valueRating: Yup.string()
    
    .required('Required'),
    optionsReviewer: Yup.string().required('Required'),
});


export const MainForm = () => (
 
    <Formik
      initialValues={{
        nameReviewer: '',
        valueRating: 0,
        optionsReviewer: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched ,handleChange }) => (
        <FormContiner>
          <Input placeholder="your name:"   name="nameReviewer"    onChange={handleChange}  />
          {errors.nameReviewer && touched.nameReviewer ? (<Typography variant="h4" color='red'  fontSize='10px'>{errors.nameReviewer}</Typography>  ) : null}
          <RatingComponent name="valueRating" value={3.5} />
          {errors.valueRating && touched.valueRating ? ( <Typography variant="h4" color='red'  fontSize='10px'>{errors.valueRating}</Typography>  ) : null}
           <label htmlFor='optionsReviewer'>your opinine:  </label>
            <TextareaAutosize id='optionsReviewer'  name="optionsReviewer"    onChange={handleChange} maxRows={5} minRows={3} />
          {errors.optionsReviewer && touched.optionsReviewer ? <Typography variant="h4" color='red'  fontSize='10px'>{errors.optionsReviewer}</Typography>  : null}
          <AddReviewButton type="submit" >add anther reviewer</AddReviewButton>
        </FormContiner>
      )}
    </Formik>
  
);












































