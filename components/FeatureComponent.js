import React from "react";
import Feature from "./Feature";

const FeatureSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-8 sm:px-20">
      <Feature
        imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/53ad3716-multor-feature1-image_108c04p00000000000001o.jpg"
        featureName="Feature 1"
        featureText="Talk about some of the details of your offer with a focus on the value people get back."
      />
      <Feature
        imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/adf66a57-multor-feature2-image_108c04p00000000000001o.jpg"
        featureName="Feature 2"
        featureText="Is there a pain point that your service resolves? Tell visitors about it here."
      />
      <Feature
        imageSrc="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/multor/6d486c61-multor-feature3-image_108c04p00000000000001o.jpg"
        featureName="Feature 3"
        featureText="Alternatively, you could use this section to address some frequently asked questions."
      />
    </div>
  );
};

export default FeatureSection;
