import { Button, Input, Select, Tag } from 'antd';
import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PropsTodo {
  addTodo: any
}
export const TodoAdd = (props: PropsTodo) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('Medium')
  const {addTodo} = props
  const handleSubmitForm = () => {
    addTodo({
      id: uuidv4(),
      name: text,
      completed: false,
      priority: priority
    })
    setText('')
    setPriority('Medium')
  }
  const handleChoosePriority = (value: string) => {
    setPriority(value)
  }

  return (
    <Input.Group style={{ display: 'flex' }} compact>
      <Input value={text} onChange={(e) => setText(e.target.value)}/>
      <Select value={priority} onChange={handleChoosePriority}>
        <Select.Option value='High' label='High'>
          <Tag color='red'>High</Tag>
        </Select.Option>
        <Select.Option value='Medium' label='Medium'>
          <Tag color='blue'>Medium</Tag>
        </Select.Option>
        <Select.Option value='Low' label='Low'>
          <Tag color='gray'>Low</Tag>
        </Select.Option>
      </Select>
      <Button type='primary' onClick={handleSubmitForm}>
        Add
      </Button>
    </Input.Group>
  )
}


export default memo(TodoAdd)