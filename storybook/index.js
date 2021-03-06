// if you use expo remove this line
import { AppRegistry } from 'react-native';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  require('../src/components/molecules/Button.stories');
  require('../src/components/atoms/checkboxs/Checkbox.stories');
  require('../src/components/molecules/Card/Card.stories')
  require('../src/components/atoms/labels/Label.stories');
  require('../src/components/molecules/LabeledCheckbox.stories');
  require('../src/components/atoms/images/ImageAtom.stories');
  require('../src/components/atoms/icon/Icon.stories');
  require('../src/components/atoms/input/Input.stories');
  require('../src/components/molecules/inputfield/InputField.stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
