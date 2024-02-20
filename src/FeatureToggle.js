// Create functional component 

//The component should render the featureName if isEnabled is true.If isEnabled is false, the component should render "Feature [featureName] is disabled".;
export default function FeatureToggle({isEnable,featureName}) {
    //console.log(props)
    if(isEnable) {
        return <p>{featureName}</p>
    }
     return <p>{`Feature ${featureName} is disabled`}</p>;
}