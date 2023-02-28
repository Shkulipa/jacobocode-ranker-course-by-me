import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ResultsList from '../components/ResultsList';
import { Results } from 'shared/poll-types';

export default {
  title: 'ResultsList',
  component: ResultsList,
} as ComponentMeta<typeof ResultsList>;

const Template: ComponentStory<typeof ResultsList> = (args) => (
  <div className="max-w-sm m-auto h-screen">
    <ResultsList {...args} />
  </div>
);

const results: Results = [
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
];

export const ResultsBasic = Template.bind({});
ResultsBasic.args = {
  results: results,
};

const resultsLong: Results = [
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
  {
    nominationID: '1',
    score: 3,
    nominationText: 'Taco Bell',
  },
  {
    nominationID: '2',
    score: 2,
    nominationText: 'Del Taco',
  },
  {
    nominationID: '3',
    score: 1,
    nominationText: "Papa's Tacos",
  },
  {
    nominationID: '4',
    score: 1,
    nominationText: 'Los Taqueros Locos con Nomre Largo',
  },
];

export const ResultsLong = Template.bind({});
ResultsLong.args = {
  results: resultsLong,
};
