import { createSelector } from 'reselect';

const optionsListSelector = state => state.options.optionsList;

const selectedIdSelector = state => state.options.selected;

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => allOptionsList.filter(option => selectedIds.includes(option.id))
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => allOptionsList.filter(option => !selectedIds.includes(option.id))
);
