import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../../redux/actions';
import todoSlice from '../../redux/stores/reducers/todoSlice';

export interface Priority {
  [key: string]: string,
  High: string,
  Medium: string,
  Low: string
}
const priorityColorMapping: Priority = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export interface TodoProps {
  id: number | string;
  completed:boolean;
  name: string;
  prioriry: string
}
const Todo = ({ id, completed, name, prioriry }: TodoProps) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.toggleCompleted(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
export default Todo
