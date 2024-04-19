import React, { useState, useReducer } from 'react';
import {
  Menu,
  Button,
  Grid,
  TextInput,
  Divider,
  Paper,
  Flex,
  Text,
  Checkbox,
  Group,
  NumberInput,
  Textarea,
  Select,
  Radio,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import {
  IconSettings,
  IconSelector,
  IconTextSize,
  IconNotes,
  IconNumbers,
  IconList,
  IconCheckbox,
  IconMedicineSyrup,
  IconSearch,
  IconDatabase,
  IconCalendar,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { tw } from 'twind';
import { upperFirst, lowerCase, eq } from 'lodash';
import {
  TextField,
  HHFieldBase,
  HHField,
  InputType,
  OptionsField,
  DurationUnit,
  DoseUnit,
  MedicineRoute,
  MedicineForm,
} from '../../types/Inputs';

const concentationUnitOptions: DoseUnit[] = ['mg', 'g', 'mcg', 'mL', 'L', 'units'];
const durationUnitOptions: DurationUnit[] = ['days', 'weeks', 'months', 'years'];

const routeOptions: MedicineRoute[] = [
  'oral',
  'sublingual',
  'rectal',
  'topical',
  'inhalation',
  'intravenous',
  'intramuscular',
  'intradermal',
  'subcutaneous',
  'nasal',
  'ophthalmic',
  'otic',
  'vaginal',
  'transdermal',
  'other',
];

const formOptions: MedicineForm[] = [
  'tablet',
  'syrup',
  'ampule',
  'suppository',
  'cream',
  'drops',
  'bottle',
  'spray',
  'gel',
  'lotion',
  'inhaler',
  'capsule',
  'injection',
  'patch',
  'other',
];

type MedicineInputProps = {
  field: HHField;
};

export const MedicineInput = React.memo(
  ({ field }: MedicineInputProps) => {
    console.log('MEDICINE INPUT', field);
    return (
      <div>
        <h4 className={tw(`text-lg font-bold`)}>{field?.name || 'Medicine'}</h4>
        <h6 className={tw(`text-sm text-gray-500`)}>
          {field?.description || 'Enter the medicine details'}
        </h6>
        <div className={tw('space-y-3')}>
          <div className={tw(`flex space-between space-x-4`)}>
            <TextInput className={tw(`flex-1`)} label="Medicine Name" />
            <Select
              data={formOptions.map((opt) => ({ label: upperFirst(opt), value: opt }))}
              label="Medicine Form"
            />
          </div>

          <div className={tw(`flex space-between space-x-4`)}>
            <NumberInput className={tw(`flex-1`)} type="number" label="Concentration" />
            <Select
              className={tw(`flex-1`)}
              data={concentationUnitOptions.map((opt) => ({ label: opt, value: opt }))}
              label="Unit"
            />
          </div>

          <div className={tw(`flex space-between space-x-4`)}>
            <TextInput
              className={tw(`flex-1`)}
              label="Frequency & Duration"
              placeholder="1 x 3 x 4 days"
            />
            <Select
              className={tw(`flex-1`)}
              data={routeOptions.map((opt) => ({ label: upperFirst(opt), value: opt }))}
              label="Route"
            />
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => eq(prevProps.field, nextProps.field)
);
