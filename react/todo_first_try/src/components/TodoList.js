import React from 'react';

function addToList(listkey, ref_dom, stateSetter) {
    console.log(`Adding ${ref_dom.current.value} to ${listkey}`);
    console.log(ref_dom.current.value);
    let todo_list = JSON.parse(localStorage.getItem(listkey));
    todo_list.push(ref_dom.current.value);
    stateSetter(todo_list);

    localStorage.setItem(listkey, JSON.stringify(todo_list));
    ref_dom.current.value = "";


}
export default function TodoList(props) {

    if (!localStorage.hasOwnProperty(props.listkey)) {
        localStorage.setItem(props.listkey, JSON.stringify([]));
    }

    let [todo_list, setTodoList] = React.useState(JSON.parse(localStorage.getItem(props.listkey)));
    console.log(`Look (${props.listkey}): ` + todo_list);

    let ta_ref = React.createRef()
    return (
        <div>
            <textarea type="text" placeholder="Enter a Todo item" ref={ta_ref}></textarea>
            <button type="button" onClick={() => addToList(props.listkey, ta_ref, setTodoList)}>Add Item</button>
            <ul>
                {todo_list.map(todo => (<li>{todo}</li>))}
            </ul>
        </div >
    );
}