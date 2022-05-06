import {formDataType} from '../components/Result';

const defaultJson: formDataType = {
  title: 'Form created from json',
  fields: [
    {
      type: 'number',
      label: 'Count',
      placeholder: '25'
    },
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Jack',
      required: true
    },
    {
      type: 'textarea',
      label: 'Description',
      placeholder: 'Enter text'
    },
    {
      type: 'checkbox',
      label: 'isEditable',
      checked: true
    },
    {
      type: 'radio',
      defaultValue: 'female',
      options: [
        {
          label: 'Female',
          value: 'female'
        },
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Other',
          value: 'other'
        }
      ]
    },
    {
      type: 'date',
      label: 'Date',
      defaultValue: '2017-05-24',
      required: true
    },
  ],
  buttons: [
    {
      label: 'Clear',
      color: 'error'
    },
    {
      label: 'Delete',
      disabled: true
    },
    {
      label: 'Send',
      color: 'success'
    }
  ]
};

export default defaultJson;