## Step 3: Adding Navigator

##### Goal

Learn how to use Navigator component.

##### Before getting started

If you are building your app from scratch: [Step1](/tutorial/step02_touch_handler/) needs to be completed.

OR

If you just want to practice this step: you can start editing [Step1 components](/tutorial/step02_touch_handler/) in this repo and run

```

npm run step2

```

***

##### 1. Create [app/PageA/](/tutorial/step03_navigator/app/PageA/) folder.

##### 2. Create [app/PageA/styles.js](/tutorial/step03_navigator/app/PageA/styles.js) file.

```js

module.exports = {
  container:{
    flex:1,
    backgroundColor:'white',
    padding:50
  },
  text:{
    fontSize:50,
    color:'green',
    textAlign:'center'
  }
};

```

##### 3. Create [app/PageA/index.js](/tutorial/step03_navigator/app/PageA/index.js) file.

```js

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    alert('Pressed!');
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Page A</Text>
        </TouchableOpacity>
      </View>
    );
  },
});


```

##### 4. Modify [app/index.js](/tutorial/step03_navigator/app/index.js) file.

```js

import React, {
  Text,
  View,
  Navigator,

} from 'react-native';

import styles from './styles';

import PageA from './PageA';

module.exports = React.createClass({
  renderScene(route,navigator){
    return <PageA navigator={navigator} route={route} />;
  },
  render() {
    return (
      <Navigator
        initialRoute={{name:'PageA'}}
        renderScene={this.renderScene}
      />
    );
  },
});


```

##### 5. Trigger navigation 

Modify `handlePress` method in [app/PageA/index.js](/tutorial/step03_navigator/app/PageA/index.js) component

```js

import React, {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

module.exports = React.createClass({
  handlePress(){
    if(this.props.navigator){ /* <-- Add this line */
      this.props.navigator.push({name:'PageA'}); /* <-- Add this line */
    } /* <-- Add this line */
  },
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={styles.text}>Page A</Text>
        </TouchableOpacity>
      </View>
    );
  },
});

```
****

##### Expected Result:

Tap on 'Page A' text and observe Navigator transition animation:

![iOS Screenshot](/tutorial/README_FILES/step3.png?raw=true)

***

##### Next Step:

Let's add Router logic

[Step4: Working with Navigator Routing](/tutorial/step04_navigator_routing/)