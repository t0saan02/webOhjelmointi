import React from "react";
import Title from "./components/Title";
import ShoppingList from "./components/ShoppingList";
import Button from "./components/Button";
import styles from "./App.module.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    
    super(props);

    this.state = {
      items: [
        { id: 1, value: "Milk", qty: 7, unit: "l" },
        { id: 2, value: "Bananas", qty: 8, unit: "pcs" },
        { id: 3, value: "Bread", qty: 9, unit: "x" },
        { id: 4, value: "Eggs", qty: 3, unit: "x" },
      ],
    };
  }

  updateList = (id) => {
    console.log(id);
    const newArr = this.state.items.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          qty: item.qty + 1,
        };
      }
      return item;
    });
    this.setState({ items: newArr });
  };

  addToList = (newItem) => {
    const elementExists = this.state.items.find((item) => {
      return newItem.value === item.value;
    });
    if (elementExists) return;

    const obj = { ...newItem, id: this.state.items.length + 1 };
    const newList = [...this.state.items, obj];

    this.setState({ items: newList });
  };

  render() {
    const { applicationDescription, applicationName } = this.props;
    console.log(this.state);
    return (
      <div className="main-container">
        <div className={styles.shoppingList}>
          <Title
            applicationDescription={applicationDescription}
            applicationName={applicationName}
          />
          <ShoppingList items={this.state.items} />

          {this.state.items.map((item) => {
            console.log(this.state);
            return (
              <Button
                key={item.id}
                message={`Add one ${item.value}`}
                onHandleClick={() => this.updateList(item.id)}
              />
            );
          })}
          <br />
          <Button
            message="Add Toy"
            onHandleClick={() =>
              this.addToList({ value: "Toy", qty: 2, unit: "pcs" })
            }
          />
          <Button
            message="Add Pineapple"
            onHandleClick={() =>
              this.addToList({ value: "Pineapple", qty: 3, unit: "pcs" })
            }
          />
          <Button
            message="Add Chiken"
            onHandleClick={() =>
              this.addToList({ value: "Chiken", qty: 7, unit: "kg" })
            }
          />
          <Button
            message="Add Beer"
            onHandleClick={() =>
              this.addToList({ value: "Beer", qty: 8, unit: "btl" })
            }
          />
          
      
        </div>
      </div>
    );
  }
}

export default App;
