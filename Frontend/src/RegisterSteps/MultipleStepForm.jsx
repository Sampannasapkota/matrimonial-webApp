import React, { useState } from 'react'

const MultipleStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    const renderStep = () => {
      switch (currentStep) {
        case 1:
          return <Step1 nextStep={nextStep} />;
        case 2:
          return <Step2 nextStep={nextStep} prevStep={prevStep} />;
        case 3:
          return <Step3 nextStep={nextStep} prevStep={prevStep} />;
        case 4:
          return <Step4 prevStep={prevStep} />;
        default:
          return null;
      }
    };
  return (
    <div>MultipleStepForm</div>
  )
}

export default MultipleStepForm