import { PureComponent, ReactNode } from "react";
import MUIStepper from "@mui/material/Stepper";
import MUIStep from "@mui/material/Step";
import MUIStepLabel from "@mui/material/StepLabel";
import { Container, StepIcon } from "./Stepper.styled";

export interface IProps {
  steps: IStep[];
  defaultActive: number;
  orientation?: "horizontal" | "vertical";
}

export interface IStep {
  text: string;
  children: ReactNode;
  last?: boolean;
}

export default class Stepper extends PureComponent<IProps> {
  render() {
    return (
      <>
        <Container>
          <MUIStepper
            activeStep={this.props.defaultActive}
            orientation={this.props.orientation || "horizontal"}
          >
            {this.props.steps.map((step, index) => (
              <MUIStep
                key={step.text}
                sx={{ fontFamily: "Mulish" }}
                className={
                  this.props.defaultActive > index
                    ? "finished"
                    : this.props.defaultActive < index
                    ? "not-reached"
                    : ""
                }
                active={this.props.defaultActive === index}
                last={step?.last || false}
              >
                <MUIStepLabel icon={<StepIcon>{++index}</StepIcon>}>
                  {step.text}
                </MUIStepLabel>
              </MUIStep>
            ))}
          </MUIStepper>
        </Container>
        {this.props.steps[this.props.defaultActive]?.children}
      </>
    );
  }
}
