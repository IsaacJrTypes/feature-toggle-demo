//import logo from './logo.svg';
import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <>
    <FeatureToggle isEnable={false} featureName="Jorge"/>
    <FeatureToggle isEnable={true} featureName="Devin"/>
    <FeatureToggle isEnable={false} featureName="Mari"/>
    <FeatureToggle isEnable={false} featureName="Karen"/>
    </>
  );
}

export default App;
