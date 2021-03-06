import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='task-wrapper'>
                <input type="checkbox" id="task" />
                <label htmlFor="task">{ this.props.task }</label>
            </div>
        );
    }
}
