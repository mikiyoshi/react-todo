# [React App components](https://developer.mozilla.org/ja/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)

| file                       | Original | props | useState                                  | useEffect |
| -------------------------- | -------- | ----- | ----------------------------------------- | --------- |
| index.js                   | Data     |       | [tasks, setTasks] = useState(props.tasks) |           |
| App.js                     |          | props |                                           |           |
| components/Todo.js         |          | props |                                           |           |
| components/Form.js         |          | props | [name, setName] = useState('')            |           |
| components/FilterButton.js |          | props |                                           |           |

pass data from parent to child is standard props
we can't pass data from child to parent, instead we can write function `Callback props`

| props          | Data            | way      |
| -------------- | --------------- | -------- |
| props          | parent to child | Data     |
| Callback props | child to parent | Function |
