import Button from './navigationBar/Button';

import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className='button-area'>
        <Button buttonType="back"/>
      </div>
      <div className='button-area'>
        <Button buttonType="home"/>
      </div>
      <div className='button-area'>
        <Button buttonType="overview"/>
      </div>
    </div>
  )
}

export default NavigationBar;