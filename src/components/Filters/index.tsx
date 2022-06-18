import { Col, Input, Radio, RadioChangeEvent, Row, Select, Tag, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from '../../redux/stores/reducers/filterSlice';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState("")
  const [status, setStatus] = useState("All")
  const [selectPriority, setSelectPriority] = useState<string[]>([])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    
    dispatch(filterSlice.actions.filterSearch(e.target.value))
  }

  const hangeFilterStatus = (e: RadioChangeEvent) => {
    setStatus(e.target.value)
    dispatch(filterSlice.actions.filterStatus(e.target.value))
  }

  const handleSelectPriority = (priority: any) => {
    setSelectPriority(priority)
    dispatch(filterSlice.actions.filterPriority(priority))
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearch}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={hangeFilterStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={selectPriority}
          onChange={handleSelectPriority}
        >
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
      </Col>
    </Row>
  );
}
