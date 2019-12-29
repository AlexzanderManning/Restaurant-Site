import React from 'react';

import { dinnerMenu, lunchMenu, breakfastMenu } from './menu-items';
import styles from './menu.module.scss';



const TestComponent = (props) => {
  return (
    props.menu.map(el => {
      return (
        <div className={styles.menuSection} key={el.title}>
          <h1>{el.title}</h1>
          <div>{el.items.map(item => <div className={styles.items} key={item.name}>
            <h4>{item.name}  ${item.price}</h4>
            <div className={styles.itemDescription}>{item.description}</div>
          </div>)}
          </div>
        </div>
      );
    })
  );
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whichMenu: 'Dinner Menu'
    }
    this.handleClick = this.handleClick.bind(this);
  }





  handleClick(e) {
    this.setState({ whichMenu: e.target.textContent });
    this.forceUpdate();
  }

  chooseMenu = () => {
    switch (this.state) {

      case (this.state.whichMenu === 'Lunch Menu'):
        console.log(this.state);
        return lunchMenu;

      default:
        console.log(this.state);
        return dinnerMenu;
    }

  }



  render() {
    if (this.state.whichMenu === 'Dinner Menu') {
      return (
        <div className={styles.bossContainer}>
          <div className={styles.menuImage}>
            <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/dinner_stl.jpg"></img>
          </div>

          <div id='menus' className={styles.menuContainer}>
            <div className={styles.menuButtons}>
              <button id='shame' onClick={this.handleClick}>Dinner Menu</button>
              <button id='shame' onClick={this.handleClick}>Lunch Menu</button>
              <button id='shame' onClick={this.handleClick}>Brunch Menu</button>

            </div>
            <div className={styles.menuFlex}>
              <TestComponent menu={dinnerMenu} />
            </div>
           
          </div>
        </div>
      );
    } else if (this.state.whichMenu === 'Lunch Menu') {
      return (
        <div className={styles.bossContainer}>
          <div className={styles.menuImage}>
            <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/lunch_stl.jpg"></img>
          </div>

          <div id='menus' className={styles.menuContainer}>
            <div className={styles.menuButtons}>
              <button onClick={this.handleClick}>Dinner Menu</button>
              <button onClick={this.handleClick}>Lunch Menu</button>
              <button onClick={this.handleClick}>Brunch Menu</button>

            </div>


            <div className={styles.menuFlex}>
              <TestComponent menu={lunchMenu} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.whichMenu === 'Brunch Menu') {
      return (
        <div className={styles.bossContainer}>
          <div className={styles.menuImage}>
            <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/brunch_stl.jpg"></img>
          </div>

          <div id='menus' className={styles.menuContainer}>
            <div className={styles.menuButtons}>
              <button onClick={this.handleClick}>Dinner Menu</button>
              <button onClick={this.handleClick}>Lunch Menu</button>
              <button onClick={this.handleClick}>Brunch Menu</button>

            </div>
            
            <div className={styles.menuFlex}>
              <TestComponent menu={breakfastMenu} />
            </div>
          </div>
        </div>
      );
    }
  };
}

export default Menu;