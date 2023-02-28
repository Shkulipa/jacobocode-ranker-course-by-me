import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResultCard from '../components/ui/ResultCard';
import { Result } from 'shared/poll-types';

export default {
  title: 'ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <div className="max-w-sm m-auto h-screen">
    <ResultCard {...args} />
  </div>
);

const result: Result = {
  nominationID: '1',
  score: 5.0,
  nominationText: 'Taco Bell',
};

export const ResultCardLong = Template.bind({});
ResultCardLong.args = {
  result,
};
