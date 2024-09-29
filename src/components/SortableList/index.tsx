import { HolderOutlined } from '@ant-design/icons';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, Flex, List } from 'antd';
import React from 'react';

export type SortableItemProps = {
  id: string;
  title: string;
  [key: string]: unknown;
};

type SortableListProps<T extends SortableItemProps> = {
  items: T[];
  onUpdate: (items: T[]) => void;
  renderItem: (item: T) => React.ReactNode;
};

const SortableItem = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: 'none',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
};

const SortableList = <T extends SortableItemProps>({
  items,
  renderItem,
  onUpdate,
}: SortableListProps<T>) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over?.id);
      onUpdate(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <SortableItem id={item.id}>
                <Flex gap={10}>
                  <HolderOutlined
                    style={{
                      color: '#cccccc',
                    }}
                  />
                  {renderItem ? renderItem(item) : <Card>{item.title}</Card>}
                </Flex>
              </SortableItem>
            </List.Item>
          )}
        />
      </SortableContext>
    </DndContext>
  );
};

export default SortableList;
