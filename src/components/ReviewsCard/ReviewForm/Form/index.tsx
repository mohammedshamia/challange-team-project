import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import RatingComponent from '../../../Rating';
import { Reviewer } from '../../Review';

const SignupSchema = Yup.object().shape({
  nameReviewer: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    valueRating: Yup.number()
    .required('Required'),
    optionsReviewer: Yup.string().max(50, 'Too Long!').min(2, 'Too Short!').required('Required'),
});
const initialValues:Reviewer = {
  nameReviewer:'',
  valueRating:0,
  optionsReviewer:''
 };

interface IProps {
    addAntherReviewer:Function 
}

export const MainForm = ({addAntherReviewer}:IProps) => (

    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
          console.log(values);
          addAntherReviewer(values)
      }}
    >
      {({ errors, touched ,handleChange }) => (
        <Form>
          <Field name="nameReviwer" onChange={handleChange} />
          {errors.nameReviewer && touched.nameReviewer ? (
            <div>{errors.nameReviewer}</div>
          ) : null}
          <RatingComponent value={0}  name='valueRating' />
          {errors.valueRating && touched.valueRating ? (
            <div>{errors.valueRating}</div>
          ) : null}
          <Field name="optionsReviewer"   onChange={handleChange}/>
          {errors.optionsReviewer && touched.optionsReviewer ? <div>{errors.optionsReviewer}</div> : null}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  
);












































