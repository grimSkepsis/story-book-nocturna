// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';
import {moduleMetadata} from "@storybook/angular";
import {ClarityModule} from "@clr/angular";

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
  argTypes: {
    smallButton: {
      control: 'boolean',
    },
    iconShape: {
      control: 'text',
    }
  },
} as Meta;


//
const Template: Story<Button> = (args: Button,  {argTypes} ) => ({
  component: Button,
  props: args
});
//
export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  classes: 'btn btn-primary'
};
Primary.argTypes = {
  smallButton: {
    control: 'boolean',
  }
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  classes: 'btn'
};
Secondary.argTypes = {
  smallButton: {
    control: 'boolean',
  }
};
Secondary.parameters = {
  docs: {
    source: {
      code: `<button class="btn">Secondary Button</button>`
    }
  }
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  classes: 'btn btn-link'
};
Tertiary.argTypes = {
  smallButton: {
    control: 'boolean',
  }
};
// Primary.parameters = {
//   docs: {
//     source: {
//       code: `Some custom string here ${Primary.args.classes} ${Primary.args.smallButton ? 'btn-sm' : ''}`
//     }
//   }
// }

// export const PrimarySmall = Template.bind({});
// PrimarySmall.args = {
//   label: 'Primary Button Small',
//   classes: 'btn btn-primary ',
//   sizeClass: 'btn-sm'
// };
//
// PrimarySmall.parameters = {
//   docs: {
//     source: {
//       code: `Some custom string here ${PrimarySmall.args.classes}${PrimarySmall.args.sizeClass}`
//     }
//   }
// }
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary Button Large',
//   classes: 'btn'
// };
//
// export const SecondarySmall = Template.bind({});
// SecondarySmall.args = {
//   label: 'Secondary Button Small',
//   classes: 'btn btn-sm'
// };
