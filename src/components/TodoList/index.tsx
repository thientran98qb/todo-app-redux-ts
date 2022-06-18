import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ListTodo } from '../../models';
import { remainingSelector } from '../../redux/selectors/todoSelector';
import todoSlice from '../../redux/stores/reducers/todoSlice';
import Todo from '../Todo';
import TodoAdd from '../TodoAdd';

const TodoList = () => {
  const dispatch = useDispatch()
  const lists = useSelector(remainingSelector)
  const addTodo = (todo: ListTodo) => {
    dispatch(todoSlice.actions.addTodo(todo))
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {lists.map((todo: ListTodo) => (<Todo key={todo.id} id={todo.id} completed={todo.completed} name={todo.name} prioriry={todo.priority} />))}
      </Col>
      <Col span={24}>
        <TodoAdd addTodo={addTodo}/>
      </Col>
    </Row>
  );
}

// const mapStateToProps = (state: any) => ({
//   lists: state.todos.lists.filter((item: any) => item.name.includes(state.todos.filters.search))
// })

// const mapDispatchToProps = (dispatch: any) => ({
//   addTodo: (todo: ListTodo) => dispatch(todoAction.addTodo(todo))
// })

export default TodoList;