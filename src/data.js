import workIcon from './assets/icon-work.svg';
import playIcon from './assets/icon-play.svg';
import studyIcon from './assets/icon-study.svg';
import exerciseIcon from './assets/icon-exercise.svg';
import socialIcon from './assets/icon-social.svg';
import selfcareIcon from './assets/icon-self-care.svg';

export const tabsData = [
  {
    id: 1,
    tabTitle: 'Daily',
  },
  {
    id: 2,
    tabTitle: 'Weekly',
  },
  {
    id: 3,
    tabTitle: 'Monthly',
  },
];

export const timesData = [
  {
    id: 1,
    icon: workIcon,
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    id: 2,
    icon: playIcon,
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    id: 3,
    icon: studyIcon,
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    id: 4,
    icon: exerciseIcon,
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    id: 5,
    icon: socialIcon,
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    id: 6,
    icon: selfcareIcon,
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
