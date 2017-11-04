import { isEmpty } from 'lodash';
import * as React from 'react';
import { arrayMove } from 'react-sortable-hoc';

import { SortableListProps } from './SortableListProps';

const Sortable  = require('sortablejs');

export class SortableList extends React.Component<SortableListProps> {

  private list: HTMLElement;

  public state = {
    items: this.props.items
  };

  public componentDidMount() {
    this.list = document.getElementById(this.props.listElementId);
    Sortable.create(this.list, {
      group: 'group',
      pull: true,
      put: true,
      animation: 75,
      handle: 'div',
      onAdd: this.onAdd,
      onUpdate: this.onUpdate,
      filter: '#noDraggable'
    });
  }

  public componentWillReceiveProps() {
    this.setState((prev: any) => ({
      ...prev,
      items: this.props.items
    }));
  }

  private onAdd = (event: any) => {
    this.props.onListChange({
      from: event.from.id,
      to: event.to.id,
      item: event.item
    });
  }

  private onUpdate = (event: any) => {
    this.props.onSortFinish({
      old: this.props.items,
      updated: arrayMove(this.props.items, event.oldIndex, event.newIndex)
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <div
          id={ this.props.listElementId }
          ref={ this.props.listElementId }
          style={ {minHeight: '20px'} }
        >
          { this.props.items }
        </div>
        { !this.state.items && this.props.noDataInfo }
      </div>
    );
  }
}
